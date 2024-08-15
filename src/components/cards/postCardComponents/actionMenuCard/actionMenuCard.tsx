import React, { useMemo } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import style from './style'
import colors from 'assets/colors/colors'
import { Divider } from 'components/divider/divider'
import Icon from 'components/icon/icon'

// List of items
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

const ActionMenuCard = () => {
    // Calculate item width for FlatList
    const screenWidth = Dimensions.get('window').width
    const itemWidth = useMemo(() => screenWidth / actionItems.length, [screenWidth])

    // Render item function
    const renderItem = ({ item }: any) => {
        const { iconType, iconName, label } = item

        return (
            <View style={[style.iconContainer, { width: itemWidth }]}>
                <Icon type={iconType} name={iconName} style={{ color: colors.darkGrey, fontSize: 18 }} />
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
}

export default React.memo(ActionMenuCard)
