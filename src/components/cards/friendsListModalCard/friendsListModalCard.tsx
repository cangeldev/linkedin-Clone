import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { resolveProfileImage } from 'utils/helper'

interface IFriendsListModalCard {
    profileImage: any
    name: string
    surname: string
}
export const FriendsListModalCard: FC<IFriendsListModalCard> = ({ profileImage, name, surname }) => {

    const profileImageSource = resolveProfileImage(profileImage)
    return (
        <View style={style.container}>
            <Image source={profileImageSource} style={style.profileImage} />
            <View>
                <Text style={style.userName}>{`${name} ${surname}`}</Text>
                <Text style={style.title}>
                    Deneme Şirketinde Stajyer
                </Text>
            </View>
        </View>
    )
}
