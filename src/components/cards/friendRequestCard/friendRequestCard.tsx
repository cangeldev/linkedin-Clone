import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import { defaultProfileImage } from 'assets'
import style from './style'
import { Icon } from 'components/icon/icon'

interface IFriendRequestCard {
    name: string
    job: string
    title: string
    profileImage: any
    declineRequests: () => void
    acceptRequests: () => void
}
export const FriendRequestCard: FC<IFriendRequestCard> = ({ job, name, profileImage, title, declineRequests, acceptRequests }) => {

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
                <Icon onPress={declineRequests} name='closecircleo' type='AntDesign' style={style.icon} />
                <Icon onPress={acceptRequests} name='checkcircleo' type='AntDesign' style={style.icon} />
            </View>
        </View>
    )
}