import { clapping, heart, idea, laughing, like, support } from "assets"
import { setNonFriendsList } from "services/features/userSlice"
import { sendFriendRequest } from "services/firebase/firebase"

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