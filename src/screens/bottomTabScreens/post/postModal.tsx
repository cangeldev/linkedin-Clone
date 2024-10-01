import React, { useEffect, useState, useCallback } from 'react' 
import { Modal, View, Text, Image, TouchableOpacity, TextInput } from 'react-native' 
import styles from './style' 
import { defaultProfileImage } from 'assets' 
import colors from 'assets/colors/colors' 
import { Icon } from 'components' 
import { useTranslation } from 'react-i18next' 
import { getMyUserData, savePostToFirebase, uploadPostImage } from 'services/firebase/firebase' 
import { ImagePickerModal } from 'components/modals' 
import { useDispatch, useSelector } from 'react-redux' 
import { RootState } from 'services/features/store' 
import { clearPostImage } from 'services/features/userSlice' 

interface UserData {
    name: string 
    surname: string 
    title: string 
}

interface PostModalProps {
    isVisible: boolean 
    onClose: () => void 
}

export const PostModal: React.FC<PostModalProps> = React.memo(({ isVisible, onClose }) => {
    
    const [imagePickerModal, setImagePickerModal] = useState(false) 
    const toggleImagePickerModal = useCallback(() => setImagePickerModal(prev => !prev), []) 

    const [postContent, setPostContent] = useState<string>('') 
    const isPostButtonDisabled = postContent.trim().length === 0 
    const { t } = useTranslation() 
    const [userData, setUserData] = useState<UserData | null>(null) 
    const [currentDate, setCurrentDate] = useState('') 

    const postImage = useSelector((state: RootState) => state.userSlice.post.postImage) 
    const dispatch = useDispatch() 

    useEffect(() => {
        const date = new Date() 
        setCurrentDate(date.toLocaleString()) 
    }, []) 

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getMyUserData() 
                if (data) {
                    setUserData(data as UserData) 
                }
            } catch (err) {
                console.log('Kullanıcı verileri alınamadı:', err) 
            }
        } 

        fetchData() 
    }, []) 

    const savePost = useCallback(async () => {
        try {
            let postImageUrl = null 
            if (postImage) {
                postImageUrl = await uploadPostImage({ uri: postImage }) 
            }
            if (userData) {
                await savePostToFirebase(userData.name, userData.surname, currentDate, postContent, "comment", "reaction", userData.title, postImageUrl) 
                dispatch(clearPostImage()) 
                setPostContent('') 
            }
        } catch (error) {
            console.log('Error saving post:', error) 
        }
    }, [postImage, userData, currentDate, postContent, dispatch]) 

    return (
        <Modal visible={isVisible} animationType="slide" onRequestClose={onClose}>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Icon type="AntDesign" name="close" style={styles.closeIcon} onPress={onClose} />
                    <Image source={defaultProfileImage} style={styles.profileImage} />
                    <Text style={styles.username}>
                        {t("anyone")}{" "}
                        <Icon type="AntDesign" name="caretdown" style={styles.dropdownIcon} />
                    </Text>
                    <View style={styles.innerHeader}>
                        <Icon type="Octicons" name="clock" style={styles.timeIcon} />
                        <TouchableOpacity onPress={savePost} disabled={isPostButtonDisabled}>
                            <Text style={isPostButtonDisabled ? styles.disabledPostButton : styles.enabledPostButton}>
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
                        onChangeText={setPostContent}
                        value={postContent}
                    />
                </View>
                {postImage && <Image source={{ uri: postImage }} style={styles.postImage} />}
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
        </Modal>
    ) 
}) 
