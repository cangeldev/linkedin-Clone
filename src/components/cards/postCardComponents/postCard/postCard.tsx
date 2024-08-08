import { View, } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import ReactionCard from '../reactionCard/reactionCard'
import SharingCard from '../sharingCard/sharingCard'
import ContentCard from '../contentCard/contentCard'

interface IPostCard {
    reactionName?: string
    reactionImage?: any
    sharingName: string
    sharingImage: any
}

const PostCard: FC<IPostCard> = ({ reactionName, reactionImage, sharingName, sharingImage }) => {
    return (
        <View style={style.container}>
            <ReactionCard reactionName={reactionName} reactionImage={reactionImage} />
            <SharingCard sharingImage={sharingImage} sharingName={sharingName} />
            <ContentCard />
        </View>
    )
}
export default React.memo(PostCard)
