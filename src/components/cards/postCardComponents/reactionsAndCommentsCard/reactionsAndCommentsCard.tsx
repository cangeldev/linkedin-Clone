import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { clapping, heart, idea, laughing, like, support } from 'assets'
import style from './style'

const ReactionsAndCommentsCard = () => {
    const reactionList = [
        { image: like },
        { image: clapping },
        { image: support },
        { image: heart },
        { image: idea },
        { image: laughing }
    ]

    const renderItem = ({ item }: any) =>
        <View style={style.reactionIconContainer}>
            <Image resizeMode='contain' source={item.image} style={style.reactionIcon} />
        </View>

    return (
        <View style={style.container}>
            <View >
                <FlatList keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => <View style={style.separator}></View>}
                    horizontal data={reactionList} renderItem={renderItem}
                />
            </View>
            <Text style={style.userCount}>5.043</Text>
            <Text style={style.comment}>28 yorum</Text>
        </View>
    )
}

export default React.memo(ReactionsAndCommentsCard)