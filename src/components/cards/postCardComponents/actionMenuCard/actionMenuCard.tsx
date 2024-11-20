import React, { FC, useMemo, useState } from 'react'
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import style from './style'
import { Divider, Icon } from 'components'
import { useTranslation } from 'react-i18next'
import { SelectReactionModal } from 'components/modals'
import { addLike, removeLike } from 'services/firebase/firebase'

interface IActionMenuCard {
    postId: string
}

/**
 * ActionMenuCard bileşeni, kullanıcının diğer kullanıcıların paylaşımlarına verebileceği tepkileri gösterir.
 * Tepkiler, beğenme, yorum yapma, yeniden yayınlama ve gönderme gibi seçenekleri içerir.
 */
export const ActionMenuCard: FC<IActionMenuCard> = React.memo(({ postId }) => {
    const { t } = useTranslation()
    const [modalVisible, setModalVisible] = useState(false)
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })
    const [like, setLike] = useState(false)
    const screenWidth = Dimensions.get('window').width
    const actionItems = useMemo(() => [
        { id: 1, label: t('like'), iconType: 'MaterialIcons', iconName: 'thumb-up' },
        { id: 2, label: t('makeComment'), iconType: 'MaterialIcons', iconName: 'message' },
        { id: 3, label: t('repost'), iconType: 'FontAwesome6', iconName: 'retweet' },
        { id: 4, label: t('send'), iconType: 'Ionicons', iconName: 'paper-plane' }
    ], [t])

    const itemWidth = useMemo(() => screenWidth / actionItems.length, [screenWidth, actionItems.length])

    const toggleSelectReactionModal = () => setModalVisible(!modalVisible)

    const handleLongPress = (event: any, label: string) => {
        const { pageY, pageX } = event.nativeEvent
        setModalPosition({ top: pageY, left: pageX })

        if (label === t('like')) {
            setModalVisible(true)
        }
    }

    const handlePress = (label: string) => {
        if (label === t('like')) {
            like === false ? addLike(postId, "like") : removeLike(postId)
            setLike((prev) => !prev)

        }
    }

    const getIconStyle = (label: string) => (like && label === t('like')) ? style.trueIcon : style.icon
    const getLabelStyle = (label: string) => (like && label === t('like')) ? style.trueIconLabel : style.iconLabel

    const renderItem = ({ item }: any) => {
        const { iconType, iconName, label } = item

        return (
            <TouchableOpacity
                onPress={() => handlePress(label)}
                onLongPress={(event) => handleLongPress(event, label)}
                style={[style.iconContainer, { width: itemWidth }]}
            >
                <Icon type={iconType} name={iconName} style={getIconStyle(label)} />
                <Text style={getLabelStyle(label)}>{label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={style.cardContainer}>
            <Divider />
            <FlatList
                horizontal
                data={actionItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.iconName}
                scrollEnabled={false}
            />
            <SelectReactionModal
                closeModal={toggleSelectReactionModal}
                visibleModal={modalVisible}
                position={modalPosition}
                postId={postId}
            />
        </View>
    )
})