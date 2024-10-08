import { View, Text, FlatList } from 'react-native'
import React from 'react'
import style from './style'
import { Divider, Icon } from 'components'
import { ConnectionsUserCard } from 'components/cards'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { useTranslation } from 'react-i18next'

/**
 * ConnectionsPage - iletişimde olduğum kullanıcıların listelendiği sayfadır. Bu sayfadan kullanıcılar ile iletişim kurulabilir veya iletişim sonlandırma gibi işlemlere yönelinebilinir.
 */
export const ConnectionsPage = () => {

    const friendsListRedux = useSelector((state: RootState) => state.userSlice.info.friendsList)
    const renderItem = ({ item }: any) => <ConnectionsUserCard name={item.name} job={item.job} title={item.title} profileImage={item.profileImageUrl} surname={item.surname} />
    const { t } = useTranslation()
    
    return (
        <View style={style.container}>
            <Divider />
            <View style={style.toolbar}>
                <Text style={style.connectionCountText}>
                    {friendsListRedux.length}  {t("connection")}
                </Text>
                <Icon name='search' type='Fontisto' style={style.toolbarIcons} />
                <Icon name='sliders-h' type='FontAwesome5' style={style.toolbarIcons} />
            </View>
            <Divider />
            <FlatList data={friendsListRedux} renderItem={renderItem} ItemSeparatorComponent={() => <Divider />} />
        </View>
    )
}
