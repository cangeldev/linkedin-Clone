import { View, Text } from 'react-native'
import React from 'react'
import style from './style'
import { EmptyNotificationsCard } from 'components/cards'

export const MyPostsNotifications = () => {
    return (
        <View style={style.container}>
            <EmptyNotificationsCard
                 notification='Yeni bir gönderi faaliyeti yok'
                 notificationInfo='Profilinizdeki önceki gönderi faaliyetlerini görüntüleyin'
                 buttonTitle='Önceki faaliyetleri görüntüle'
            />
        </View>
    )
}