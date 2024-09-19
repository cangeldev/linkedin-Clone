import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import storage from '@react-native-firebase/storage'

// Returns the current authenticated user
export const getCurrentUser = (): FirebaseAuthTypes.User | null => auth().currentUser

export const getCurrentUserUid = auth().currentUser?.uid

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
export const fetchNonFriendUsers = async () => {
    try {
        const currentUser = auth().currentUser?.uid;
        if (!currentUser) return []; // Kullanıcı yoksa boş döndür

        // Arkadaşları bulma
        const friendsCollection = await firestore()
            .collection('friends')
            .where('user1', '==', currentUser)
            .get();

        const friendsCollection2 = await firestore()
            .collection('friends')
            .where('user2', '==', currentUser)
            .get();

        // Arkadaşları birleştirme
        const friendsList = [
            ...friendsCollection.docs.map(doc => doc.data().user2),
            ...friendsCollection2.docs.map(doc => doc.data().user1),
        ];

        // Arkadaş olmayan kullanıcıları bulma
        const nonFriendUsersCollection = await firestore()
            .collection('users')
            .where(firestore.FieldPath.documentId(), 'not-in', [currentUser, ...friendsList]) // Kendini ve arkadaşlarını hariç tut
            .get();

        // Kullanıcı verilerini dönüştürme
        const nonFriendUsers = nonFriendUsersCollection.docs.map(doc => ({
            ...doc.data(),
            id: doc.id, // Kullanıcının ID'si
        }));

        return nonFriendUsers;
    } catch (error) {
        console.error('Error fetching non-friend users:', error);
        return []
    }
}

export const sendFriendRequest = async (currentUserId: any, friendUserId: any) => {
    await firestore().collection('friendRequests').add({
        from: currentUserId,
        to: friendUserId,
        status: 'pending',
    })
}

export const acceptFriendRequest = async (requestId: any) => {
    const request = await firestore().collection('friendRequests').doc(requestId).get()

    if (request.exists) {
        const { from, to }: any = request.data()
        await firestore().collection('friends').add({ user1: from, user2: to })
        await firestore().collection('friendRequests').doc(requestId).delete()
    }
};
export const fetchUsersWithSenderInfo = async () => {
    try {
        const currentUser = auth().currentUser?.uid;
        if (!currentUser) return []

        const requestsCollection = await firestore()
            .collection('friendRequests')
            .where('to', '==', currentUser) // Sadece currentUser için gelen istekleri al
            .get();

        const requestsList = requestsCollection.docs.map(doc => ({
            ...doc.data(),
            id: doc.id, // İsteğin ID'sini ekle
        }));

        // Gönderen kullanıcı bilgilerini almak için parallel fetch
        const usersPromises = requestsList.map(async request => {
            const senderDoc = await firestore()
                .collection('users') // Kullanıcı bilgilerini içeren koleksiyon
                .doc(request.from)
                .get()

            return {
                ...request,
                senderInfo: senderDoc.exists ? senderDoc.data() : null, // Gönderen kullanıcının bilgileri
            };
        });

        const requestsWithSenderInfo = await Promise.all(usersPromises);
        return requestsWithSenderInfo;
    } catch (error) {
        console.error('Error fetching users:', error);
        return []
    }
};
// Arkadaş listesini almak için
export const fetchFriendsList = async () => {
    try {
        const currentUser = auth().currentUser?.uid;
        if (!currentUser) return []; // Kullanıcı yoksa boş liste döndür

        // Arkadaşlık ilişkilerini bul (hem user1 hem user2 alanlarında currentUser olanları alıyoruz)
        const friendsCollection1 = await firestore()
            .collection('friends')
            .where('user1', '==', currentUser)
            .get();

        const friendsCollection2 = await firestore()
            .collection('friends')
            .where('user2', '==', currentUser)
            .get();

        // Arkadaşlarının UID'lerini toplama (Set ile tekrarı önleme)
        const friendUidsSet = new Set([
            ...friendsCollection1.docs.map(doc => doc.data().user2),
            ...friendsCollection2.docs.map(doc => doc.data().user1),
        ]);

        // Set'i diziye çevir
        const friendUids = Array.from(friendUidsSet);

        // Arkadaşların bilgilerini kullanıcılar koleksiyonundan alma
        const friendsPromises = friendUids.map(async uid => {
            const userDoc = await firestore().collection('users').doc(uid).get();
            return userDoc.exists ? { uid: userDoc.id, ...userDoc.data() } : null;
        });

        // Arkadaşların bilgilerinin tamamlanması
        const friendsList = await Promise.all(friendsPromises)

        // Geçersiz veya boş dönen kullanıcıları filtrele
        return friendsList.filter(friend => friend !== null)
    } catch (error) {
        console.error('Error fetching friends:', error)
        return []
    }
};

export const fetchNonFriendsList = async () => {
    try {
        const currentUser = auth().currentUser?.uid;
        if (!currentUser) return []; // Kullanıcı yoksa boş liste döndür

        // Arkadaşlık ilişkilerini bul
        const friendsCollection1 = await firestore()
            .collection('friends')
            .where('user1', '==', currentUser)
            .get();

        const friendsCollection2 = await firestore()
            .collection('friends')
            .where('user2', '==', currentUser)
            .get();

        // Arkadaşlarının UID'lerini toplama (Set ile tekrarı önleme)
        const friendUidsSet = new Set([
            ...friendsCollection1.docs.map(doc => doc.data().user2),
            ...friendsCollection2.docs.map(doc => doc.data().user1),
        ]);

        // Tüm kullanıcıların listesini alma
        const allUsersSnapshot = await firestore().collection('users').get();
        const allUsers = allUsersSnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }))

        // Arkadaş olmayan kullanıcıları filtreleme
        const nonFriendsList = allUsers.filter(user => user.uid !== currentUser && !friendUidsSet.has(user.uid));

        return nonFriendsList
    } catch (error) {
        console.error('Error fetching non-friends:', error);
        return []
    }
}