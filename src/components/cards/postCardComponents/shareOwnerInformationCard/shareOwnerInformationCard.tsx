import React, { FC } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import styles from './style'
import { Icon } from 'components'
import { useTranslation } from 'react-i18next'

interface IShareOwnerInformationCard {
    sharingName: string
    sharingImage: any
}

/**
 * `ShareOwnerInformationCard` bileşeni, paylaşımı yapan kişinin bilgilerini gösterir.
 * Bu kart, kişinin profil resmini, adını, kısa açıklamasını, paylaşım zamanını ve bir takip butonunu içerir.
 */
export const ShareOwnerInformationCard: FC<IShareOwnerInformationCard> = React.memo(({ sharingImage, sharingName }) => {
    const { t } = useTranslation()
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
                    <Icon type="Entypo" name="dot-single" style={styles.dotIcon} />
                    <Icon type="MaterialCommunityIcons" name="earth" style={styles.earthIcon} />
                </View>
            </View>
            <TouchableOpacity style={styles.followButton}>
                <Text style={styles.plusIcon}>+ </Text>
                <Text style={styles.followButtonText}>{t("follow")}</Text>
            </TouchableOpacity>
        </View>
    )
})
