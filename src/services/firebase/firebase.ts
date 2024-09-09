import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

export const getCurrentUser = (): FirebaseAuthTypes.User | null => auth().currentUser


export const loginWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        await auth().signInWithEmailAndPassword(email, password)
        console.log('User account signed in!')
        navigation.navigate("TabNavigation")
    } catch (error: any) {
        handleFirebaseError(error, 'login')
    }
}

export const signUpWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password)
        console.log('User account created!')
        await userCredential.user.sendEmailVerification()
        navigation.navigate("JobInfoScreen")
    } catch (error: any) {
        handleFirebaseError(error, 'signup')
    }
}

export const handleSignOut = async () => {
    try {
        await auth().signOut()
        console.log('User signed out!')
    } catch (error: any) {
        console.error('Error signing out:', error.message)
    }
}

export const saveUserProfile = async (userProfile: { uid: string, name: string, surname: string, email: string, location: string, job: string, title: string }) => {
    const { uid, ...profileData } = userProfile
    await firestore().collection('users').doc(uid).set(profileData)
}

const handleFirebaseError = (error: any, context: 'login' | 'signup') => {
    const errorMessages: { [key: string]: string } = {
        'auth/weak-password': 'Şifreniz en az 6 karakter olmalıdır!',
        'auth/email-already-in-use': 'Bu mail adresi daha önce kullanılmış!',
        'auth/invalid-email': 'Lütfen geçerli bir mail adresi giriniz!',
        'auth/invalid-credential': 'Verilen kimlik bilgisi yanlış!',
        'auth/user-not-found': 'Böyle bir kullanıcı yok!',
        'auth/wrong-password': 'Şifre yanlış!'
    }

    const errorMessage = errorMessages[error.code] || error.message
    console.error(`Error during ${context}:`, errorMessage)
}
