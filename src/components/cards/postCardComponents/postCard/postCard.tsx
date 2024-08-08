import { View, } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import PostCardReaction from '../postCardReaction/postCardReaction'

interface IPostCard {
    reactionName?: string
    reactionImage?: any
}
const PostCard: FC<IPostCard> = ({ reactionName, reactionImage }) => {
    return (
        <View style={style.container}>
            <PostCardReaction
                reactionName={reactionName}
                reactionImage={reactionImage}
            />
        </View>
    )
}
export default React.memo(PostCard)
//Sharing