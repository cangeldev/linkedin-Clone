import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { Icon } from 'components/icon/icon'
import { resolveProfileImage } from 'utils/helper'

interface IConnectionsUserCard {
    profileImage: any
    name: string,
    surname: string,
    title: string,
    job: string
}
export const ConnectionsUserCard: FC<IConnectionsUserCard> = ({ profileImage, name, title, job, surname }) => {

    const profileImageSource = resolveProfileImage(profileImage)

    return (
        <View style={style.container}>
            <Image source={profileImageSource} style={style.profileImage} />
            <View style={style.textContainer}>
                <Text style={style.userName} >{name}{" "}{surname}</Text>
                <Text numberOfLines={1} style={style.userDetails}>{title}</Text>
                <Text style={style.userDetails}>{job}</Text>
                <Text>1 ay önce bağlantı kuruldu</Text>
            </View>
            <View style={style.iconContainer}>
                <Icon name='dots-three-vertical' type='Entypo' style={style.optionsIcon} />
                <Icon name='paper-plane-sharp' type='Ionicons' style={style.sendIcon} />
            </View>
        </View>
    )
}
