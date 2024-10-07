import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'
import { showToast } from 'utils/helper'

// Returns the current authenticated user
export const getCurrentUser = (): FirebaseAuthTypes.User | null => auth().currentUser

// Gets the current user's UID
export const getCurrentUserUid = () => auth().currentUser?.uid

export const loginWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        await auth().signInWithEmailAndPassword(email, password)
        navigation.navigate('DrawerNavigation')
    } catch (error) {
        if (error == "Error: [auth/invalid-email] The email address is badly formatted.")
            showToast('Geçersiz-e-posta:', " E-posta adresi kötü biçimlendirilmiş geçerli bir e-posta giriniz.", "bottom")

        if (error == "Error: [auth/invalid-credential] The supplied auth credential is incorrect, malformed or has expired.")
            showToast('Hatalı giriş:', " E-posta adresi bulunamadı veya şifreniz hatalı.", "bottom")
    }
}

// Creates a new user with email and password
export const signUpWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password)
        await userCredential.user.sendEmailVerification()
        navigation.navigate('JobInfoScreen')
    } catch (error) {
        if (error == "Error: [auth/invalid-email] The email address is badly formatted.")
            showToast('Geçersiz-e-posta:', " E-posta adresi kötü biçimlendirilmiş geçerli bir e-posta giriniz.", "bottom")
        if (error == "Error: [auth/weak-password] The given password is invalid. [ Password should be at least 6 characters ]")
            showToast('Geçersiz şifre:', " Verilen şifre geçersiz. [ Şifre en az 6 karakter olmalıdır. ]", "top")
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