import { Text, Modal, View } from 'react-native'
import React, { FC, useState } from 'react'
import { launchImageLibrary, launchCamera, ImageLibraryOptions, CameraOptions } from 'react-native-image-picker'
import style from './style'

interface IimagePickerModal {
    visibleModal: boolean
    closeModal: () => void
}

export const ImagePickerModal: FC<IimagePickerModal> = ({ visibleModal, closeModal }) => {
    const [deneme, setDeneme] = useState(null)
    const openImagePicker = () => {
        const options: ImageLibraryOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker')
            } else if (response.errorCode) {
                console.log('Image picker error: ', response.errorMessage)
            } else {
                let imageUri = response.assets?.[0]?.uri
                if (imageUri) {
                    setDeneme(imageUri as any)
                    closeModal()
                }
            }
        })
    }

    const handleCameraLaunch = () => {
        const options: CameraOptions = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        }

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled camera')
            } else if (response.errorCode) {
                console.log('Camera error: ', response.errorMessage)
            } else {
                let imageUri = response.assets?.[0]?.uri
                if (imageUri) {
                    setDeneme(imageUri as any)
                    closeModal()
                }
            }
        })
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