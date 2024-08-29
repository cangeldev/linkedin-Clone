import { View, Text } from 'react-native'
import React from 'react'
import { EmptyNotificationsCard } from 'components/cards'
import style from './style'

export const MentionsNotifications = () => {
    return (
        <View style={style.container}>
            <EmptyNotificationsCard
                notification='Yeni bahsetme yok'
                notificationInfo='Biri, bir gönderi veya bir yorumda sizi etiketlediğinde, burada bildirim gösterilir. '
            />
        </View>
    )
}