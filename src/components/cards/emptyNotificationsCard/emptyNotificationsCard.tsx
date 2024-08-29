import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { notificationEmpty } from 'assets'
import styles from './style'

interface IEmptyNotificationsCard {
    notification: string
    notificationInfo: string
    buttonTitle?: string
}

export const EmptyNotificationsCard: FC<IEmptyNotificationsCard> = React.memo(({ notification, notificationInfo, buttonTitle }) => {
    return (
        <View style={styles.container}>
            <Image source={notificationEmpty} style={styles.image} />
            <Text style={styles.notification}>{notification}</Text>
            <Text style={styles.notificationInfo}>{notificationInfo}</Text>

            {
                buttonTitle == "" ? <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>{buttonTitle}</Text>
                </TouchableOpacity> : null
            }

        </View >
    )
})
