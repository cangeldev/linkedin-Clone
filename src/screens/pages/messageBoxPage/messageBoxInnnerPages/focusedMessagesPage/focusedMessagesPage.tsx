import { View, Text } from 'react-native'
import React, { useState } from 'react'
import style from './style'
import { MessageListCard } from 'components/cards'
import { notificationEmpty } from 'assets'
import { Icon } from 'components'
import { FriendsListModal } from 'components/modals'

export const FocusedMessagesPage = () => {

    const [modalVisible, setModalVisible] = useState(false)
    const toggleSelectReactionModal = () => setModalVisible(prev => !prev)
    return (
        <View style={style.container}>
            <MessageListCard
                profileImage={notificationEmpty}
                name='Can'
                surname='GEL'
                time={"asdasd"}
                message='Mesajım burada yazılı olacakasdas asdasdsa'
            />
            <FriendsListModal closeModal={toggleSelectReactionModal} visibleModal={modalVisible} />
            <Icon type="Feather" onPress={toggleSelectReactionModal} name="edit" style={style.icon} />
        </View>
    )
}