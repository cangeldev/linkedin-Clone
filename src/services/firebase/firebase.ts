import firestore from '@react-native-firebase/firestore'
import { getCurrentUserUid } from './firebaseAuth'
import storage from '@react-native-firebase/storage'

// Firestore collection references
const usersCollection = firestore().collection('users')
const friendRequestsCollection = firestore().collection('friendRequests')
const friendsCollection = firestore().collection('friends')
const postsCollection = firestore().collection('posts')

// Fetches all users except the current one
export const fetchUsers = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        const usersSnapshot = await usersCollection.get()
        return usersSnapshot.docs
            .map(doc => ({ ...doc.data(), uid: doc.id }))
            .filter(user => user.uid !== currentUserUid)
    } catch (error) {
        console.error('Error fetching users:', error)
    }
}

// Fetches non-friend users for the current user
export const fetchNonFriendUsers = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        if (!currentUserUid) return []

        const friendsList = await getFriendUids(currentUserUid)
        const nonFriendUsersSnapshot = await usersCollection
            .where(firestore.FieldPath.documentId(), 'not-in', [currentUserUid, ...friendsList])
            .get()

        return nonFriendUsersSnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }))
    } catch (error) {
        console.error('Error fetching non-friend users:', error)
        return []
    }
}

// Sends a friend request from the current user to another user
export const sendFriendRequest = async (currentUserId: string, friendUserId: string) => {
    const currentDate = new Date().toISOString()
    await friendRequestsCollection.add({
        from: currentUserId,
        to: friendUserId,
        time: currentDate
    })
}

// Accepts a friend request or Declines a friend request
export const handleFriendRequest = async (requestId: string, accept: boolean) => {
    const request = await friendRequestsCollection.doc(requestId).get()
    if (request.exists) {
        const { from, to } = request.data()!
        const currentDate = new Date().toISOString()

        if (accept) {
            await friendsCollection.add({ user1: from, user2: to, time: currentDate })
        }
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
        const friendUids = await getFriendUids(currentUserUid)
        const friendsWithDetails = await Promise.all(
            friendUids.map(async uid => {
                const userDoc = await usersCollection.doc(uid).get()
                const friendDoc = await friendsCollection
                    .where('user1', '==', currentUserUid)
                    .where('user2', '==', uid)
                    .get()

                const friendDocReverse = await friendsCollection
                    .where('user2', '==', currentUserUid)
                    .where('user1', '==', uid)
                    .get()

                const time = friendDoc.docs.length > 0
                    ? friendDoc.docs[0].data().time
                    : friendDocReverse.docs.length > 0
                        ? friendDocReverse.docs[0].data().time
                        : null

                return userDoc.exists
                    ? { uid, ...userDoc.data(), time }
                    : null
            })
        )
        return friendsWithDetails.filter(friend => friend !== null)
    } catch (error) {
        console.error('Error fetching friends:', error)
        return []
    }
}

// Fetches non-friends for the current user
export const fetchNonFriendsList = async () => {
    try {
        const currentUserUid = getCurrentUserUid()
        if (!currentUserUid) return []

        const friendUids = await getFriendUids(currentUserUid)
        const allUsersSnapshot = await usersCollection.get()
        const allUsers = allUsersSnapshot.docs.map(doc => ({ uid: doc.id, ...doc.data() }))

        return allUsers.filter(user => user.uid !== currentUserUid && !friendUids.includes(user.uid))
    } catch (error) {
        console.error('Error fetching non-friends:', error)
        return []
    }
}

// Helper function to get friend UIDs
const getFriendUids = async (currentUserUid: string) => {
    const friendsSnapshot1 = await friendsCollection
        .where('user1', '==', currentUserUid)
        .get()
    const friendsSnapshot2 = await friendsCollection
        .where('user2', '==', currentUserUid)
        .get()

    return [...new Set([
        ...friendsSnapshot1.docs.map(doc => doc.data().user2),
        ...friendsSnapshot2.docs.map(doc => doc.data().user1)
    ])]
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


export const addLike = async (postId: string, typeOfLike: string) => {
    console.log("addLike çalıştı")
    const currentUserUid = getCurrentUserUid()
    const postRef = firestore().collection('posts').doc(postId)

    const postDoc = await postRef.get()
    const postData = postDoc.data()

    // Eğer post verisi yoksa veya likes dizisi yoksa
    if (!postData || !postData.likes) {
        await postRef.set({
            likes: [{ likedByUid: currentUserUid, typeOfLike: typeOfLike }]
        }, { merge: true })
        return
    }

    // Kullanıcının daha önce beğenip beğenmediğini kontrol et
    const alreadyLiked = postData.likes.some((like: { likedByUid: string | undefined }) => like.likedByUid === currentUserUid)

    if (!alreadyLiked) {
        await postRef.update({
            likes: firestore.FieldValue.arrayUnion({ likedByUid: currentUserUid, typeOfLike: typeOfLike })
        })
    } else {
        console.log("Kullanıcı zaten bu gönderiyi beğenmiş.")
    }
}

export const removeLike = async (postId: string) => {
    console.log("beğeni kaldırılıyor")
    const currentUserUid = getCurrentUserUid()
    const postRef = firestore().collection('posts').doc(postId)

    const postDoc = await postRef.get()
    const postData = postDoc.data()

    // Eğer post verisi yoksa veya likes dizisi yoksa
    if (!postData || !postData.likes) {
        console.log("Henüz beğeni yok.")
        return
    }

    // Kullanıcının beğenisini kontrol et
    const userLike = postData.likes.find((like: { likedByUid: string | undefined }) => like.likedByUid === currentUserUid)

    if (userLike) {
        await postRef.update({
            likes: firestore.FieldValue.arrayRemove(userLike)
        })
        console.log("Beğeni kaldırıldı.")
    } else {
        console.log("Kullanıcı bu gönderiyi beğenmemiş.")
    }
}
