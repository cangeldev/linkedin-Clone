import { Text, View, FlatList, ScrollView } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import styles from './style'
import { MyNetworkButton } from 'components'
import { AddFriendCard } from 'components/cards'
import { fetchNonFriendsList } from 'services/firebase/firebase'
import { generateRandomHex } from 'utils/randomColor'
import { useTranslation } from 'react-i18next'

/**
 * ExpandYourNetwork - Uygulamaya yeni katılan kullanıcıların göründüğü sayfadır.
 */
export const ExpandYourNetwork = () => {

    const [users, setUsers] = useState<any[]>([])
    const { t } = useTranslation()

    useEffect(() => {
        const getUsers = async () => {
            const fetchedUsersInfo = await fetchNonFriendsList()
            setUsers(fetchedUsersInfo)
        }
        getUsers()
    }, [])

    const renderItem = useCallback(({ item }: any) => (
        <View style={styles.cardWrapper}>
            <AddFriendCard
                uid={item.uid}
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
            <MyNetworkButton title={t("invitations")} />
            <MyNetworkButton goPage="ManageMyNetworkPage" title={t("manageMyNetwork")} />
            <View style={styles.infoSection}>
                <Text style={styles.infoText}>
                    {t("peopleYouMayKnow")}
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
