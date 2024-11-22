import { View, FlatList, Image, Modal, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { reactionList } from 'utils/helper'
import { updateLike } from 'services/firebase/firebase'

interface ISelectReactionModal {
    visibleModal: boolean
    closeModal: () => void
    position: { top: number; left: number }
    postId: string
}

/**
 * `SelectReactionModal` bileşeni, kullanıcının diğer kullanıcıların paylaşımlarına verebileceği tepkileri içeren bir modaldır.
 * Tepkiler, beğenme, kutlama, destek olma, harika, bilgi verici ve eğlenceli bulma gibi seçenekleri içerir.
 */
export const SelectReactionModal: FC<ISelectReactionModal> = ({ closeModal, visibleModal, position, postId }) => {

    const renderItem = ({ item }: any) => (
        <TouchableOpacity onPress={() => { updateLike(postId, item.name), closeModal() }}>
            <Image source={item.image} style={style.reactionImage} />
        </TouchableOpacity>
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
