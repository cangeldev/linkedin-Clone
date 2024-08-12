import React from 'react'
import { Modal, View, Text, Image, TouchableOpacity } from 'react-native'
import style from './style'
import IconA from 'react-native-vector-icons/AntDesign'
import IconO from 'react-native-vector-icons/Octicons'
import { profileExample } from 'assets'

interface PostModalProps {
    isVisible: boolean
    onClose: () => void
}

const PostModal: React.FC<PostModalProps> = ({ isVisible, onClose }) => {
    return (
        <Modal
            visible={isVisible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={style.modalContainer}>
                <View style={style.modalHeader}>
                    <IconA name="close" style={style.closeIcon} onPress={onClose} />
                    <Image source={profileExample} style={style.userProfileImage} />
                    <Text style={style.headerTitle}>
                        Herhangi biri
                        {""} <IconA name="caretdown" onPress={onClose} style={style.dropdownIcon} />
                    </Text>
                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <IconO name="clock" style={style.timeIcon} onPress={onClose} />
                        <TouchableOpacity>
                            <Text style={style.postButtonText}>
                                Postala
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <Text>Post Something</Text>
            </View>
        </Modal>
    )
}

export default React.memo(PostModal)
