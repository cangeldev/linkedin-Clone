import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { camera } from 'assets'
import styles from './style'
import { CustomButton, SignInHeader } from 'components'
import { useNavigation } from '@react-navigation/native'

export const ProfilePictureSettingsScreen = () => {
    const navigation = useNavigation<any>()
    const handleButton = () => navigation.navigate("TabNavigation")

    return (
        <View style={styles.container}>
            <SignInHeader title='Fotoğraf eklemeniz tanınmanıza yardımcı olur' />
            <View style={styles.pictureContainer}>
                <TouchableOpacity onPress={() => console.log("Sonradan eklenecek")} style={styles.cameraButton}>
                    <Image source={camera} style={styles.cameraIcon} />
                </TouchableOpacity>
                <Text style={styles.userName}>Deneme DenemeHesap</Text>
                <Text style={styles.userTitle}>Yazılım Mühendisi - Fre</Text>
            </View>
            <View style={styles.footer}>
                <CustomButton title='Fotoğraf ekle' onPress={handleButton} />
                <Text onPress={handleButton} style={styles.skipText}>Şimdilik geç</Text>
            </View>
        </View>
    )
}
