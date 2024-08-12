import React, { useMemo } from 'react'
import { View, Text, FlatList, Dimensions } from 'react-native'
import style from './style'
import colors from 'assets/colors/colors'
import { Divider } from 'components/divider/divider'

// Icons
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconF from 'react-native-vector-icons/FontAwesome6'
import IconI from 'react-native-vector-icons/Ionicons'

// List of items
const actionItems = [
    {
        label: "Beğendim",
        iconLibrary: IconM,
        iconName: "thumb-up"
    },
    {
        label: "Yorum Yap",
        iconLibrary: IconM,
        iconName: "message"
    },
    {
        label: "Yeniden yayınla",
        iconLibrary: IconF,
        iconName: "retweet"
    },
    {
        label: "Gönder",
        iconLibrary: IconI,
        iconName: "paper-plane"
    }
];

const ActionMenuCard = () => {
    // Calculate item width for FlatList
    const screenWidth = Dimensions.get('window').width
    const itemWidth = useMemo(() => screenWidth / actionItems.length, [screenWidth])

    // Render item function
    const renderItem = ({ item }: any) => {
        const { iconLibrary: IconLibrary, iconName, label } = item

        return (
            <View style={[style.iconContainer, { width: itemWidth }]}>
                <IconLibrary name={iconName} color={colors.darkGrey} size={18} />
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
