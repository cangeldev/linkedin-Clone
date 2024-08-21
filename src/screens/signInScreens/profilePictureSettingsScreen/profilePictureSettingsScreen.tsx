import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { camera, linkedinLogo } from 'assets'
import styles from './style'
import { CustomButton } from 'components'

const ProfilePictureSettingsScreen = () => {
    return (
        <View style={styles.container}>
            <Image source={linkedinLogo} style={styles.logo} />
            <Text style={styles.infoText}>Fotoğraf eklemeniz tanınmanıza yardımcı olur</Text>
            <View style={styles.pictureContainer}>
                <TouchableOpacity onPress={() => console.log("Sonradan eklenecek")} style={styles.cameraButton}>
                    <Image source={camera} style={styles.cameraIcon} />
                </TouchableOpacity>
                <Text style={styles.userName}>
                    Deneme DenemeHesap
                </Text>
                <Text style={styles.userTitle}>
                    Yazılım Mühendisi - Fre
                </Text>
            </View>
            <View style={styles.footer}>
                <CustomButton title='Fotoğraf ekle' />
                <Text onPress={() => console.log("Sonradan eklenecek")} style={styles.skipText}>Şimdilik geç</Text>
            </View>
        </View>
    )
}

export default React.memo(ProfilePictureSettingsScreen)
