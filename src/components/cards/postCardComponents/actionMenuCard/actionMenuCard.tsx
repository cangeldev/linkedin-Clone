import React, { useMemo } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import style from './style'
import { Divider, Icon } from 'components'

// Aksiyon menüsünde gösterilecek öğeler ve ikon bilgileri
const actionItems = [
    {
        label: "Beğendim",
        iconType: "MaterialIcons",
        iconName: "thumb-up"
    },
    {
        label: "Yorum Yap",
        iconType: "MaterialIcons",
        iconName: "message"
    },
    {
        label: "Yeniden yayınla",
        iconType: "FontAwesome6",
        iconName: "retweet"
    },
    {
        label: "Gönder",
        iconType: "Ionicons",
        iconName: "paper-plane"
    }
]

/**
 * `ActionMenuCard` bileşeni, kullanıcının diğer kullanıcıların paylaşımlarına verebileceği tepkileri gösterir.
 * Tepkiler, beğenme, yorum yapma, yeniden yayınlama ve gönderme gibi seçenekleri içerir.
 */
export const ActionMenuCard = React.memo(() => {
    const screenWidth = Dimensions.get('window').width
    const itemWidth = useMemo(() => screenWidth / actionItems.length, [screenWidth])

    const renderItem = ({ item }: any) => {
        const { iconType, iconName, label } = item

        return (
            <View style={[style.iconContainer, { width: itemWidth }]}>
                <Icon type={iconType} name={iconName} style={style.icon} />
                <Text style={style.iconLabel}>{label}</Text>
            </View>
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
        </View>
    )
})
