import { View } from 'react-native'
import React from 'react'
import style from './style'
import PostCard from 'components/cards/postCardComponents/postCard/postCard'
import { profileExample } from 'assets'

export const Home = () => {

    return (
        <View style={style.container}>
            <PostCard
                reactionName='Salih Rzayev'
                reactionImage={profileExample}
                sharingName='Lamiya Safarova'
                sharingImage={profileExample}
            />
        </View>
    )
}