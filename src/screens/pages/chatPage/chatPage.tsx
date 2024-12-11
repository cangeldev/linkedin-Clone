import React, { FC, useState, useEffect, useCallback } from 'react'
import { View, Text, Image, TextInput, FlatList } from 'react-native'
import { Divider, Icon } from 'components'
import { useNavigation, useRoute } from '@react-navigation/native'
import style from './style'
import { resolveProfileImage } from 'utils/helper'
import { MessageCard } from 'components/cards'
import colors from 'assets/colors/colors'
import { useTranslation } from 'react-i18next'
import { listenForMessages, sendMessageFirebase } from 'services/firebase/firebase'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

export const ChatPage: FC = () => {
    const [messageContent, setMessageContent] = useState<string>('')
    const { myUid } = useSelector((state: RootState) => state.userSlice.loggedUserInfo)
    const route = useRoute<any>()
    const { receiverProfileImage, receiverName, receiverSurname, receiverTitle, receiverUid } = route.params

    const profileImageSource = resolveProfileImage(receiverProfileImage)
    const { t } = useTranslation()
    const navigation = useNavigation<any>()

    const goBack = () => {
        navigation.goBack()
    }

    const handleTextChange = useCallback((text: string) => setMessageContent(text), [])

    const generateChatID = (number1: any, number2: any) => {
        const sortedNumbers = [number1, number2].sort()
        return `${sortedNumbers[0]}-${sortedNumbers[1]}`
    }

    const chatID = generateChatID(myUid, receiverUid)
    const sendMessage = () => {
        sendMessageFirebase(chatID, messageContent, myUid)
        setMessageContent('')
    }

    const [messages, setMessages] = useState([])
    useEffect(() => {
        const unsubscribe = listenForMessages(chatID, setMessages)
        return () => unsubscribe()
    }, [chatID])

    const renderItem = ({ item }: any) => (
        <MessageCard
            receiverName={receiverName}
            receiverSurname={receiverSurname}
            receiverProfileImage={receiverProfileImage}
            message={item.text}
            info={myUid === item.senderId ? 'from' : 'to'}
            createdAt={item.createdAt ? new Date(item.createdAt.seconds * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) : ''}
        />
    )

    const ListHeader = () => (
        <View style={style.profileContainer}>
            <Image source={profileImageSource} style={style.profileImage} />
            <Text style={style.userNameText}>{`${receiverName} ${receiverSurname}`}</Text>
            <Text style={style.userTitleText}>{receiverTitle}</Text>
        </View>
    )

    return (
        <View style={style.pageContainer}>
            <View style={style.headerContainer}>
                <Icon type="AntDesign" onPress={goBack} name="arrowleft" style={style.backButton} />
                <Text numberOfLines={1} style={style.usernameText}>
                    {`${receiverName} ${receiverSurname}`}
                </Text>
                <Icon type="Entypo" name="dots-three-vertical" style={style.headerIcon} />
                <Icon type="Entypo" name="video-camera" style={style.headerIcon} />
                <Icon type="FontAwesome" name="star-o" style={style.headerIcon} />
            </View>

            <FlatList
                showsVerticalScrollIndicator={false}
                style={{ marginBottom: 60 }}
                inverted
                data={[...messages].reverse()}
                renderItem={renderItem}
                ListFooterComponent={ListHeader}
            />

            <View style={style.messageInputContainer}>
                <Divider />
                <View style={style.textInputContainer}>
                    <Icon type="AntDesign" name="pluscircleo" style={style.addIcon} />
                    <TextInput
                        multiline
                        placeholderTextColor={colors.darkGrey}
                        placeholder={t('writeMessage')}
                        style={style.messageInput}
                        onChangeText={handleTextChange}
                        value={messageContent}
                    />
                    {messageContent === '' ? (
                        <Icon type="FontAwesome5" name="microphone" style={style.microphoneIcon} />
                    ) : (
                        <Icon type="MaterialCommunityIcons" onPress={sendMessage} name="send" style={style.sendIcon} />
                    )}
                </View>
            </View>
        </View>
    )
}
