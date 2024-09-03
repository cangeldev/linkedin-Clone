import auth from '@react-native-firebase/auth'

export const signInWithEmailPassword = async (email: string, password: string) => {
    try {
        await auth().signInWithEmailAndPassword(email, password)
        console.log('User account signed in!')
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

export const handleSignOut = async () => {
    try {
        await auth().signOut()
        console.log('User signed out!')
    } catch (error) {
        const firebaseError = error as Error;
        console.error('Error signing out:', firebaseError.message)
    }
}
