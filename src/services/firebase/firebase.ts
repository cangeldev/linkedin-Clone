import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

export const getCurrentUser = (): FirebaseAuthTypes.User | null => auth().currentUser

export const loginWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        await auth().signInWithEmailAndPassword(email, password)
        console.log('User account signed in!')
        navigation.navigate("DrawerNavigation")
    } catch (error) {
        handleFirebaseError(error, 'login')
    }
}

export const signUpWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        const userCredential = await auth().createUserWithEmailAndPassword(email, password)
        console.log('User account created!')
        await userCredential.user.sendEmailVerification()
        navigation.navigate("JobInfoScreen")
    } catch (error) {
        handleFirebaseError(error, 'signup')
    }
}

export const handleSignOut = async () => {
    try {
        await auth().signOut()
        console.log('User signed out!')
    } catch (error) {
        console.error('Error signing out:', error)
    }
}

export const saveUserProfile = async (userProfile: { uid: string, name: string, surname: string, email: string, location: string, job: string, title: string, profileImageUrl: string | null }) => {
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

    const errorMessage = errorMessages[error.code] || 'Bir hata oluştu. Lütfen tekrar deneyin.'
    console.error(`Error during ${context}:`, errorMessage)
}

export const uploadProfileImage = async (uid: string, profileImage: any): Promise<string | null> => {
    if (profileImage) {
        try {
            const { uri } = profileImage
            const filename = uri.substring(uri.lastIndexOf('/') + 1)
            const storageRef = storage().ref(`profile_images/${uid}/${filename}`)
            await storageRef.putFile(uri)
            return await storageRef.getDownloadURL()
        } catch (error) {
            console.error('Error uploading profile image:', error
            )
            return null
        }
    }
    return null
}

export const getUserData = async (type: string) => {

    try {
        const userUID = auth().currentUser?.uid
        const userRef = firestore().doc(`users/${userUID}`)
        const userSnapshot = await userRef.get()
        if (userSnapshot.exists) {
            const userData = userSnapshot.data()
            if (type === "name") {
                return userData?.name
            }
            if (type === "surname") {
                return userData?.surname
            }
            if (type === "profileImageUrl") {
                return userData?.profileImageUrl
            }
        }
        else {
            console.log('User document does not existasdasdas.')
            return null
        }
    } catch (error) {
        console.error('Error fetching user data:', error)
        return null
    }
}
