import { FlatList, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { EmptyNotificationsCard, FriendRequestCard } from 'components/cards'
import style from './style'
import { acceptFriendRequest, declineFriendRequest, fetchUsersWithSenderInfo } from 'services/firebase/firebase'
import { Divider } from 'components'
import { useTranslation } from 'react-i18next'

export const AllNotifications = () => {
    const [requests, setRequests] = useState<any[]>([])
    const { t } = useTranslation()

    useEffect(() => {
        const getRequests = async () => {
            const fetchedUsersInfo = await fetchUsersWithSenderInfo()
            setRequests(fetchedUsersInfo)
        }
        getRequests()
    }, [])

    const handleAcceptRequest = async (id: string) => {
        await acceptFriendRequest(id)
        console.log("okey")
        // İsteği kabul ettikten sonra, requests listesinden sil
        setRequests(prevRequests => prevRequests.filter(request => request.id !== id))
    };

    const handleDeclineRequest = async (id: string) => {
        console.log("okey silindi")
        await declineFriendRequest(id)
        // İsteği requests listesinden sil
        setRequests(prevRequests => prevRequests.filter(request => request.id !== id))
    };

    const renderItem = useCallback(({ item }: any) => (<FriendRequestCard
        name={item.senderInfo?.name}
        job={item.senderInfo?.job}
        profileImage={{ uri: item.senderInfo?.profileImageUrl }}
        title={item.senderInfo?.title}
        acceptRequests={() => handleAcceptRequest(item.id)}
        declineRequests={() => handleDeclineRequest(item.id)}
    />
    ), [])
    return (
        <View style={style.container}>
            {requests.length === 0 ? (
                <EmptyNotificationsCard
                    notification={t("NoNewNotifications")}
                    notificationInfo={t("updatesYourHomePAge")}
                    buttonTitle={t("goToHomePage")}
                />
            ) : (
                <FlatList data={requests} renderItem={renderItem} keyExtractor={(item) => item.id} ItemSeparatorComponent={() => <Divider />} />
            )}
        </View>
    )
}
