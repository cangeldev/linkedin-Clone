import React, { FC, useCallback, useRef, useState, useEffect } from 'react'
import { View, Text, Image, TextInput, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { Divider, Icon } from 'components'
import { useNavigation } from '@react-navigation/native'
import style from './style'
import { resolveProfileImage } from 'utils/helper'
import { MessageCard } from 'components/cards'
import { heart, notificationEmpty } from 'assets'
import colors from 'assets/colors/colors'
import { useTranslation } from 'react-i18next'

interface IChatPage {
    profileImage?: any
    name?: string
    surname?: string
    title?: string
}

export const ChatPage: FC<IChatPage> = ({ name, profileImage, surname, title }) => {
    const [messageContent, setMessageContent] = useState<string>('')
    const scrollViewRef = useRef<ScrollView>(null)
    const profileImageSource = resolveProfileImage(profileImage)
    const { t } = useTranslation()
    const navigation = useNavigation<any>()

    const messages = [
        { name: "Can", surname: "GEL", profileImage: notificationEmpty },
        { name: "Selçuk", surname: "Durna", profileImage: heart }
    ]

    const goBack = () => {
        navigation.goBack()
    }

    const handleTextChange = useCallback((text: string) => setMessageContent(text), [])

    useEffect(() => {
        scrollViewRef.current?.scrollToEnd({ animated: true })
    }, [messages])

    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        >
            <View style={style.pageContainer}>
                <View style={style.headerContainer}>
                    <Icon type="AntDesign" onPress={goBack} name="arrowleft" style={style.backButton} />
                    <Text numberOfLines={1} style={style.usernameText}>
                        Deniz Türk
                    </Text>
                    <Icon type="Entypo" name="dots-three-vertical" style={style.headerIcon} />
                    <Icon type="Entypo" name="video-camera" style={style.headerIcon} />
                    <Icon type="FontAwesome" name="star-o" style={style.headerIcon} />
                </View>
                <ScrollView
                    ref={scrollViewRef}
                    showsVerticalScrollIndicator={false}
                    style={style.messageList}
                    contentContainerStyle={{ flexGrow: 1, justifyContent: 'flex-end' }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={style.profileContainer}>
                        <Image source={profileImageSource} style={style.profileImage} />
                        <Text style={style.userNameText}>Deniz Türk</Text>
                        <Text style={style.userTitleText}>Deneme Şirketinde Stajyer</Text>
                    </View>
                    {messages.map((msg, index) => (
                        <MessageCard
                            key={index}
                            name={msg.name}
                            surname={msg.surname}
                            profileImage={msg.profileImage}
                        />
                    ))}
                </ScrollView>
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
                            <Icon type="MaterialCommunityIcons" name="send" style={style.sendIcon} />
                        )}
                    </View>
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}
