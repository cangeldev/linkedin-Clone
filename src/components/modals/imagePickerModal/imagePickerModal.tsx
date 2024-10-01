import { Text, Modal, View } from 'react-native'
import React, { FC } from 'react'
import { launchImageLibrary, launchCamera, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker'
import style from './style'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'services/features/store'
import { setPostImage, setProfileImage } from 'services/features/userSlice'
import { useTranslation } from 'react-i18next'

interface IImagePickerModal {
    visibleModal: boolean
    closeModal: () => void,
    postImage?: string
}

/**
 * `ImagePickerModal` bileşeni, kullanıcıların profil fotoğraflarını seçmelerini veya çekmelerini sağlayan bir modal sağlar.
 *  Seçilen resim daha sonra farklı işlemlerde kullanılmak üzere redux toolkite kaydedilir.
 */
export const ImagePickerModal: FC<IImagePickerModal> = ({ visibleModal, closeModal, postImage }) => {
    const dispatch = useDispatch<AppDispatch>()
    const { t } = useTranslation()
    const handleImageSelection = (launchFunction: Function, options: ImageLibraryOptions | CameraOptions) => {
        launchFunction(options, (response: any) => {
            if (response.didCancel) {
                console.log('User cancelled operation')
            } else if (response.errorCode) {
                console.log('Error: ', response.errorMessage)
            } else {
                const imageUri = response.assets?.[0]?.uri
                if (imageUri) {
                    if (postImage) {
                        dispatch(setPostImage(imageUri))
                    }
                    else
                        dispatch(setProfileImage(imageUri))
                    closeModal()
                }
            }
        })
    }

    const openImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }
        handleImageSelection(launchImageLibrary, options)
    }

    const handleCameraLaunch = () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }
        handleImageSelection(launchCamera, options)
    }

    return (
        <Modal
            statusBarTranslucent
            transparent
            visible={visibleModal}
            onRequestClose={closeModal}
            animationType="slide">
            <View style={style.container}>
                <View style={style.contentView}>
                    <Text onPress={handleCameraLaunch} style={style.text}>
                        {t("takePhoto")}
                    </Text>
                    <Text onPress={openImagePicker} style={style.text}>
                        {t("selectPhotoGallery")}
                    </Text>
                </View>
            </View>
        </Modal>
    )
}
