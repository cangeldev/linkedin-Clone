import { Button, FlatList, Image, Text, View } from 'react-native'
import React, { useCallback, useEffect, useState } from 'react'
import { EmptyNotificationsCard } from 'components/cards'
import style from './style'
import { acceptFriendRequest, fetchUsersWithSenderInfo } from 'services/firebase/firebase'

export const AllNotifications = () => {
    const [requests, setRequests] = useState<any[]>([])

    useEffect(() => {
        const getRequests = async () => {
            const fetchedUsersInfo = await fetchUsersWithSenderInfo()
            setRequests(fetchedUsersInfo)
        }
        getRequests()
    }, [])

    const renderItem = useCallback(({ item }: any) => (
        <View>
            <Image source={{ uri: item.senderInfo?.profileImageUrl }} style={{ width: 50, height: 50 }} />
            <Text>{item.senderInfo?.name}</Text>
            <Text>{item.id}</Text>
            <Button title='Kabul Et' onPress={() => acceptFriendRequest(item.id)} />
        </View>
    ), [])

    return (
        <View style={style.container}>
            {requests.length === 0 ? (
                <EmptyNotificationsCard
                    notification='Yeni bildirim yok'
                    notificationInfo='Ana sayfanızdaki diğer güncellemeleri görüntüleyin'
                    buttonTitle='Ana Sayfaya Git'
                />
            ) : (
                <FlatList data={requests} renderItem={renderItem} keyExtractor={(item) => item.id} />
            )}
        </View>
    )
}
