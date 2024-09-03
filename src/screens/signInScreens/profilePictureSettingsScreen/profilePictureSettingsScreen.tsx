import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { camera } from 'assets'
import styles from './style'
import { CustomButton, SignInHeader } from 'components'
import { ImagePickerModal } from 'components/modals'

export const ProfilePictureSettingsScreen = () => {
    const [imagePickerModal, setImagePickerModal] = useState(false)
    const handleButton = () => console.log("first")
    const toggleImagePickerModal = () => {
        setImagePickerModal(!imagePickerModal)
    }
    return (
        <View style={styles.container}>
            <ImagePickerModal
                closeModal={toggleImagePickerModal}
                visibleModal={imagePickerModal}
            />
            <SignInHeader title='Fotoğraf eklemeniz tanınmanıza yardımcı olur' />
            <View style={styles.pictureContainer}>
                <TouchableOpacity onPress={() => console.log("Sonradan eklenecek")} style={styles.cameraButton}>
                    <Image source={camera} style={styles.cameraIcon} />
                </TouchableOpacity>
                <Text style={styles.userName}>Deneme DenemeHesap</Text>
                <Text style={styles.userTitle}>Yazılım Mühendisi - Fre</Text>
            </View>
            <View style={styles.footer}>
                <CustomButton title='Fotoğraf ekle' onPress={toggleImagePickerModal} />
                <Text onPress={handleButton} style={styles.skipText}>Şimdilik geç</Text>
            </View>
        </View>
    )
}
