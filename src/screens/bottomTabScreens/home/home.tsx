import { FlatList, View } from 'react-native'
import React from 'react'
import style from './style'
import { defaultProfileImage } from 'assets'
import { PostCardComponents } from 'components/cards/postCardComponents'
import { useSelector } from 'react-redux'
import { RootState } from 'services/features/store'

/**
 * HomeScreen - Uygulamanın anasayfasıdır yapılan paylaşımların felan listelendiği sayfadır.
 */
export const Home = () => {
    const postList = useSelector((state: RootState) => state.userSlice.post.posts)
    const ItemSeparatorComponent = () => <View style={style.seperator} />

    const renderItem = ({ item }: any) => <PostCardComponents reactionName='Salih Rzayev'
        reactionImage={defaultProfileImage}
        sharingName={item.name + " " + item.surname}
        sharingImage={item.sharingProfileImageUrl}
        sharingTitle={item.title}
        postContent={item.contentText}
        contentImage={item.postImageUrl}
        sharingTime={item.time}
    />

    return (
        <View style={style.container}>
            <FlatList data={postList}
                renderItem={renderItem}
                ItemSeparatorComponent={ItemSeparatorComponent}
            />
        </View>
    )
}