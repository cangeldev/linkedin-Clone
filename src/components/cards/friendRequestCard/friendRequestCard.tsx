import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { defaultProfileImage } from 'assets'
import style from './style'
import { Icon } from 'components/icon/icon'
import Toast from 'react-native-toast-message'

interface IFriendRequestCard {
    name: string
    job: string
    title: string
    profileImage: any
    declineRequests: () => void
    acceptRequests: () => void
}
export const FriendRequestCard: FC<IFriendRequestCard> = ({ job, name, profileImage, title, declineRequests, acceptRequests }) => {

    const handleDeclineRequest = () => {
        declineRequests()
        Toast.show({
            text1: 'Gelen arkadaşlık isteği:',
            text2: name + " adlı kullanıcıdan gelen arkadaşlık isteğini red ettiniz.",
            position: 'bottom',
            visibilityTime: 3000,
            autoHide: true,
            type: 'success', //'error' veya 'info' alabilir.
            text1Style: { fontSize: 20 }
        })
    }
    const handleAcceptRequest = () => {
        acceptRequests()
        Toast.show({
            text1: 'Gelen arkadaşlık isteği:',
            text2: name + " adlı kullanıcıdan gelen arkadaşlık isteğini kabul ettiniz.",
            position: 'bottom',
            visibilityTime: 3000,
            autoHide: true,
            type: 'success', //'error' veya 'info' alabilir.
            text1Style: { fontSize: 20 }
        })
    }
    let profileImageSource
    if (typeof profileImage === 'string') {
        profileImageSource = { uri: profileImage }
    } else if (profileImage && profileImage.uri) {
        profileImageSource = profileImage
    } else {
        profileImageSource = defaultProfileImage
    }
    return (
        <View style={style.container}>
            <Image source={profileImageSource} style={style.profileImage} />
            <View style={style.textContainer}>
                <Text style={style.userName} >{name}</Text>
                <Text style={style.userDetails}>{job} - {title}</Text>
                <Text style={style.date}>Bugün</Text>
            </View>
            <View style={style.iconView}>
                <Icon onPress={handleDeclineRequest} name='closecircleo' type='AntDesign' style={style.icon} />
                <Icon onPress={handleAcceptRequest} name='checkcircleo' type='AntDesign' style={style.icon} />
            </View>
        </View>
    )
}