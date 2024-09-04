import { Text, Modal, View } from 'react-native'
import React, { FC } from 'react'
import { launchImageLibrary, launchCamera, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker'
import style from './style'
import { useDispatch } from 'react-redux'
import { AppDispatch } from 'services/features/store'
import { setProfileImage } from 'services/features/userSlice'

interface IImagePickerModal {
    visibleModal: boolean
    closeModal: () => void
}

export const ImagePickerModal: FC<IImagePickerModal> = ({ visibleModal, closeModal }) => {
    const dispatch = useDispatch<AppDispatch>()

    const handleImageSelection = (launchFunction: Function, options: ImageLibraryOptions | CameraOptions) => {
        launchFunction(options, (response:any) => {
            if (response.didCancel) {
                console.log('User cancelled operation')
            } else if (response.errorCode) {
                console.log('Error: ', response.errorMessage)
            } else {
                const imageUri = response.assets?.[0]?.uri
                if (imageUri) {
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
                        Fotoğraf çek
                    </Text>
                    <Text onPress={openImagePicker} style={style.text}>
                        Galeriden bir fotoğraf seç
                    </Text>
                </View>
            </View>
        </Modal>
    )
}