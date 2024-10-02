import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'


// Returns the current authenticated user
export const getCurrentUser = (): FirebaseAuthTypes.User | null => auth().currentUser

// Gets the current user's UID
export const getCurrentUserUid = () => auth().currentUser?.uid

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
    myUid: string
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