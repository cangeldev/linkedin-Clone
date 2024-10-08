import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import { Icon } from 'components'
import { useTranslation } from 'react-i18next'
import { formatTimeDifference, handleSendFriendRequest, resolveProfileImage, showToast } from 'utils/helper'
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

    const handleButton = () => {
        handleSendFriendRequest(currentUserUid, sharingUid, dispatch, NonFriendsList)
        showToast(t('friendsRequest'), sharingName + t('toastMessage1'), "bottom")
    }

    const dispatch = useDispatch()
    const { t } = useTranslation()
    const { NonFriendsList, friendsList } = useSelector((state: RootState) => state.userSlice.info)
    const isFriend = friendsList.some(friend => friend.uid === sharingUid)  // Arkadaş mı değil mi kontrolü için
    const profileImageSource = resolveProfileImage(sharingImage)
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
                    <Text style={styles.textDescription}>{formatTimeDifference(sharingTime)}</Text>
                    <Icon type="Entypo" name="dot-single" style={styles.dotIcon} />
                    <Icon type="MaterialCommunityIcons" name="earth" style={styles.earthIcon} />
                </View>
            </View>
            {
                !isFriend ? (
                    <TouchableOpacity onPress={handleButton} style={styles.followButton}>
                        <Icon type="FontAwesome5" name="user-plus" style={styles.plusIcon} />
                        <Text style={styles.followButtonText}>{t("connect")}</Text>
                    </TouchableOpacity>
                ) : null
            }
        </View>
    )
})
