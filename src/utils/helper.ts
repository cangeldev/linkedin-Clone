import { clapping, heart, idea, laughing, like, support } from "assets"

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