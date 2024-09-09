import React, { useState } from 'react'
import { View, Text } from 'react-native'
import styles from './style'
import { CustomButton, ProfileImage, SignInHeader } from 'components'
import { ImagePickerModal } from 'components/modals'
import { camera } from 'assets'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { useNavigation } from '@react-navigation/native'
import { getCurrentUser, saveUserProfile } from 'services/firebase/firebase'

export const ProfilePictureSettingsScreen = () => {
    const navigation = useNavigation<any>()
    const { job, name, surname, title, location, profileImage, email, uId } = useSelector((state: RootState) => state.userSlice)
    const [imagePickerModal, setImagePickerModal] = useState(false)

    const toggleImagePickerModal = () => {
        setImagePickerModal(!imagePickerModal)
    }


    const saveUserProfileToFirebase = async () => {
        try {
            const user = getCurrentUser()
            if (user) {
   
                const userProfile = {
                    uid: uId,
                    name: name,
                    surname: surname,
                    email: email,
                    location: location,
                    job: job,
                    title: title,
                }
                await saveUserProfile(userProfile) 
                navigation.navigate("TabNavigation") 
            }
        } catch (error) {
            console.error('Error saving user profile:', error)
        }
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
                <Text style={styles.userTitle}>{job} - {title}</Text>
            </View>
            <View style={styles.footer}>
                <CustomButton
                    title={profileImage == null ? 'Fotoğraf ekle' : 'İleri'}
                    onPress={profileImage == null ? toggleImagePickerModal : saveUserProfileToFirebase}
                />
                {
                    profileImage == null ? (
                        <Text onPress={saveUserProfileToFirebase} style={styles.skipText}>
                            Şimdilik geç
                        </Text>
                    ) : null
                }
            </View>
        </View>
    )
}
