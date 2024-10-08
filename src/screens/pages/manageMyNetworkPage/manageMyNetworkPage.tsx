import { View, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { Divider, MyNetworkPageButton } from 'components'
import { myNetworkPageButtonList } from 'utils/helper'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

/**
 * ManageMyNetworkPage - Ağımı yönet sayfasında bulunana bileşenlerin listelendiği sayfadır. bağlantılar,Takip ettiğim kişiler veya sayfalar  bileşenlerinin bulunduğu sayfadır istenilen sayfaya yönlenilmesi için kullanılır. 
 */
export const ManageMyNetworkPage = () => {

    const count = useSelector((state: RootState) => state.userSlice.info.friendsList.length)
    const renderItem = ({ item }: any) => <MyNetworkPageButton navigations={item.navigatePage} count={item.count ? item.count : count} title={item.title} iconName={item.iconName} type={item.type} />

    return (
        <View style={style.container}>
            <Divider />
            <>
                <FlatList data={myNetworkPageButtonList} renderItem={renderItem} ItemSeparatorComponent={() => <Divider />} />
                <Divider />
            </>
        </View>
    )
}