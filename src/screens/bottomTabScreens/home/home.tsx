import { FlatList, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import style from './style'
import { defaultProfileImage } from 'assets'
import { PostCardComponents } from 'components/cards/postCardComponents'
import { useNavigation } from '@react-navigation/native'
import { useTranslation } from 'react-i18next'
import { EmptyNotificationsCard } from 'components/cards'
import { getPosts } from 'services/firebase/firebase'

/**
 * HomeScreen - Uygulamanın anasayfasıdır yapılan paylaşımların felan listelendiği sayfadır.
 */
export const Home = () => {

    const { t } = useTranslation()
    const navigation = useNavigation()
    const ItemSeparatorComponent = () => <View style={style.seperator} />

    useEffect(() => {
        const unsubscribe = navigation.addListener('beforeRemove', (e) => {
            // Geri gitme işlemini durdurmak için kullandım
            e.preventDefault()
        })
        return unsubscribe
    }, [navigation])

    const [posts, setPosts] = useState<any[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsData = await getPosts()
                setPosts(postsData)
            } catch (error) {

                console.error(error)
            }
        }
        fetchPosts()
    }, [])

    const renderItem = ({ item }: any) => <PostCardComponents reactionName='Salih Rzayev'
        reactionImage={defaultProfileImage}
        sharingName={item.name + " " + item.surname}
        sharingImage={item.sharingProfileImageUrl}
        sharingTitle={item.title}
        postContent={item.contentText}
        contentImage={item.postImageUrl}
        sharingTime={item.time}
        sharingUid={item.postsUid}
        postId={item.uid}
    />

    return (
        <View style={style.container}>
            {posts.length === 0 ? (
                <EmptyNotificationsCard
                    notification={t("noNewPost")}
                    notificationInfo={t("pleaseAddNewPeopleToYourNetworkToSeePosts")}
                />
            ) : (
                <FlatList data={posts}
                    renderItem={renderItem}
                    ItemSeparatorComponent={ItemSeparatorComponent}
                />
            )}
        </View>
    )
}