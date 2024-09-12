import { View, Text, Image } from 'react-native'
import React from 'react'
import { defaultProfileImage } from 'assets'
import { NotificationsButton, Icon } from 'components'
import styles from './style'

/**
 * `AddFriendCard` bileşeni, uygulamaya yeni eklenmiş kişileri göstermek için kullanılan bir karttır.
 * Bu kart, kişinin profil bilgilerini ve istersek onunla bağlantı kurmak için bir buton içerir.
 */
export const AddFriendCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.banner} />
            <Image style={styles.profileImage} source={defaultProfileImage} />
            <Text style={styles.name}>Fatma Sena Tan</Text>
            <Text style={styles.description} numberOfLines={2}>
                Social Media and Digital Marketing Specialist at...afdasadasd
            </Text>
            <Text style={styles.profileInfo}>Profiliniz esas alınmıştır</Text>
            <NotificationsButton buttonTitle='Bağlantı kur' />
            <View style={styles.iconWrapper}>
                <Icon name='closecircle' type='AntDesign' style={styles.icon} />
            </View>
        </View>
    )
}
