import React, { useState } from 'react'
import { Modal, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import styles from './style'
import { defaultProfileImage } from 'assets'
import colors from 'assets/colors/colors'
import { Icon } from 'components'

interface PostModalProps {
    isVisible: boolean
    onClose: () => void
}
/**
 * Post - uygulamada payaşım yapmam için tasarlanan sayfadır hazırladığım metin veya resim gibi bilgileri girdiğim sayfadır.
 * Tab navigationda PostScreen'e tıklayınca otomatik postModal yani bu sayfa gösterilir, açılır.
 */
export const PostModal: React.FC<PostModalProps> = React.memo(({ isVisible, onClose }) => {
    const [postContent, setPostContent] = useState<string>('')
    const isPostButtonDisabled = postContent.trim().length === 0

    return (
        <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon type="AntDesign" name="close" style={styles.closeIcon} onPress={onClose} />
                    <Image source={defaultProfileImage} style={styles.profileImage} />
                    <Text style={styles.username}>
                        Herhangi biri{" "}
                        <Icon type="AntDesign" name="caretdown" style={styles.dropdownIcon} />
                    </Text>
                    <View style={styles.innerHeader}>
                        <Icon type="Octicons" name="clock" style={styles.timeIcon} />
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
                        <Icon type="Ionicons" name="sparkles" style={styles.sparklesIcon} />
                        <Text style={styles.aiText}>Yapay zeka ile yeniden yazın</Text>
                    </TouchableOpacity>
                    <Icon type="FontAwesome6" name="image" style={styles.footerIcon} />
                    <Icon type="Fontisto" name="plus-a" style={styles.footerIcon} />
                </View>
            </View>
        </Modal>
    )
})