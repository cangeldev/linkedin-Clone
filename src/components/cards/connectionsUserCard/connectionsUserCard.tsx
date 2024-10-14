import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { Icon } from 'components/icon/icon'
import { formatTimeDifference, resolveProfileImage } from 'utils/helper'

interface IConnectionsUserCard {
    profileImage: any
    name: string
    surname: string
    title: string
    job: string,
    time: any
}

/**
 * `ConnectionsUserCard` bileşeni, arkadaş olarak eklediğim kişileri göstermek için kullanılan bir karttır.
 * Bu kart, kişinin profil bilgilerini ve ne zaman arkadaş oluğumuz bilgisini verir istersek  arkadaşlıktan çıkarmak için bir buton içerir.
 */
export const ConnectionsUserCard: FC<IConnectionsUserCard> = ({ profileImage, name, title, job, surname, time }) => {

    const profileImageSource = resolveProfileImage(profileImage)
     
    return (
        <View style={style.container}>
            <Image source={profileImageSource} style={style.profileImage} />
            <View style={style.textContainer}>
                <Text style={style.userName}>{`${name} ${surname}`}</Text>
                <Text numberOfLines={1} style={style.userDetails}>{title}</Text>
                <Text style={style.userDetails}>{job}</Text>
                <Text>{formatTimeDifference(time)}</Text>
            </View>
            <View style={style.iconContainer}>
                <Icon name='dots-three-vertical' type='Entypo' style={style.optionsIcon} />
                <Icon name='paper-plane-sharp' type='Ionicons' style={style.sendIcon} />
            </View>
        </View>
    )
}
