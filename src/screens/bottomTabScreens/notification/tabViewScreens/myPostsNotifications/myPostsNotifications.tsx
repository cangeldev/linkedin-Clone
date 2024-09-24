import { View } from 'react-native'
import React from 'react'
import style from './style'
import { EmptyNotificationsCard } from 'components/cards'
import { useTranslation } from 'react-i18next'

export const MyPostsNotifications = () => {
    const { t } = useTranslation()
    return (
        <View style={style.container}>
            <EmptyNotificationsCard
                notification={t("noNewPostActivities")}
                notificationInfo={t("viewYourPreviousPostactivityOnYourProfile")}
                buttonTitle={t("viewPreviousActivity")}
            />
        </View>
    )
}