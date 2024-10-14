import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { Icon } from 'components/icon/icon'
import { formatTimeDifference, resolveProfileImage, showToast } from 'utils/helper'
import { useTranslation } from 'react-i18next'

interface IFriendRequestCard {
    name: string
    job: string
    title: string
    profileImage: any
    declineRequests: () => void
    acceptRequests: () => void
    time: any
}

/**
 * `FriendRequestCard` bileşeni, arkadaşlık isteklerinin görüntülenmesini sağlayan bir karttır.
 * Bu kart, arkadaşlık isteği gönderen kişinin profil bilgilerini ve ne zaman arkadaşlık isteği gönderdiği bilgisini verir istersek arkadaş eklemek, istemezsek reddetmek  için butonlar içerir.
 */
export const FriendRequestCard: FC<IFriendRequestCard> = ({ job, name, profileImage, title, declineRequests, acceptRequests, time }) => {

    const { t } = useTranslation()
    const profileImageSource = resolveProfileImage(profileImage)

    const handleDeclineRequest = () => {
        declineRequests()
        showToast(t('incomingFriendRequest'), name + t('toastMessage3'), "bottom")
    }
    const handleAcceptRequest = () => {
        acceptRequests()
        showToast(t('incomingFriendRequest'), name + t('toastMessage4'), "bottom")
    }

    return (
        <View style={style.container}>
            <Image source={profileImageSource} style={style.profileImage} />
            <View style={style.textContainer}>
                <Text style={style.userName} >{name}</Text>
                <Text style={style.userDetails}>{job} - {title}</Text>
                <Text style={style.date}>{formatTimeDifference(time)}</Text>
            </View>
            <View style={style.iconView}>
                <Icon onPress={handleDeclineRequest} name='closecircleo' type='AntDesign' style={style.icon} />
                <Icon onPress={handleAcceptRequest} name='checkcircleo' type='AntDesign' style={style.icon} />
            </View>
        </View>
    )
}