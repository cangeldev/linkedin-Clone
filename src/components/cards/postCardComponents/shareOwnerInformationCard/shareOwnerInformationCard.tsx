import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import { Icon } from 'components'
import { useTranslation } from 'react-i18next'
import { defaultProfileImage } from 'assets'
import { handleSendFriendRequest } from 'utils/helper'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { getCurrentUserUid } from 'services/firebase/firebaseAuth'

interface IShareOwnerInformationCard {
    sharingName: string
    sharingImage: any
    sharingTitle: string
    sharingTime: any
    sharingUid: string
}

export const ShareOwnerInformationCard: FC<IShareOwnerInformationCard> = React.memo(({ sharingImage, sharingName, sharingTitle, sharingTime, sharingUid }) => {

    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { NonFriendsList, friendsList } = useSelector((state: RootState) => state.userSlice.info)
    const isFriend = friendsList.some(friend => friend.uid !== sharingUid)
    let profileImageSource

    if (typeof sharingImage === 'string') {
        profileImageSource = { uri: sharingImage }
    } else if (sharingImage && sharingImage.uri) {
        profileImageSource = sharingImage
    } else {
        profileImageSource = defaultProfileImage
    }

    const savedTime = new Date(sharingTime)
    const currentTime = new Date()

    // Zaman farkını hesaplamak için
    const timeDifference = currentTime.getTime() - savedTime.getTime()
    const secondsDifference = Math.floor(timeDifference / 1000)
    const minutesDifference = Math.floor(secondsDifference / 60)
    const hoursDifference = Math.floor(minutesDifference / 60)
    const daysDifference = Math.floor(hoursDifference / 24)

    const formatTimeDifference = () => {
        if (daysDifference > 0) {
            return `${daysDifference} gün önce`
        } else if (hoursDifference > 0) {
            return `${hoursDifference} saat önce`
        } else if (minutesDifference > 0) {
            return `${minutesDifference} dakika önce`
        } else {
            return `${secondsDifference} saniye önce`
        }
    }
    const currentUserUid = getCurrentUserUid() || null
    return (
        <View style={styles.cardContainer}>
            <Image source={profileImageSource} style={styles.profileImage} />
            <View style={styles.infoContainer}>
                <Text style={[styles.textDescription, styles.nameText]} numberOfLines={1}>
                    {sharingName}
                </Text>
                <Text style={styles.textDescription} numberOfLines={1}>
                    {sharingTitle}
                </Text>
                <View style={styles.footerContainer}>
                    <Text style={styles.textDescription}>{formatTimeDifference()}</Text>
                    <Icon type="Entypo" name="dot-single" style={styles.dotIcon} />
                    <Icon type="MaterialCommunityIcons" name="earth" style={styles.earthIcon} />
                </View>
            </View>
            {
                isFriend == false ? null : <TouchableOpacity onPress={() => handleSendFriendRequest(currentUserUid, sharingUid, dispatch, NonFriendsList)} style={styles.followButton}>
                    <Icon type="FontAwesome5" name="user-plus" style={styles.plusIcon} />
                    <Text style={styles.followButtonText}>{t("connect")}</Text>
                </TouchableOpacity>
            }
        </View>
    )
})
