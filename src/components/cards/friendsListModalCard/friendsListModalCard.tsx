import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { resolveProfileImage } from 'utils/helper'
import { useNavigation } from '@react-navigation/native'

interface IFriendsListModalCard {
    receiverProfileImage: any
    receiverName: string
    receiverSurname: string
    receiverTitle: string
    receiverUid: string
}
export const FriendsListModalCard: FC<IFriendsListModalCard> = ({ receiverProfileImage, receiverName, receiverSurname, receiverTitle, receiverUid }) => {
    const navigation = useNavigation<any>()
    const profileImageSource = resolveProfileImage(receiverProfileImage)
    return (
        <TouchableOpacity onPress={() => navigation.navigate("ChatPage", { receiverProfileImage, receiverName, receiverSurname, receiverTitle, receiverUid })} style={style.container}>
            <Image source={profileImageSource} style={style.profileImage} />
            <View>
                <Text style={style.userName}>{`${receiverName} ${receiverSurname}`}</Text>
                <Text style={style.title}>
                    {receiverTitle}
                </Text>
            </View>
        </TouchableOpacity>
    )
}
