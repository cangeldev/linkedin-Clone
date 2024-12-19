import { FlatList, View } from 'react-native'
import React, { useCallback } from 'react'
import { EmptyNotificationsCard, FriendRequestCard } from 'components/cards'
import style from './style'
import { manageFriendRequest } from 'services/firebase/firebase'
import { Divider } from 'components'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { setInfo } from 'services/features/userSlice'

export const AllNotifications = () => {

    const { t } = useTranslation()
    const dispatch = useDispatch()
    const friendsRequestList = useSelector((state: RootState) => state.userSlice.info.friendsRequestList)
    const keyExtractor = (item: any, index: number) => item.id ? item.id.toString() : index.toString()

    const handleAcceptRequest = async (id: string) => {
        await manageFriendRequest("", "", id, "accept")
        dispatch(setInfo({
            friendsRequestList: friendsRequestList.filter(request => request.id !== id)
        }))
    }

    const handleDeclineRequest = async (id: string) => {
        await manageFriendRequest("", "", id, "reject")
        dispatch(setInfo({
            friendsRequestList: friendsRequestList.filter(request => request.id !== id)
        }))
    }

    const renderItem = useCallback(({ item }: any) => (
        <FriendRequestCard
            name={item.senderInfo?.name}
            job={item.senderInfo?.job}
            profileImage={{ uri: item.senderInfo?.profileImageUrl }}
            title={item.senderInfo?.title}
            acceptRequests={() => handleAcceptRequest(item.id)}
            declineRequests={() => handleDeclineRequest(item.id)}
            time={item.time}
        />
    ), [])

    return (
        <View style={style.container}>
            {friendsRequestList.length === 0 ? (
                <EmptyNotificationsCard
                    notification={t("NoNewNotifications")}
                    notificationInfo={t("updatesYourHomePAge")}
                    buttonTitle={t("goToHomePage")}
                />
            ) : (
                <FlatList
                    data={friendsRequestList}
                    renderItem={renderItem}
                    keyExtractor={keyExtractor}
                    ItemSeparatorComponent={() => <Divider />}
                />
            )}
        </View>
    )
}
