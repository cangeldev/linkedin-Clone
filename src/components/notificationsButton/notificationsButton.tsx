import { TouchableOpacity, Text } from 'react-native'
import React, { FC } from 'react'
import styles from './style'

interface INotificationsButton {
    buttonTitle: string,
    onPress?: () => void
}

export const NotificationsButton: FC<INotificationsButton> = ({ buttonTitle, onPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.buttonText}>{buttonTitle}</Text>
        </TouchableOpacity>
    )
}
