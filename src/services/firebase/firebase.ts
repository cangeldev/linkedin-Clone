import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

// Returns the current authenticated user
export const getCurrentUser = (): FirebaseAuthTypes.User | null => auth().currentUser

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
        // Creates a new user and sends email verification
        const userCredential = await auth().createUserWithEmailAndPassword(email, password)
        await userCredential.user.sendEmailVerification()
        // Navigates to the job information screen on successful signup
        navigation.navigate("JobInfoScreen")
    } catch (error) {
        // Calls the error handling function on failure
        handleFirebaseError(error, 'signup')
    }
}

// Signs out the current user
export const handleSignOut = async (navigation: any) => {
    try {
        // Signs out the user
        await auth().signOut()
        navigation.navigate("WelcomeScreen")
    } catch (error) {
        // Logs error message to the console
        console.error('Error signing out:', error)
    }
}

// Saves user profile data to Firestore
export const saveUserProfile = async (userProfile: { uid: string, name: string, surname: string, email: string, location: string, job: string, title: string, profileImageUrl: string | null }) => {
    const { uid, ...profileData } = userProfile
    // Creates or updates the document in the 'users' collection with the specified UID
    await firestore().collection('users').doc(uid).set(profileData)
}

// Handles Firebase error codes and returns appropriate error messages
const handleFirebaseError = (error: any, context: 'login' | 'signup') => {
    const errorMessages: { [key: string]: string } = {
        'auth/weak-password': 'Your password must be at least 6 characters long!',
        'auth/email-already-in-use': 'This email address is already in use!',
        'auth/invalid-email': 'Please enter a valid email address!',
        'auth/invalid-credential': 'The provided credentials are incorrect!',
        'auth/user-not-found': 'No user found with this email!',
        'auth/wrong-password': 'Incorrect password!'
    }

    // Retrieves the appropriate error message based on the error code
    const errorMessage = errorMessages[error.code] || 'An error occurred. Please try again.'
    // Logs the error message to the console
    console.error(`Error during ${context}:`, errorMessage)
}

// Uploads a profile image to Firebase Storage and returns its URL
export const uploadProfileImage = async (uid: string, profileImage: any): Promise<string | null> => {
    if (profileImage) {
        try {
            const { uri } = profileImage
            const filename = uri.substring(uri.lastIndexOf('/') + 1)
            // Creates a reference to upload the image
            const storageRef = storage().ref(`profile_images/${uid}/${filename}`)
            await storageRef.putFile(uri)
            // Returns the download URL of the uploaded image
            return await storageRef.getDownloadURL()
        } catch (error) {
            // Logs error message to the console
            console.error('Error uploading profile image:', error)
            return null
        }
    }
    return null
}

// Fetches user data from Firestore
export const getUserData = async (field: string) => {
    try {
        const uid = auth().currentUser?.uid
        const userSnapshot = await firestore().collection('users').doc(uid).get()
        return userSnapshot.exists ? userSnapshot.get(field) : null
    } catch (error) {
        console.error('Error fetching user data:', error)
        return null
    }
}


//Kullanıcıları Listelemek için
export const fetchUsers = async () => {
    try {
        const currentUser = auth().currentUser?.uid
        const usersCollection = await firestore().collection('users').get()
        const usersList = usersCollection.docs
            .map(doc => ({ ...doc.data(), uid: doc.id }))
            .filter(user => user.uid !== currentUser)
        return usersList
    } catch (error) {
        console.error('Error fetching users:', error)
    }
}