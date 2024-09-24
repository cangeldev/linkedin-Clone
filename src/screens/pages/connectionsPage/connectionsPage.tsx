import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import style from './style'
import { Divider, Icon } from 'components'
import { ConnectionsUserCard } from 'components/cards'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

/**
 * ConnectionsPage - iletişimde olduğum kullanıcıların listelendiği sayfadır. Bu sayfadan kullanıcılar ile iletişim kurulabilir veya iletişim sonlandırma gibi işlemlere yönelinebilinir.
 */
export const ConnectionsPage = () => {

    const friendsListRedux = useSelector((state: RootState) => state.userSlice.info.friendsList)
    const navigation = useNavigation<any>()
    const renderItem = ({ item }: any) => <ConnectionsUserCard name={item.name} job={item.job} title={item.title} profileImage={item.profileImageUrl} />

    return (
        <View style={style.container}>
            <View style={style.header}>
                <Icon onPress={() => navigation.goBack()} name='arrow-left' type='MaterialCommunityIcons' style={style.backIcon} />
                <Text style={style.title}>
                    Bağlantılar
                </Text>
            </View>
            <Divider />
            <View style={style.toolbar}>
                <Text style={style.connectionCountText}>
                    222 bağlantı
                </Text>
                <Icon name='search' type='Fontisto' style={style.toolbarIcons} />
                <Icon name='sliders-h' type='FontAwesome5' style={style.toolbarIcons} />
            </View>
            <Divider />
            <FlatList data={friendsListRedux} renderItem={renderItem} ItemSeparatorComponent={() => <Divider />} />
        </View>
    )
}
