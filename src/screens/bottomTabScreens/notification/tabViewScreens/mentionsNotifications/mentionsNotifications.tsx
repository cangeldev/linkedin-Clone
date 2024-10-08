import { View } from 'react-native'
import React from 'react'
import { EmptyNotificationsCard } from 'components/cards'
import style from './style'
import { useTranslation } from 'react-i18next'

export const MentionsNotifications = () => {

    const { t } = useTranslation()

    return (
        <View style={style.container}>
            <EmptyNotificationsCard
                notification={t("noNewMentions")}
                notificationInfo={t("whenSomeoneTagsYouInPostOrCommentNotificationAppearsHere.")}
            />
        </View>
    )
}