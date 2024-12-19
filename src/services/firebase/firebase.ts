import firestore from '@react-native-firebase/firestore'
import { getCurrentUserUid } from './firebaseAuth'
import storage from '@react-native-firebase/storage'

// Firestore collection references
const usersCollection = firestore().collection('users')
const friendRequestsCollection = firestore().collection('friendRequests')
const friendsCollection = firestore().collection('friends')
const postsCollection = firestore().collection('posts')
const getCurrentTimestamp = () => new Date().toISOString()

// Fetches non-friend users for the current user
export const fetchNonFriendUsers = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        if (!currentUserUid) return []

        // Arkadaşlar ve UID'lerini alıyoruz.
        const friendsList = await getFriendUidsAndDetails(currentUserUid)

        // Arkadaş olmayan kullanıcıları sorguluyoruz
        const nonFriendUsersSnapshot = await usersCollection
            .where(firestore.FieldPath.documentId(), 'not-in', [currentUserUid, ...friendsList.map(friend => friend.uid)])
            .get()

        return nonFriendUsersSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        console.error('Error fetching non-friend users:', error)
        return []
    }
}

export const manageFriendRequest = async (currentUserId: string, friendUserId: string, requestId: string = '', action: 'send' | 'accept' | 'reject') => {
    const currentDate = getCurrentTimestamp()
    if (action === 'send') {
        // Arkadaşlık isteği gönderme
        await friendRequestsCollection.add({
            from: currentUserId,
            to: friendUserId,
            time: currentDate
        })
    } else if (action === 'accept' && requestId) {
        // Arkadaşlık isteği kabul etme
        const request = await friendRequestsCollection.doc(requestId).get()
        if (request.exists) {
            const { from, to } = request.data()!
            await friendsCollection.add({ user1: from, user2: to, time: currentDate })
            await friendRequestsCollection.doc(requestId).delete()
        }
    } else if (action === 'reject' && requestId) {
        // Arkadaşlık isteğini reddetme
        await friendRequestsCollection.doc(requestId).delete()
    }
}


// Fetches users along with sender info for friend requests
export const fetchUsersWithSenderInfo = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        if (!currentUserUid) return []

        const requestsSnapshot = await friendRequestsCollection
            .where('to', '==', currentUserUid)
            .get()

        const requestsList = requestsSnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id
        }))

        const requestsWithSenderInfo = await Promise.all(
            requestsList.map(async request => {
                const senderDoc = await usersCollection.doc(request.from).get()
                const requestDoc = await friendRequestsCollection.doc(request.id).get()
                const time = requestDoc.exists ? requestDoc.data()?.time : null
                return {
                    ...request,
                    senderInfo: senderDoc.exists ? senderDoc.data() : null,
                    time
                }
            })
        )
        return requestsWithSenderInfo
    } catch (error) {
        console.error('Error fetching users with sender info:', error)
        return []
    }
}

// Fetches friend list for the current user
export const fetchFriendsList = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        if (!currentUserUid) return []

        // Arkadaşları ve UID'lerini ve detaylarını alıyoruz.
        const friendsList = await getFriendUidsAndDetails(currentUserUid)

        return friendsList
    } catch (error) {
        console.error('Error fetching friends list:', error)
        return []
    }
}
const getFriendUidsAndDetails = async (currentUserUid: string) => {
    try {
        // Arkadaşları almak için iki koleksiyonu sorguluyoruz
        const friendsSnapshot1 = await friendsCollection
            .where('user1', '==', currentUserUid)
            .get()
        const friendsSnapshot2 = await friendsCollection
            .where('user2', '==', currentUserUid)
            .get()

        // Her iki koleksiyondan gelen arkadaşların UID'lerini birleştiriyoruz
        const friendUids = [
            ...friendsSnapshot1.docs.map(doc => ({ uid: doc.data().user2, time: doc.data().time })),
            ...friendsSnapshot2.docs.map(doc => ({ uid: doc.data().user1, time: doc.data().time }))
        ]

        // Arkadaşların UID'lerini benzersiz yapmak için Set kullanıyoruz
        const uniqueFriendUids = [...new Set(friendUids.map(friend => friend.uid))]

        // Kullanıcı bilgilerini almak için Firestore'dan arkadaşların tüm bilgilerini alıyoruz
        const friendsDetails = await Promise.all(
            uniqueFriendUids.map(async uid => {
                const userDoc = await usersCollection.doc(uid).get()
                const friendData = friendUids.find(friend => friend.uid === uid)
                return userDoc.exists ? { uid, ...userDoc.data(), time: friendData?.time } : null
            })
        )

        // Arkadaşları ve UID'lerini döndürüyoruz
        return friendsDetails.filter(friend => friend !== null)
    } catch (error) {
        console.error('Error fetching friend UIDs and details:', error)
        return []
    }
}

export const savePostToFirebase = (name: string, surname: string, time: any, contentText: string, comment: string, reaction: string, title: string, postImageUrl: string | null, myUid: string, profileImageUrl: any) => {
    postsCollection.add({
        name: name,
        surname: surname,
        title: title,
        time: time,
        contentText: contentText,
        comment: comment,
        reaction: reaction,
        postImageUrl: postImageUrl,
        postsUid: myUid,
        sharingProfileImageUrl: profileImageUrl
    })
}

export const getMyUserData = async () => {
    try {
        const uid = getCurrentUserUid()
        if (!uid) return null
        const userSnapshot = await usersCollection.doc(uid).get()
        return userSnapshot.exists ? userSnapshot.data() : null
    } catch (error) {
        console.error('Error fetching user data:', error)
        return null
    }
}

export const uploadPostImage = async (profileImage: any): Promise<string | null> => {
    if (profileImage) {
        try {
            const { uri } = profileImage
            const filename = uri.substring(uri.lastIndexOf('/') + 1)
            const storageRef = storage().ref(`postPictures/${filename}`)
            await storageRef.putFile(uri)
            return await storageRef.getDownloadURL()
        } catch (error) {
            console.error('Error uploading profile image:', error)
            return null
        }
    }
    return null
}

export const getPosts = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        if (!currentUserUid) return []
        const allPostsSnapshot = await postsCollection.get()
        const allPosts = allPostsSnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }))
        return allPosts.filter(user => user.postsUid !== currentUserUid)
    } catch (error) {
        console.error('Error fetching posts:', error)
        return []
    }
}

export const alreadyLiked = (
    postId: string,
    callback: (liked: boolean, typeOfLike?: string) => void
) => {
    const currentUserUid = getCurrentUserUid()
    const postRef = firestore().collection('posts').doc(postId)
    const unsubscribe = postRef.onSnapshot((snapshot) => {
        if (!snapshot.exists) {
            callback(false)
            return
        }
        const postData = snapshot.data()
        if (!postData || !postData.likes || !Array.isArray(postData.likes)) {
            callback(false)
            return
        }
        const userLike = postData.likes.find(
            (like: { likedByUid: string }) => like.likedByUid === currentUserUid
        )
        if (userLike) {
            callback(true, userLike.typeOfLike)
        } else {
            callback(false)
        }
    })
    // Aboneliği durdurmak için fonksiyon döndür
    return unsubscribe
}

export const updateLike = async (postId: string, typeOfLike: string | null) => {
    const currentUserUid = getCurrentUserUid()
    const postRef = firestore().collection('posts').doc(postId)
    const postDoc = await postRef.get()
    const postData = postDoc.data()
    if (!postData) return
    const likes = postData.likes || []
    const userLike = likes.find((like: { likedByUid: string }) => like.likedByUid === currentUserUid)
    if (typeOfLike) {
        if (!userLike) {
            await postRef.update({
                likes: firestore.FieldValue.arrayUnion({ likedByUid: currentUserUid, typeOfLike })
            })
        }
    } else if (userLike) {
        await postRef.update({
            likes: firestore.FieldValue.arrayRemove(userLike)
        })
    }
}

export const listenToPostLikes = (
    postId: string,
    callback: (likeCount: number, likeTypes: Record<string, number>) => void
) => {
    const unsubscribe = firestore()
        .collection('posts')
        .doc(postId)
        .onSnapshot((snapshot) => {
            if (snapshot.exists) {
                const data = snapshot.data()
                const likes = data?.likes || []
                const typesCount: Record<string, number> = {}
                likes.forEach((like: { typeOfLike: string }) => {
                    typesCount[like.typeOfLike] = (typesCount[like.typeOfLike] || 0) + 1
                })
                callback(likes.length, typesCount)
            } else {
                callback(0, {})
            }
        })

    return unsubscribe
}

// Mesaj gönderme
export const sendMessageFirebase = async (chatId: any, message: any, senderId: any) => {
    await firestore().collection('chats').doc(chatId).collection('messages').add({
        text: message,
        senderId: senderId,
        createdAt: firestore.FieldValue.serverTimestamp(),
    })
}

export const listenForMessages = (chatId: any, callback: any) => {
    return firestore().collection('chats').doc(chatId).collection('messages')
        .orderBy('createdAt', 'asc')
        .onSnapshot(snapshot => {
            const messages = snapshot.docs.map(doc => ({
                id: doc.id,
                ...doc.data(),
            }))
            callback(messages)
        })
}

