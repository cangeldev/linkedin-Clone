import { View, Text, Modal, TextInput, FlatList } from 'react-native'
import React, { FC, useState } from 'react'
import { Icon } from 'components/icon/icon'
import style from './style'
import { useTranslation } from 'react-i18next'
import { Divider } from 'components/divider/divider'
import { FriendsListModalCard } from 'components/cards'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

interface IFriendsListModal {
    visibleModal: boolean
    closeModal: () => void
}

export const FriendsListModal: FC<IFriendsListModal> = ({ visibleModal, closeModal }) => {

    const { t } = useTranslation()
    const [searchText, setSearchText] = useState('')
    const friendsListRedux = useSelector((state: RootState) => state.userSlice.info.friendsList)

    const filterData = (text: any) => {
        setSearchText(text)
    }

    const filteredData = friendsListRedux.filter(item =>
        item.name.toLowerCase().includes(searchText.toLowerCase())
    )

    const renderItem = ({ item }: any) =>
        <FriendsListModalCard receiverName={item.name} receiverTitle={item.title} receiverProfileImage={item.profileImageUrl} receiverSurname={item.surname} receiverUid={item.myUid} />

    const ItemSeparator = () => {
        return <View style={style.separator}><Divider /></View>
    }

    return (
        <Modal
            visible={visibleModal}
            onRequestClose={closeModal}>
            <View style={style.container}>
                <View style={style.header}>
                    <Icon type="AntDesign" onPress={closeModal} name="close" style={style.closeButton} />
                    <Text style={style.headerTitle}>
                        {t('newMessage')}
                    </Text>
                </View>
                <View style={style.headerSearch}>
                    <Text style={style.headerText}>
                        {t('toWho')}:
                    </Text>
                    <TextInput
                        style={style.txtInput}
                        placeholder={t('typeOneOrMoreNames')}
                        value={searchText}
                        onChangeText={filterData}
                    />
                </View>
                <Divider />
                <Text style={style.contentText}>
                    Önerilen
                </Text>
                <FlatList
                    data={filteredData}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ItemSeparator}
                />
            </View>
        </Modal>
    )
}