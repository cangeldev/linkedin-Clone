import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { resolveProfileImage } from 'utils/helper'

interface IMessageCard {
    name: string
    surname: string
    profileImage: any
}

/**
 * `MessageCard` mesajlarımızın içeriğinin göründüğü kart yapısıdır.
 * Bu kart, mesaj gönderen kişinin profil bilgilerini mesaj içeriğini ve göderilme zamanını içerir.
 */
export const MessageCard: FC<IMessageCard> = ({ name, surname, profileImage }) => {

    const profileImageSource = resolveProfileImage(profileImage)

    return (
        <View style={style.container}>
            <View style={style.row}>
                <Image source={profileImageSource} style={style.profileImage} />
                <View style={style.textContainer}>
                    <View style={style.userNameContainer}>
                        <Text style={style.userName}>
                            {`${name} ${surname} `}
                        </Text>
                        <Text style={style.timestamp}>
                            ·  10:45
                        </Text>
                    </View>
                    <Text style={style.messageText}>
                        Deneme metni bu sayfa aşağıya doğru uzayacak. Burada daha fazla metin yazabilirsiniz ve metin aşağıya doğru uzayacaktır.
                    </Text>
                </View>
            </View>
        </View>
    )
}
