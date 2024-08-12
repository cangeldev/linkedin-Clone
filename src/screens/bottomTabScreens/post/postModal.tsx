import React, { useState } from 'react'
import { Modal, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import styles from './style'
import IconA from 'react-native-vector-icons/AntDesign'
import IconO from 'react-native-vector-icons/Octicons'
import IconI from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/Fontisto'
import IconF5 from 'react-native-vector-icons/FontAwesome6'
import { profileExample } from 'assets'
import colors from 'assets/colors/colors'

interface PostModalProps {
    isVisible: boolean
    onClose: () => void
}

const PostModal: React.FC<PostModalProps> = ({ isVisible, onClose }) => {
    const [postContent, setPostContent] = useState<string>('')
    const isPostButtonDisabled = postContent.trim().length === 0

    return (
        <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <IconA name="close" style={styles.closeIcon} onPress={onClose} />
                    <Image source={profileExample} style={styles.profileImage} />
                    <Text style={styles.username}>
                        Herhangi biri
                        <IconA name="caretdown" style={styles.dropdownIcon} />
                    </Text>
                    <View style={styles.innerHeader}>
                        <IconO name="clock" style={styles.timeIcon} />
                        <TouchableOpacity disabled={isPostButtonDisabled}>
                            <Text style={isPostButtonDisabled ? styles.disabledPostButton : styles.enabledPostButton}>
                                Postala
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        autoFocus
                        multiline
                        placeholderTextColor={colors.darkGrey}
                        placeholder='Düşüncelerinizi paylaşın...'
                        style={styles.textInput}
                        onChangeText={setPostContent}
                        value={postContent}
                    />
                </View>
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.aiButton}>
                        <IconI name="sparkles" style={styles.sparklesIcon} />
                        <Text style={styles.aiText}>Yapay zeka ile yeniden yazın</Text>
                    </TouchableOpacity>
                    <IconF5 name="image" style={styles.footerIcon} />
                    <IconF name="plus-a" style={styles.footerIcon} />
                </View>
            </View>
        </Modal>
    )
}
export default React.memo(PostModal)
