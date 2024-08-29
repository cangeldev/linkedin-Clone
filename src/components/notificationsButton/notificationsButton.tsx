import { TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './style'

interface INotificationsButton {
    buttonTitle: string
}

export const NotificationsButton: FC<INotificationsButton> = ({ buttonTitle }) => {
    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
