import React, { useState } from 'react'
import { View, Text, Image, Alert } from 'react-native'
import styles from './style'
import { CustomButton, SignInHeader } from 'components'
import { ImagePickerModal } from 'components/modals'
import { camera } from 'assets'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { useNavigation } from '@react-navigation/native'
import { getCurrentUser, saveUserProfile, uploadProfileImage } from 'services/firebase/firebase'


/**
 * ProfilePictureSettingsScreen - Bu sayfa  kayıt olma sırasında kullanıcının profil resminin alındı kısımdır ilk olarak redux toolkite kaydedilir daha sonrasında tüm bilgilerle beraber firebaseye aktarılır.
 * Kayıt için alınan tüm bilgiler bu sayfada "saveUserProfile" fonksiyonu ile firebaseye aktarılır.
 */
export const ProfilePictureSettingsScreen = () => {
    const navigation = useNavigation<any>()
    const { job, name, surname, title, location, profileImage, email } = useSelector((state: RootState) => state.userSlice)
    const [imagePickerModal, setImagePickerModal] = useState(false)

    const hasProfileImage = profileImage != null
    const imageSource = profileImage ? { uri: profileImage } : camera

    const toggleImagePickerModal = () => setImagePickerModal(prev => !prev)

    const handleSaveProfile = async () => {
        const user = getCurrentUser()
        if (!user) return null

        let profileImageUrl = null
        if (profileImage) {
            profileImageUrl = await uploadProfileImage(user.uid, { uri: profileImage })
        }

        return {
            uid: user.uid,
            name,
            surname,
            email,
            location,
            job,
            title,
            profileImageUrl
        }
    }

    const saveUserProfileToFirebase = async () => {
        try {
            const userProfile = await handleSaveProfile()
            if (userProfile) {
                await saveUserProfile(userProfile)
                navigation.navigate("DrawerNavigation")
            }
        } catch (error) {
            console.error('Error saving user profile:', error)
            Alert.alert('Profile Update Failed', 'An error occurred while saving your profile.')
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
                    <Image style={styles.profileImage} source={imageSource} />
                </View>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userTitle}>{job} - {title}</Text>
            </View>
            <View style={styles.footer}>
                <CustomButton
                    title={hasProfileImage ? 'İleri' : 'Fotoğraf ekle'}
                    onPress={hasProfileImage ? saveUserProfileToFirebase : toggleImagePickerModal}
                />
                {!hasProfileImage && (
                    <Text onPress={saveUserProfileToFirebase} style={styles.skipText}>
                        Şimdilik geç
                    </Text>
                )}
            </View>
        </View>
    )
}
