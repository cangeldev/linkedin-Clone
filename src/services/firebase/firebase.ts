import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

// Returns the current authenticated user
export const getCurrentUser = (): FirebaseAuthTypes.User | null => auth().currentUser

// Gets the current user's UID
export const getCurrentUserUid = () => auth().currentUser?.uid

// Signs in a user with email and password
export const loginWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        await auth().signInWithEmailAndPassword(email, password)
        navigation.navigate('DrawerNavigation')
    } catch (error) {
        handleFirebaseError(error, 'login')
    }
}

// Creates a new user with email and password
export const signUpWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password)
        await userCredential.user.sendEmailVerification()
        navigation.navigate('JobInfoScreen')
    } catch (error) {
        handleFirebaseError(error, 'signup')
    }
}

// Signs out the current user
export const handleSignOut = async (navigation: any) => {
    try {
        await auth().signOut()
        navigation.navigate('WelcomeScreen')
    } catch (error) {
        console.error('Error signing out:', error)
    }
}

// Saves user profile data to Firestore
export const saveUserProfile = async (userProfile: {
    uid: string
    name: string
    surname: string
    email: string
    location: string
    job: string
    title: string
    profileImageUrl: string | null
}) => {
    const { uid, ...profileData } = userProfile
    await firestore().collection('users').doc(uid).set(profileData)
}

// Handles Firebase error codes and returns appropriate error messages
const handleFirebaseError = (error: any, context: 'login' | 'signup') => {
    const errorMessages: Record<string, string> = {
        'auth/weak-password': 'Your password must be at least 6 characters long!',
        'auth/email-already-in-use': 'This email address is already in use!',
        'auth/invalid-email': 'Please enter a valid email address!',
        'auth/user-not-found': 'No user found with this email!',
        'auth/wrong-password': 'Incorrect password!',
    }

    const errorMessage = errorMessages[error.code] || 'An error occurred. Please try again.'
    console.error(`Error during ${context}:`, errorMessage)
}

// Uploads a profile image to Firebase Storage and returns its URL
export const uploadProfileImage = async (uid: string, profileImage: any): Promise<string | null> => {
    if (profileImage) {
        try {
            const { uri } = profileImage
            const filename = uri.substring(uri.lastIndexOf('/') + 1)
            const storageRef = storage().ref(`profile_images/${uid}/${filename}`)
            await storageRef.putFile(uri)
            return await storageRef.getDownloadURL()
        } catch (error) {
            console.error('Error uploading profile image:', error)
            return null
        }
    }
    return null
}

// Fetches user data from Firestore
export const getUserData = async (field: string) => {
    try {
        const uid = getCurrentUserUid()
        if (!uid) return null
        const userSnapshot = await firestore().collection('users').doc(uid).get()
        return userSnapshot.exists ? userSnapshot.get(field) : null
    } catch (error) {
        console.error('Error fetching user data:', error)
        return null
    }
}

// Fetches all users except the current one
export const fetchUsers = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        const usersCollection = await firestore().collection('users').get()
        return usersCollection.docs
            .map(doc => ({ ...doc.data(), uid: doc.id }))
            .filter(user => user.uid !== currentUserUid)
    } catch (error) {
        console.error('Error fetching users:', error)
    }
}

// Fetches non-friend users for the current user
export const fetchNonFriendUsers = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        if (!currentUserUid) return []

        const friendsList = await getFriendUids(currentUserUid)
        const nonFriendUsersCollection = await firestore()
            .collection('users')
            .where(firestore.FieldPath.documentId(), 'not-in', [currentUserUid, ...friendsList])
            .get()

        return nonFriendUsersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        console.error('Error fetching non-friend users:', error)
        return []
    }
}

// Sends a friend request from the current user to another user
export const sendFriendRequest = async (currentUserId: string, friendUserId: string) => {
    await firestore().collection('friendRequests').add({
        from: currentUserId,
        to: friendUserId,
        status: 'pending',
    })
}

// Accepts a friend request
export const acceptFriendRequest = async (requestId: string) => {
    const request = await firestore().collection('friendRequests').doc(requestId).get()
    if (request.exists) {
        const { from, to } = request.data()!
        await firestore().collection('friends').add({ user1: from, user2: to })
        await firestore().collection('friendRequests').doc(requestId).delete()
    }
}

// Declines a friend request
export const declineFriendRequest = async (requestId: string) => {
    await firestore().collection('friendRequests').doc(requestId).delete()
}

// Fetches users along with sender info for friend requests
export const fetchUsersWithSenderInfo = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        if (!currentUserUid) return []

        const requestsCollection = await firestore()
            .collection('friendRequests')
            .where('to', '==', currentUserUid)
            .get()

        const requestsList = requestsCollection.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
        }))

        const requestsWithSenderInfo = await Promise.all(
            requestsList.map(async request => {
                const senderDoc = await firestore().collection('users').doc(request.from).get()
                return { ...request, senderInfo: senderDoc.exists ? senderDoc.data() : null }
            })
        )

        return requestsWithSenderInfo
    } catch (error) {
        console.error('Error fetching users:', error)
        return []
    }
}

// Fetches friend list for the current user
export const fetchFriendsList = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        if (!currentUserUid) return []

        const friendUids = await getFriendUids(currentUserUid)
        const friends = await Promise.all(
            friendUids.map(async uid => {
                const userDoc = await firestore().collection('users').doc(uid).get()
                return userDoc.exists ? { uid: userDoc.id, ...userDoc.data() } : null
            })
        )

        return friends.filter(friend => friend !== null)
    } catch (error) {
        console.error('Error fetching friends:', error)
        return []
    }
}

// Fetches non-friends for the current user
export const fetchNonFriendsList = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        if (!currentUserUid) return []

        const friendUids = await getFriendUids(currentUserUid)
        const allUsersSnapshot = await firestore().collection('users').get()
        const allUsers = allUsersSnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }))

        return allUsers.filter(user => user.uid !== currentUserUid && !friendUids.includes(user.uid))
    } catch (error) {
        console.error('Error fetching non-friends:', error)
        return []
    }
}

// Helper function to get friend UIDs
const getFriendUids = async (currentUserUid: string) => {
    const friendsCollection1 = await firestore()
        .collection('friends')
        .where('user1', '==', currentUserUid)
        .get()
    const friendsCollection2 = await firestore()
        .collection('friends')
        .where('user2', '==', currentUserUid)
        .get()

    return [...new Set([...friendsCollection1.docs.map(doc => doc.data().user2), ...friendsCollection2.docs.map(doc => doc.data().user1)])]
}  
