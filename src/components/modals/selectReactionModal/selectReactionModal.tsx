import { View, FlatList, Image, Modal, TouchableWithoutFeedback } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { reactionList } from 'utils/helper'

interface ISelectReactionModal {
    visibleModal: boolean
    closeModal: () => void
    position: { top: number; left: number }
}

/**
 * `SelectReactionModal` bileşeni, kullanıcının diğer kullanıcıların paylaşımlarına verebileceği tepkileri içeren bir modaldır.
 * Tepkiler, beğenme, kutlama, destek olma, harika, bilgi verici ve eğlenceli bulma gibi seçenekleri içerir.
 */
export const SelectReactionModal: FC<ISelectReactionModal> = ({ closeModal, visibleModal, position }) => {

    const renderItem = ({ item }: any) => (
        <Image source={item.image} style={style.reactionImage} />
    )

    return (

        <Modal
            transparent
            animationType="fade"
            visible={visibleModal}
            onRequestClose={closeModal}
        >
            <TouchableWithoutFeedback onPress={closeModal}>
                <View style={style.modalBackground}>
                    <View style={[style.reactionContainer, { top: position.top - 75 }]}>
                        <View style={style.innerContainer}>
                            <FlatList
                                contentContainerStyle={style.contentContainerStyle}
                                data={reactionList}
                                renderItem={renderItem}
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                keyExtractor={(item, index) => index.toString()}
                            />
                        </View>
                    </View>
                </View>
            </TouchableWithoutFeedback>
        </Modal>

    )
}
