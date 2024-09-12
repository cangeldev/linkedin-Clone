import { Text, View, FlatList, ScrollView } from 'react-native'
import React from 'react'
import styles from './style'
import { MyNetworkButton } from 'components'
import { AddFriendCard } from 'components/cards'

//Uygulamaya kayıt olan kullanıcılar ile değiş ilerki aşamalarda  onları listele
/**
 * ExpandYourNetwork - Uygulamaya yeni katılan kullanıcıların göründüğü sayfadır.
 */
const DATA = Array.from({ length: 10 }, (_, index) => ({ id: index.toString() }))

export const ExpandYourNetwork = () => {
    const renderItem = ({ item }: any) => (
        <View style={styles.cardWrapper}>
            <AddFriendCard />
        </View>
    )

    return (
        <ScrollView style={styles.container}>
            <MyNetworkButton title='Davetiyeler (0)' />
            <MyNetworkButton title='Ağımı yönet' />
            <View style={styles.infoSection}>
                <Text style={styles.infoText}>
                    Son faaliyetlerinize göre tanıyabileceğiniz kişiler
                </Text>
                <FlatList
                    scrollEnabled={false}
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.columnWrapper}
                />
            </View>
        </ScrollView>
    )
}