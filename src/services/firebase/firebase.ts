import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'

export const currentUser = (): FirebaseAuthTypes.User | null => {
    return auth().currentUser
  }
  

export const LoginWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        await auth().signInWithEmailAndPassword(email, password)
        console.log('User account signed in!')
        navigation.navigate("TabNavigation")
    } catch (error) {
        const firebaseError = error as Error as any
        switch (firebaseError.code) {
            case 'That email address is invalid!':
                console.log('Bu e-posta adresi geçersiz!')
                break;
            case 'auth/invalid-credential':
                console.log('Verilen kimlik bilgisi yanlış, Böyle bir kullanıcı yok!')
                break;
            case 'auth/invalid-email':
                console.log('Verilen mail bilgisi yanlış!')
                break;
            default:
                console.error(firebaseError.message)
        }
    }
}
export const SignUpWithEmailPassword = async (email: string, password: string, navigation: any) => {
    try {
        const userCredential = await auth()
            .createUserWithEmailAndPassword(email, password)
        console.log('User account signed in!')
        await userCredential.user.sendEmailVerification();
        navigation.navigate("ProfilePictureSettingsScreen")
    } catch (error) {
        const firebaseError = error as Error as any
        switch (firebaseError.code) {
            case 'auth/weak-password':
                console.log('Şifreniz en az 6 karakter olmalıdır!')
                break;
            case 'auth/email-already-in-use':
                console.log('Bu mail adresi daha önce kullanılmış!')
                break;
            case 'auth/invalid-email':
                console.log('Lütfen geçerli bir mail adresi giriniz!')
                break;
            default:
                console.error(firebaseError.message)
        }
    }
}

export const handleSignOut = async () => {
    try {
        await auth().signOut()
        console.log('User signed out!')
    } catch (error) {
        const firebaseError = error as Error;
        console.error('Error signing out:', firebaseError.message)
    }
}
