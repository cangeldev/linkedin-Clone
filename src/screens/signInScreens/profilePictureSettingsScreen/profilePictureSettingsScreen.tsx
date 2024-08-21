import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { camera } from 'assets'
import styles from './style'
import { CustomButton } from 'components'
import SignInHeader from 'components/signInHeader/signInHeader'

const ProfilePictureSettingsScreen = () => {
    return (
        <View style={styles.container}>
            <SignInHeader title='Fotoğraf eklemeniz tanınmanıza yardımcı olur'/>
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
