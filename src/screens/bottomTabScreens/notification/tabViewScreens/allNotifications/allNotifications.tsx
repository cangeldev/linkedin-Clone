import { View } from 'react-native'
import React from 'react'
import { EmptyNotificationsCard } from 'components/cards'
import style from './style'

export const AllNotifications = () => {
    return (
        <View style={style.container}>
            <EmptyNotificationsCard
                notification='Yeni bildirim yok'
                notificationInfo='Ana sayfanızdaki diğer güncellemeleri görüntüleyin'
                buttonTitle='Ana Sayfaya Git'
            />
        </View>
    )
}
