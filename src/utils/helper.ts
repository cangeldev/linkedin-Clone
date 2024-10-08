import { clapping, defaultProfileImage, heart, idea, laughing, like, support } from "assets"
import { setInfo } from "services/features/userSlice"
import { sendFriendRequest } from "services/firebase/firebase"
import Toast from 'react-native-toast-message'
import { useTranslation } from "react-i18next"


export const resolveProfileImage = (image: any) => {
    if (typeof image === 'string') {
        return { uri: image }
    } else if (image && image.uri) {
        return image;
    } else {
        return defaultProfileImage
    }
}

export const formatTimeDifference = (sharingTime: string) => {

    const savedTime = new Date(sharingTime)
    const currentTime = new Date()
    const { t } = useTranslation()

    const timeDifference = currentTime.getTime() - savedTime.getTime()
    const secondsDifference = Math.floor(timeDifference / 1000)
    const minutesDifference = Math.floor(secondsDifference / 60)
    const hoursDifference = Math.floor(minutesDifference / 60)
    const daysDifference = Math.floor(hoursDifference / 24)
    
    if (daysDifference > 0) {
        return `${daysDifference} ` + " " + t("dayAgo")
    } else if (hoursDifference > 0) {
        return `${hoursDifference}` + " " + t("hoursAgo")
    } else if (minutesDifference > 0) {
        return `${minutesDifference}` + " " + t("minuteAgo")
    } else {
        return `${secondsDifference}` + " " + t("secondAgo")
    }
}

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
        dispatch(setInfo({
            NonFriendsList: NonFriendsList.filter(request => request.id !== uid)
        }));
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