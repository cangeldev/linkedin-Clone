import { Text, View, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import styles from './style'
import { MyNetworkButton } from 'components'
import { AddFriendCard } from 'components/cards'
import { fetchUsers } from 'services/firebase/firebase'
import { generateRandomHex } from 'utils/randomColor'

/**
 * ExpandYourNetwork - Uygulamaya yeni katılan kullanıcıların göründüğü sayfadır.
 */
export const ExpandYourNetwork = () => {
    const [users, setUsers] = useState<any[]>([])

    useEffect(() => {
        const getUsers = async () => {
            const fetchedUsersInfo = await fetchUsers()
            setUsers(fetchedUsersInfo)
        }
        getUsers()
    }, [])

    const renderItem = useCallback(({ item }: any) => (
        <View style={styles.cardWrapper}>
            <AddFriendCard
                title={item.title}
                name={item.name}
                surname={item.surname}
                profilePicture={{ uri: item.profileImageUrl }}
                backgroundColor={generateRandomHex()}
            />
        </View>
    ), [])

    const keyExtractor = (item: any, index: number) => item.id ? item.id.toString() : index.toString()

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
                    data={users}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    numColumns={2}
                />
            </View>
        </ScrollView>
    )
}
