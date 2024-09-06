import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import { CustomButton, ProfileImage, SignInHeader } from 'components'
import { ImagePickerModal } from 'components/modals'
import { camera } from 'assets'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { useNavigation } from '@react-navigation/native'

export const ProfilePictureSettingsScreen = () => {
    const navigation = useNavigation<any>()
    const { job, name, title, profileImage } = useSelector((state: RootState) => state.userSlice)
    const [imagePickerModal, setImagePickerModal] = useState(false)
    const handleButton = () => navigation.navigate("TabNavigation")
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
                <View style={styles.cameraButton}>
                    <ProfileImage defaultImage={camera} />
                </View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userTitle}>{job}-{title}</Text>

            </View>
            <View style={styles.footer}>
                <CustomButton title={profileImage == null ? 'Fotoğraf ekle' : "İleri"} onPress={profileImage == null ? toggleImagePickerModal : handleButton} />
                {
                    profileImage == null ? <Text onPress={handleButton} style={styles.skipText}>Şimdilik geç</Text> : null
                }
            </View>
        </View>
    )
}
