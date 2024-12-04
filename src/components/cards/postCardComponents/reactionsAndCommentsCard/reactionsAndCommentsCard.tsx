import { View, Text, FlatList, Image } from 'react-native' 
import React, { FC, useState, useEffect, useMemo } from 'react' 
import styles from './style' 
import { useTranslation } from 'react-i18next' 
import { reactionList } from 'utils/helper' 
import { listenToPostLikes } from 'services/firebase/firebase' 

/**
 * `ReactionsAndCommentsCard` bileşeni, bir gönderiye verilen tepkilerin hangi türde olduklarını, kaç adet olduklarını ve varsa yorum bilgisini gösterir.
 */
interface IReactionsAndCommentsCard {
    postId: string 
}

export const ReactionsAndCommentsCard: FC<IReactionsAndCommentsCard> = React.memo(({ postId }) => {
    const { t } = useTranslation() 
    const [likeCount, setLikeCount] = useState<number>(0) 
    const [likeTypes, setLikeTypes] = useState<Record<string, number>>({}) 

    useEffect(() => {
        const unsubscribe = listenToPostLikes(postId, (count, types) => {
            setLikeCount(count)  // Toplam beğeni sayısını güncellemek için
            setLikeTypes(types)  // Beğeni türlerini güncellemek için 
        }) 
        return () => unsubscribe() 
    }, [postId]) 

    const filteredReactionList = useMemo(() =>
        reactionList.filter((reaction) => likeTypes[reaction.name]),
        [likeTypes]
    ) 

    const renderItem = ({ item }: any) => (
        <View style={styles.reactionIconContainer}>
            <Image resizeMode="contain" source={item.image} style={styles.reactionIcon} />
        </View>
    ) 

    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    keyExtractor={(item) => item.name}
                    ItemSeparatorComponent={() => <View style={styles.separator}></View>}
                    horizontal
                    data={filteredReactionList}
                    renderItem={renderItem}
                />
            </View>
            <View style={styles.countView}>
                {likeCount !== 0 && <Text style={styles.userCount}>{likeCount.toLocaleString()}</Text>}
            </View>
            <Text style={styles.comment}>28 {t('comment')}</Text>
        </View>
    ) 
}) 
