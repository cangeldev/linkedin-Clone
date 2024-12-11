import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { resolveProfileImage } from 'utils/helper'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

interface IMessageCard {
    receiverName: string
    receiverSurname: string
    receiverProfileImage: any
    message: string
    createdAt: any
    info: string
}

/**
 * `MessageCard` mesajlarımızın içeriğinin göründüğü kart yapısıdır.
 * Bu kart, mesaj gönderen kişinin profil bilgilerini mesaj içeriğini ve göderilme zamanını içerir.
 */
export const MessageCard: FC<IMessageCard> = ({ receiverName, receiverSurname, receiverProfileImage, message, createdAt, info }) => {
   
    const { name, surname, profileImage } = useSelector((state: RootState) => state.userSlice.loggedUserInfo)
    const profileImageSource = resolveProfileImage(info === "from" ? profileImage : receiverProfileImage)

    return (
        <View style={style.container}>
            <View style={style.row}>
                <Image source={profileImageSource} style={style.profileImage} />
                <View style={style.textContainer}>
                    <View style={style.userNameContainer}>
                        <Text style={style.userName}>
                            {`${info === "from" ? name : receiverName} ${info === "from" ? surname : receiverSurname} `}
                        </Text>
                        <Text style={style.timestamp}>
                            · {createdAt}
                        </Text>
                    </View>
                    <Text style={style.messageText}>
                        {message}
                    </Text>
                </View>
            </View>
        </View>
    )
}
