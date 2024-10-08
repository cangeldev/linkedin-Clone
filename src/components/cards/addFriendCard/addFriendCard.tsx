import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { NotificationsButton, Icon } from 'components'
import styles from './style'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { getCurrentUserUid } from 'services/firebase/firebaseAuth'
import { handleSendFriendRequest, resolveProfileImage, showToast } from 'utils/helper'

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
    const profileImageSource = resolveProfileImage(profilePicture)

    // Get the current user's UID
    const currentUserUid = getCurrentUserUid() || null

    const handleButton = () => {
        handleSendFriendRequest(currentUserUid, uid, dispatch, NonFriendsList)
        showToast(t('friendsRequest'), name + surname + t('toastMessage1'), "bottom")
    }

    return (
        <View style={styles.card}>
            <View style={[styles.banner, { backgroundColor }]} />
            <Image style={styles.profileImage} source={profileImageSource} />
            <Text style={styles.name}>{name + " " + surname}</Text>
            <Text style={styles.description} numberOfLines={2}>
                {title}
            </Text>
            <Text style={styles.profileInfo}>{t('basedOnYourProfile')}</Text>
            <NotificationsButton onPress={handleButton} buttonTitle={t('connect')} />
            <View style={styles.iconWrapper}>
                <Icon name='closecircle' type='AntDesign' style={styles.icon} />
            </View>
        </View>
    )
}  