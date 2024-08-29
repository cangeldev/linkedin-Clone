import { View, Text, Image } from 'react-native'
import React from 'react'
import { profileExample } from 'assets'
import { NotificationsButton } from 'components'
import { Icon } from 'components/icon/icon'
import styles from './style'

export const AddFriendCard = () => {
    return (
        <View style={styles.card}>
            <View style={styles.banner} />
            <Image style={styles.profileImage} source={profileExample} />
            <Text style={styles.name}>Fatma Sena Tan</Text>
            <Text style={styles.description} numberOfLines={2}>Social Media and Digital Marketing Specialist at...afdasadasd</Text>
            <Text style={styles.profileInfo}>
                Profiliniz esas alınmıştır
            </Text>
            <NotificationsButton buttonTitle='Bağlantı kur' />
            <View style={styles.iconWrapper}>
                <Icon name='closecircle' type='AntDesign' style={styles.icon} />
            </View>
        </View>
    )
}

