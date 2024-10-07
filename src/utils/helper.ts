import { clapping, heart, idea, laughing, like, support } from "assets"
import { setNonFriendsList } from "services/features/userSlice"
import { sendFriendRequest } from "services/firebase/firebase"
import Toast from 'react-native-toast-message'

export const showToast = (text1: string, text2: string, position: "top" | "bottom") => {
    Toast.show({
        text1: text1,
        text2: text2,
        position: position,
        visibilityTime: 4000,
        type: 'success', // 'success', 'error' veya 'info'
        text1Style: { fontSize: 20 }
    })
}

// Arkadaşlık isteği göndermek için kullanılan fonksiyon
export const handleSendFriendRequest = (currentUserUid: string | null, uid: string, dispatch: any, NonFriendsList: any[]) => {
    if (currentUserUid) {
        sendFriendRequest(currentUserUid, uid)
        dispatch(setNonFriendsList(NonFriendsList.filter(request => request.id !== uid)))
    } else {
        console.error('User UID is not available')
    }
}

export const myNetworkPageButtonList = [
    {
        id: 1,
        iconName: 'user-group',
        type: 'FontAwesome6',
        title: "Bağlantılar",
        navigatePage: "ConnectionsPage"
    },
    {
        id: 2,
        iconName: 'user-plus',
        type: 'FontAwesome6',
        title: "Takip ettiğim kişiler",
        count: "0",
        navigatePage: "null"
    },
    {
        id: 3,
        iconName: 'newspaper',
        type: 'FontAwesome5',
        title: "Sayfalar",
        count: "0",
        navigatePage: "null"
    }
]

// Beğenme çeşitlerini ve ikonlarını içeren liste
export const reactionList = [
    { image: like, name: "like" },
    { image: clapping, name: "clapping" },
    { image: support, name: "support" },
    { image: heart, name: "heart" },
    { image: idea, name: "idea" },
    { image: laughing, name: "laughing" }
] 