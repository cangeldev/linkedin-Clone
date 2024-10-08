import { Text, View, FlatList, ScrollView } from 'react-native'
import React, { useCallback } from 'react'
import styles from './style'
import { MyNetworkButton } from 'components'
import { AddFriendCard } from 'components/cards'
import { generateRandomHex } from 'utils/randomColor'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

/**
 * ExpandYourNetwork - Uygulamaya yeni katılan kullanıcıların göründüğü sayfadır.
 */
export const ExpandYourNetwork = () => {

    const { t } = useTranslation()
    const deneme = useSelector((state: RootState) => state.userSlice.info.NonFriendsList)
    const keyExtractor = (item: any, index: number) => item.id ? item.id.toString() : index.toString()

    const renderItem = useCallback(({ item }: any) => (
        <View style={styles.cardWrapper}>
            <AddFriendCard
                uid={item.id}
                title={item.title}
                name={item.name}
                surname={item.surname}
                profilePicture={{ uri: item.profileImageUrl }}
                backgroundColor={generateRandomHex()}
            />
        </View>
    ), [])

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
                    data={deneme}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    numColumns={2}
                />
            </View>
        </ScrollView>
    )
}
