import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import { clapping, heart, idea, laughing, like, support } from 'assets'
import styles from './style'

/**
 * `ReactionsAndCommentsCard` bileşeni, bir gönderiye verilen tepkilerin hangi türde olduklarını kaç adet olduklarını ve varsa yorum bilgisini gösterir.
 */
export const ReactionsAndCommentsCard = React.memo(() => {
    // Beğenme çeşitlerini ve ikonlarını içeren liste
    const reactionList = [
        { image: like },
        { image: clapping },
        { image: support },
        { image: heart },
        { image: idea },
        { image: laughing }
    ]

    const renderItem = ({ item }: any) =>
        <View style={styles.reactionIconContainer}>
            <Image resizeMode='contain' source={item.image} style={styles.reactionIcon} />
        </View>

    return (
        <View style={styles.container}>
            <View >
                <FlatList keyExtractor={(item, index) => index.toString()}
                    ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                    horizontal data={reactionList} renderItem={renderItem}
                />
            </View>
            <Text style={styles.userCount}>5.043</Text>
            <Text style={styles.comment}>28 yorum</Text>
        </View>
    )
})