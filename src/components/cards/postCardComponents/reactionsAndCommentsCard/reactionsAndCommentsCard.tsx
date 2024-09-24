import { View, Text, FlatList, Image } from 'react-native'
import React from 'react'
import styles from './style'
import { useTranslation } from 'react-i18next'
import { reactionList } from 'utils/helper'

/**
 * `ReactionsAndCommentsCard` bileşeni, bir gönderiye verilen tepkilerin hangi türde olduklarını kaç adet olduklarını ve varsa yorum bilgisini gösterir.
 */
export const ReactionsAndCommentsCard = React.memo(() => {
    const { t } = useTranslation()

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
            <Text style={styles.comment}>28 {t('comment')}</Text>
        </View>
    )
})