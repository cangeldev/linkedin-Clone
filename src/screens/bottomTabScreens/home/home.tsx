import { View } from 'react-native'
import React from 'react'
import style from './style'
import { profileExample } from 'assets'
import PostCardComponents from 'components/cards/postCardComponents/postCardComponents/postCardComponents'

export const Home = () => {

    return (
        <View style={style.container}>
            <PostCardComponents
                reactionName='Salih Rzayev'
                reactionImage={profileExample}
                sharingName='Lamiya Safarova'
                sharingImage={profileExample}
            />
        </View>
    )
}