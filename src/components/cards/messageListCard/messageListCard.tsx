
import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { formatTimeDifference, resolveProfileImage } from 'utils/helper'

interface IMessageListCard {
    profileImage: any
    name: string
    surname: string
    time: any
    message: string
}

/**
 * `MessageListCard` kullancıları gönderdiği mesajları listelerken göstermek için kullanılan bir karttır.
 * Bu kart, mesaj gönderen kişinin profil bilgilerini mesaj içeriğini ve göderilme zamanını içerir.
 */
export const MessageListCard: FC<IMessageListCard> = ({ profileImage, name, surname, time, message }) => {

    const profileImageSource = resolveProfileImage(profileImage)

    return (
        <View style={style.container}>
            <Image source={profileImageSource} style={style.profileImage} />
            <View style={style.textContainer}>
                <Text style={style.userName}>{`${name} ${surname}`}</Text>
                <Text style={style.message} numberOfLines={1}>
                    {message}
                </Text>

            </View>
            <Text style={style.time}>
                {formatTimeDifference(time)}
            </Text>
        </View>
    )
}
