import { View, Text, Modal, TextInput } from 'react-native'
import React, { FC } from 'react'
import { Icon } from 'components/icon/icon'
import style from './style'
import { useTranslation } from 'react-i18next'
import { Divider } from 'components/divider/divider'
import { FriendsListModalCard } from 'components/cards'
import { heart } from 'assets'

interface IFriendsListModal {
    visibleModal: boolean
    closeModal: () => void
}

export const FriendsListModal: FC<IFriendsListModal> = ({ visibleModal, closeModal }) => {
    const { t } = useTranslation()
    return (
        <Modal
            visible={visibleModal}
            onRequestClose={closeModal}

        >
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
                    <TextInput style={style.txtInput} placeholder={t('typeOneOrMoreNames')} />
                </View>
                <Divider />
                <Text style={style.contentText}>
                    Önerilen
                </Text>
                <FriendsListModalCard name='Deniz' surname='Türk' profileImage={heart} />
                <FriendsListModalCard name='Deniz' surname='Türk' profileImage={heart} />
            </View>
        </Modal>
    )
}