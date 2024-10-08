import { FlatList, View } from 'react-native'
import React, { useEffect } from 'react'
import style from './style'
import { defaultProfileImage } from 'assets'
import { PostCardComponents } from 'components/cards/postCardComponents'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { EmptyNotificationsCard } from 'components/cards'

/**
 * HomeScreen - Uygulamanın anasayfasıdır yapılan paylaşımların felan listelendiği sayfadır.
 */
export const Home = () => {

    const { t } = useTranslation()
    const navigation = useNavigation()
    const postList = useSelector((state: RootState) => state.userSlice.post.posts)
    const ItemSeparatorComponent = () => <View style={style.seperator} />

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            // Geri gitme işlemini durdurmak için
            e.preventDefault()
        })
        return unsubscribe
    }, [navigation])

    const renderItem = ({ item }: any) => <PostCardComponents reactionName='Salih Rzayev'
        reactionImage={defaultProfileImage}
        sharingName={item.name + " " + item.surname}
        sharingImage={item.sharingProfileImageUrl}
        sharingTitle={item.title}
        postContent={item.contentText}
        contentImage={item.postImageUrl}
        sharingTime={item.time}
        sharingUid={item.postsUid}
    />

    return (
        <View style={style.container}>
            {postList.length === 0 ? (
                <EmptyNotificationsCard
                    notification={t("noNewPost")}
                    notificationInfo={t("pleaseAddNewPeopleToYourNetworkToSeePosts")}
                />
            ) : (
                <FlatList data={postList}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                />
            )}
        </View>
    )
}