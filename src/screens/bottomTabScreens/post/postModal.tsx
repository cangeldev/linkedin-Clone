import React, { useState, useCallback, useMemo } from 'react'
import { Modal, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import styles from './style'
import colors from 'assets/colors/colors'
import { Icon, ProfileImage } from 'components'
import { useTranslation } from 'react-i18next'
import { savePostToFirebase, uploadPostImage } from 'services/firebase/firebase'
import { ImagePickerModal } from 'components/modals'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { clearPostImage } from 'services/features/userSlice'
import { getCurrentUserUid } from 'services/firebase/firebaseAuth'

interface PostModalProps {
    isVisible: boolean
    onClose: () => void
}

export const PostModal: React.FC<PostModalProps> = React.memo(({ isVisible, onClose }) => {

    const [imagePickerModal, setImagePickerModal] = useState(false)
    const toggleImagePickerModal = useCallback(() => setImagePickerModal(prev => !prev), [])
    const [postContent, setPostContent] = useState<string>('')

    const isPostButtonDisabled = useMemo(() => postContent.trim().length === 0, [postContent])
    const { t } = useTranslation()
    const currentDate = useMemo(() => new Date().toISOString(), [])
    const uid = getCurrentUserUid()
    const postImage = useSelector((state: RootState) => state.userSlice.post.postImage)
    const dispatch = useDispatch()
    const postButtonStyle = useMemo(() => isPostButtonDisabled ? styles.disabledPostButton : styles.enabledPostButton, [isPostButtonDisabled])
    const { name, surname, title, myUid, profileImage } = useSelector((state: RootState) => state.userSlice.loggedUserInfo)
    const handleTextChange = useCallback((text: string) => setPostContent(text), []);
    const savePost = useCallback(async () => {
        try {
            let postImageUrl = null
            if (postImage) {
                postImageUrl = await uploadPostImage({ uri: postImage })
            }
            if (uid) {
                await savePostToFirebase(name, surname, currentDate, postContent, "comment", "reaction", title, postImageUrl, myUid, profileImage)
                dispatch(clearPostImage())
                setPostContent('')
            }
        } catch (error) {
            console.log('Error saving post:', error)
        }
    }, [postImage, uid, currentDate, postContent, dispatch])

    return (
        <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon type="AntDesign" name="close" style={styles.closeIcon} onPress={onClose} />
                    <View style={styles.profileImage} >
                        <ProfileImage />
                    </View>
                    <Text style={styles.username}>
                        {t("anyone")}{" "}
                        <Icon type="AntDesign" name="caretdown" style={styles.dropdownIcon} />
                    </Text>
                    <View style={styles.innerHeader}>
                        <Icon type="Octicons" name="clock" style={styles.timeIcon} />
                        <TouchableOpacity onPress={savePost} disabled={isPostButtonDisabled}>
                            <Text style={postButtonStyle}>
                                {t("post")}
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.inputContainer}>
                    <TextInput
                        autoFocus
                        multiline
                        placeholderTextColor={colors.darkGrey}
                        placeholder={t("shareYourThoughts")}
                        style={styles.textInput}
                        onChangeText={handleTextChange}
                        value={postContent}
                    />
                </View>
                {postImage &&
                    <View style={styles.postImageView}>
                        <Image source={{ uri: postImage }} style={styles.postImage} />
                        <Icon onPress={() => dispatch(clearPostImage())} name='closecircleo' type='AntDesign' style={styles.icon} />
                    </View>
                }
                <View style={styles.footer}>
                    <TouchableOpacity style={styles.aiButton}>
                        <Icon type="Ionicons" name="sparkles" style={styles.sparklesIcon} />
                        <Text style={styles.aiText}>{t("rewriteWithAI")}</Text>
                    </TouchableOpacity>
                    <Icon type="FontAwesome6" onPress={toggleImagePickerModal} name="image" style={styles.footerIcon} />
                    <Icon type="Fontisto" name="plus-a" style={styles.footerIcon} />
                </View>
            </View>
            <ImagePickerModal closeModal={toggleImagePickerModal} visibleModal={imagePickerModal} postImage='yes' />
        </Modal >
    )
}) 
