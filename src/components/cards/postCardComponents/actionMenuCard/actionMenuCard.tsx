import React, { useMemo, useState, } from 'react'
import { View, Text, FlatList, Dimensions, TouchableOpacity } from 'react-native'
import style from './style'
import { Divider, Icon } from 'components'
import { useTranslation } from 'react-i18next'
import { SelectReactionModal } from 'components/modals'

/**
 * `ActionMenuCard` bileşeni, kullanıcının diğer kullanıcıların paylaşımlarına verebileceği tepkileri gösterir.
 * Tepkiler, beğenme, yorum yapma, yeniden yayınlama ve gönderme gibi seçenekleri içerir.
 */
export const ActionMenuCard = React.memo(() => {

    const { t } = useTranslation()
    const [modalVisible, setModalVisible] = useState(false)
    const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 })

    const actionItems = [
        { id: 1, label: t('like'), iconType: "MaterialIcons", iconName: "thumb-up" },
        { id: 2, label: t('makeComment'), iconType: "MaterialIcons", iconName: "message" },
        { id: 3, label: t('repost'), iconType: "FontAwesome6", iconName: "retweet" },
        { id: 4, label: t('send'), iconType: "Ionicons", iconName: "paper-plane" },
    ]

    const screenWidth = Dimensions.get('window').width
    const itemWidth = useMemo(() => screenWidth / actionItems.length, [screenWidth])

    const toggleSelectReactionModal = () => setModalVisible(!modalVisible)

    const renderItem = ({ item }: any) => {
        const { iconType, iconName, label } = item

        const longPress = (event: any) => {
            const { pageY, pageX } = event.nativeEvent
            setModalPosition({ top: pageY, left: pageX })
            if (label === t('like')) {
                setModalVisible(true)
            }
        }

        return (
            <TouchableOpacity onLongPress={longPress} style={[style.iconContainer, { width: itemWidth }]}>
                <Icon type={iconType} name={iconName} style={style.icon} />
                <Text style={style.iconLabel}>{label}</Text>
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
            />
        </View>
    )
})
