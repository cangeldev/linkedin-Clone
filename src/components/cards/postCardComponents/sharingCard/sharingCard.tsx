import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import IconE from 'react-native-vector-icons/Entypo'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from 'assets/colors/colors'
import style from './style'

interface ISharingCard {
    sharingName: string
    sharingImage: any
}

const SharingCard: FC<ISharingCard> = ({ sharingImage, sharingName }) => {
    return (
        <View style={style.container}>
            <Image source={sharingImage} style={style.profileImage} />
            <View style={style.contentView}>
                <Text style={[style.description, style.nameText]} numberOfLines={1}>{sharingName}</Text>
                <Text style={style.description} numberOfLines={1}>
                    Recruiterləri profilinə ilk bu hissə cəlb edir | Remote iş tapmağı öyrədirəm
                </Text>
                <View style={style.footerView}>
                    <Text style={style.description}>20 saat</Text>
                    <IconE name="dot-single" color={colors.darkGrey} size={22} />
                    <IconM name="earth" color={colors.darkGrey} size={18} />
                </View>
            </View>
            <TouchableOpacity style={style.followButton}>
                <Text style={style.buttonPlus}>+ </Text>
                <Text style={style.buttonText}>Takip Et</Text>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(SharingCard)
