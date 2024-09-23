import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { defaultProfileImage } from 'assets'
import { NotificationsButton, Icon } from 'components'
import styles from './style'
import { getCurrentUserUid, sendFriendRequest } from 'services/firebase/firebase'

interface IAddFriendCard {
    uid: string
    name: string
    surname: string
    profilePicture: string | { uri: string } | null
    title: string
    backgroundColor: string
}

export const AddFriendCard: FC<IAddFriendCard> = ({ name, surname, profilePicture, title, backgroundColor, uid }) => {
    // Determine the source of the profile picture
    let profileImageSource
    if (typeof profilePicture === 'string') {
        profileImageSource = { uri: profilePicture }
    } else if (profilePicture && profilePicture.uri) {
        profileImageSource = profilePicture
    } else {
        profileImageSource = defaultProfileImage
    }

    // Get the current user's UID
    const currentUserUid = getCurrentUserUid()

    // Handle friend request
    const handleSendFriendRequest = () => {
        if (currentUserUid) {
            sendFriendRequest(currentUserUid, uid)
        } else {
            console.error('User UID is not available')
        }
    }

    return (
        <View style={styles.card}>
            <View style={[styles.banner, { backgroundColor }]} />
            <Image style={styles.profileImage} source={profileImageSource} />
            <Text style={styles.name}>{name + " " + surname}</Text>
            <Text style={styles.description} numberOfLines={2}>
                {title}
            </Text>
            <Text style={styles.profileInfo}>Profiliniz esas alınmıştır</Text>
            <NotificationsButton onPress={handleSendFriendRequest} buttonTitle='Bağlantı kur' />
            <View style={styles.iconWrapper}>
                <Icon name='closecircle' type='AntDesign' style={styles.icon} />
            </View>
        </View>
    )
}  