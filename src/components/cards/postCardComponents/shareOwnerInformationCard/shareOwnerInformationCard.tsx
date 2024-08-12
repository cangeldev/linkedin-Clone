import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import IconE from 'react-native-vector-icons/Entypo'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'
import colors from 'assets/colors/colors'
import styles from './style'

interface IShareOwnerInformationCard {
    sharingName: string
    sharingImage: any
}

const ShareOwnerInformationCard: FC<IShareOwnerInformationCard> = ({ sharingImage, sharingName }) => {
    return (
        <View style={styles.cardContainer}>
            <Image source={sharingImage} style={styles.profileImage} />
            <View style={styles.infoContainer}>
                <Text style={[styles.textDescription, styles.nameText]} numberOfLines={1}>
                    {sharingName}
                </Text>
                <Text style={styles.textDescription} numberOfLines={1}>
                    Recruiterləri profilinə ilk bu hissə cəlb edir | Remote iş tapmağı öyrədirəm
                </Text>
                <View style={styles.footerContainer}>
                    <Text style={styles.textDescription}>20 saat</Text>
                    <IconE name="dot-single" color={colors.darkGrey} size={22} />
                    <IconM name="earth" color={colors.darkGrey} size={18} />
                </View>
            </View>
            <TouchableOpacity style={styles.followButton}>
                <Text style={styles.plusIcon}>+ </Text>
                <Text style={styles.followButtonText}>Takip Et</Text>
            </TouchableOpacity>
        </View>
    )
}

export default React.memo(ShareOwnerInformationCard)
