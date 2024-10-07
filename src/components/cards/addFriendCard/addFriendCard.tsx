import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { defaultProfileImage } from 'assets'
import { NotificationsButton, Icon } from 'components'
import styles from './style'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { getCurrentUserUid } from 'services/firebase/firebaseAuth'
import { handleSendFriendRequest } from 'utils/helper'

interface IAddFriendCard {
    uid: string
    name: string
    surname: string
    profilePicture: string | { uri: string } | null
    title: string
    backgroundColor: string
}

export const AddFriendCard: FC<IAddFriendCard> = ({ name, surname, profilePicture, title, backgroundColor, uid }) => {
    const dispatch = useDispatch()
    const { t } = useTranslation()
    const NonFriendsList = useSelector((state: RootState) => state.userSlice.info.NonFriendsList)
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
    const currentUserUid = getCurrentUserUid() || null

    return (
        <View style={styles.card}>
            <View style={[styles.banner, { backgroundColor }]} />
            <Image style={styles.profileImage} source={profileImageSource} />
            <Text style={styles.name}>{name + " " + surname}</Text>
            <Text style={styles.description} numberOfLines={2}>
                {title}
            </Text>
            <Text style={styles.profileInfo}>{t('basedOnYourProfile')}</Text>
            <NotificationsButton onPress={() => handleSendFriendRequest(currentUserUid, uid, dispatch, NonFriendsList)} buttonTitle={t('connect')} />
            <View style={styles.iconWrapper}>
                <Icon name='closecircle' type='AntDesign' style={styles.icon} />
            </View>
        </View>
    )
}  