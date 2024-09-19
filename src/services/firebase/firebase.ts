import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

// Returns the current authenticated user
export const getCurrentUser = (): FirebaseAuthTypes.User | null => auth().currentUser

export const getCurrentUserUid = auth().currentUser?.uid

// Helper to handle Firestore queries with error handling
const handleFirestoreOperation = async (operation: Function) => {
    try {
        return await operation()
    } catch (error) {
        console.error('Firestore error:', error)
        return null
    }
}

// Signs in a user with email and password
export const loginWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        await auth().signInWithEmailAndPassword(email, password)
        navigation.navigate("DrawerNavigation")
    } catch (error) {
        handleFirebaseError(error, 'login')
    }
}

// Creates a new user with email and password
export const signUpWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password)
        await userCredential.user.sendEmailVerification()
        navigation.navigate("JobInfoScreen")
    } catch (error) {
        handleFirebaseError(error, 'signup')
    }
}

// Signs out the current user
export const handleSignOut = async (navigation: any) => {
    handleFirestoreOperation(() => auth().signOut())
    navigation.navigate("WelcomeScreen")
}

// Saves user profile data to Firestore
export const saveUserProfile = async (userProfile: { uid: string, [key: string]: any }) => {
    const { uid, ...profileData } = userProfile
    await handleFirestoreOperation(() =>
        firestore().collection('users').doc(uid).set(profileData)
    )
}

// Handles Firebase error codes and returns appropriate error messages
const handleFirebaseError = (error: any, context: 'login' | 'signup') => {
    const errorMessages: { [key: string]: string } = {
        'auth/weak-password': 'Your password must be at least 6 characters long!',
        'auth/email-already-in-use': 'This email address is already in use!',
        'auth/invalid-email': 'Please enter a valid email address!',
        'auth/invalid-credential': 'The provided credentials are incorrect!',
        'auth/user-not-found': 'No user found with this email!',
        'auth/wrong-password': 'Incorrect password!',
    }
    console.error(`Error during ${context}:`, errorMessages[error.code] || 'An error occurred.')
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
    const uid = getCurrentUserUid
    if (!uid) return null
    const userSnapshot = await handleFirestoreOperation(() =>
        firestore().collection('users').doc(uid).get()
    )
    return userSnapshot?.exists ? userSnapshot.get(field) : null
}

// Helper to fetch friends of the current user
const fetchFriendList = async (uid: string) => {
    const [friends1, friends2] = await Promise.all([
        firestore().collection('friends').where('user1', '==', uid).get(),
        firestore().collection('friends').where('user2', '==', uid).get()
    ])
    return [
        ...friends1.docs.map(doc => doc.data().user2),
        ...friends2.docs.map(doc => doc.data().user1),
    ]
}

// Fetches non-friend users
export const fetchUsers = async () => {
    const currentUser = getCurrentUserUid
    if (!currentUser) return []

    const friendsList = await fetchFriendList(currentUser)
    const nonFriendUsersCollection = await firestore()
        .collection('users')
        .where(firestore.FieldPath.documentId(), 'not-in', [currentUser, ...friendsList])
        .get()

    return nonFriendUsersCollection.docs.map(doc => ({ ...doc.data(), id: doc.id }))
}

// Sends a friend request
export const sendFriendRequest = async (currentUserId: string, friendUserId: string) => {
    await handleFirestoreOperation(() =>
        firestore().collection('friendRequests').add({
            from: currentUserId,
            to: friendUserId,
            status: 'pending',
        })
    )
}

// Accepts a friend request
export const acceptFriendRequest = async (requestId: string) => {
    const request = await handleFirestoreOperation(() =>
        firestore().collection('friendRequests').doc(requestId).get()
    )
    if (request?.exists) {
        const { from, to } = request.data()
        await firestore().collection('friends').add({ user1: from, user2: to })
        await firestore().collection('friendRequests').doc(requestId).delete()
    }
}

// Fetches friend requests with sender info
export const fetchUsersWithSenderInfo = async () => {
    const currentUser = getCurrentUserUid
    if (!currentUser) return []

    const requestsCollection = await firestore()
        .collection('friendRequests')
        .where('to', '==', currentUser)
        .get()

    const requestsList = requestsCollection.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    }))

    const usersPromises = requestsList.map(async request => {
        const senderDoc = await firestore()
            .collection('users')
            .doc(request.from)
            .get()

        return { ...request, senderInfo: senderDoc.exists ? senderDoc.data() : null }
    })

    return await Promise.all(usersPromises)
}
