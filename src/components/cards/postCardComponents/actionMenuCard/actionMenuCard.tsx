import React, { FC, useEffect, useState } from 'react'
import { View, Text, FlatList, Dimensions, TouchableOpacity, Image } from 'react-native'
import style from './style'
import { Divider, Icon } from 'components'
import { useTranslation } from 'react-i18next'
import { SelectReactionModal } from 'components/modals'
import { alreadyLiked, updateLike } from 'services/firebase/firebase'
import { idea, heart, clapping, support, laughing, likes, likeT } from 'assets'

interface IActionMenuCard {
    postId: string
}

const reactionMap = {
    idea: { image: idea, label: 'idea', style: style.ideaLabel },
    heart: { image: heart, label: 'heart', style: style.heartLabel },
    clapping: { image: clapping, label: 'clapping', style: style.clappingLabel },
    support: { image: support, label: 'support', style: style.supportLabel },
    laughing: { image: laughing, label: 'laughing', style: style.laughingLabel },
    like: { image: likeT, label: 'like', style: style.likeLabel },
}

export const ActionMenuCard: FC<IActionMenuCard> = React.memo(({ postId }) => {
    const { t } = useTranslation()
    const [modalVisible, setModalVisible] = useState(false)
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })
    const [isLiked, setIsLiked] = useState(false)
    const [reactionType, setReactionType] = useState<string>('')
    const screenWidth = Dimensions.get('window').width

    const actionItems = [
        { id: 'like', label: t('like'), iconType: 'MaterialIcons', iconName: 'thumb-up' },
        { id: 'comment', label: t('makeComment'), iconType: 'MaterialIcons', iconName: 'message' },
        { id: 'repost', label: t('repost'), iconType: 'FontAwesome6', iconName: 'retweet' },
        { id: 'send', label: t('send'), iconType: 'Ionicons', iconName: 'paper-plane' }
    ]

    const itemWidth = screenWidth / actionItems.length

    const toggleSelectReactionModal = () => setModalVisible(prev => !prev)

    const handleLongPress = (event: any, label: string) => {
        if (label === t('like')) {
            const { pageY, pageX } = event.nativeEvent
            setModalPosition({ top: pageY, left: pageX })
            setModalVisible(true)
        }
    }

    const handlePress = (label: string) => {
        if (label === t('like')) {
            isLiked ? updateLike(postId, null) : updateLike(postId, 'like')
            setIsLiked(prev => !prev)
        }
    }

    const getReactionDetails = (reaction: string) => {
        return reactionMap[reaction] || { image: likes, label: 'like', style: style.iconLabel }
    }

    const renderItem = ({ item }: any) => {
        const isLike = item.label === t('like')
        const { image, style: labelStyle } = isLike && reactionType ? getReactionDetails(reactionType) : { image: likes, style: style.iconLabel }
        return (
            <TouchableOpacity
                onPress={() => handlePress(item.label)}
                onLongPress={(event) => handleLongPress(event, item.label)}
                style={[style.iconContainer, { width: itemWidth }]}
            >
                {isLike ? (
                    <Image source={image} style={style.image} />
                ) : (
                    <Icon type={item.iconType} name={item.iconName} style={isLiked && isLike ? style.trueIcon : style.icon} />
                )}
                <Text style={isLike && reactionType ? labelStyle : style.iconLabel}>
                    {isLike && reactionType ? t(reactionMap[reactionType].label) : item.label}
                </Text>
            </TouchableOpacity>
        )
    }

    useEffect(() => {
        const unsubscribe = alreadyLiked(postId, (liked, type) => {
            setIsLiked(liked)
            setReactionType(type || '')
        })
        return unsubscribe
    }, [postId])

    return (
        <View style={style.cardContainer}>
            <Divider />
            <FlatList
                horizontal
                data={actionItems}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
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
