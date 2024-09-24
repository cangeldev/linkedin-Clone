import { View, Text, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { Divider, Icon, MyNetworkPageButton } from 'components'
import { useNavigation } from '@react-navigation/native'
import { myNetworkPageButtonList } from 'utils/helper'
import { useTranslation } from 'react-i18next'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

/**
 * ManageMyNetworkPage - Ağımı yönet sayfasında bulunana bileşenlerin listelendiği sayfadır. bağlantılar,Takip ettiğim kişiler veya sayfalar  bileşenlerinin bulunduğu sayfadır istenilen sayfaya yönlenilmesi için kullanılır. 
 */
export const ManageMyNetworkPage = () => {

    const count = useSelector((state: RootState) => state.userSlice.info.friendsList.length)
    const navigation = useNavigation<any>()
    const { t } = useTranslation()

    const renderItem = ({ item }: any) =>
        <MyNetworkPageButton navigations={item.navigatePage} count={item.count ? item.count : count} title={item.title} iconName={item.iconName} type={item.type} />

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Icon onPress={() => navigation.goBack()} name='arrow-left' type='MaterialCommunityIcons' style={style.icon} />
                <Text style={style.title}>
                    {t("manageMyNetwork")}
                </Text>
            </View>
            <Divider />
            <View>
                <FlatList data={myNetworkPageButtonList} renderItem={renderItem} ItemSeparatorComponent={() => <Divider />} />
                <Divider />
            </View>
        </View>
    )
}