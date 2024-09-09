import { View } from 'react-native'
import React from 'react'
import style from './style'
import { defaultProfileImage } from 'assets'
import { PostCardComponents } from 'components/cards/postCardComponents'

export const Home = () => {

    return (
        <View style={style.container}>
            <PostCardComponents
                reactionName='Salih Rzayev'
                reactionImage={defaultProfileImage}
                sharingName='Lamiya Safarova'
                sharingImage={defaultProfileImage}
            />
        </View>
    )
}