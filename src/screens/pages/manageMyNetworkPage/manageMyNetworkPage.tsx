import { View, Text, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { Divider, Icon, MyNetworkPageButton } from 'components'
import { useNavigation } from '@react-navigation/native'
import { myNetworkPageButtonList } from 'utils/helper'


/**
 * ManageMyNetworkPage - Ağımı yönet sayfasında bulunana bileşenlerin listelendiği sayfadır. bağlantılar,Takip ettiğim kişiler veya sayfalar  bileşenlerinin bulunduğu sayfadır istenilen sayfaya yönlenilmesi için kullanılır. 
 */
export const ManageMyNetworkPage = () => {
    const navigation = useNavigation<any>()

    const renderItem = ({ item }: any) =>
        <MyNetworkPageButton count={item.count} title={item.title} iconName={item.iconName} type={item.type} />
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Icon onPress={() => navigation.goBack()} name='arrow-left' type='MaterialCommunityIcons' style={style.icon} />
                <Text style={style.title}>
                    Ağımı yönet
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