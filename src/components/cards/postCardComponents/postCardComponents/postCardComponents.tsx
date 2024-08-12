import React, { FC } from 'react'
import { View } from 'react-native'
import styles from './style'
import ContentCard from '../contentCard/contentCard'
import ReactionsAndCommentsCard from '../reactionsAndCommentsCard/reactionsAndCommentsCard'
import ShareOwnerInformationCard from '../shareOwnerInformationCard/shareOwnerInformationCard'
import ReactingPersonInformationCard from '../reactingPersonInformationCard/reactingPersonInformationCard'

interface IPostCardComponents {
    reactionName?: string
    reactionImage?: any
    sharingName: string
    sharingImage: any
}

const PostCardComponents: FC<IPostCardComponents> = ({
    reactionName,
    reactionImage,
    sharingName,
    sharingImage
}) => {
    return (
        <View style={styles.cardContainer}>
            <ReactingPersonInformationCard
                reactionName={reactionName}
                reactionImage={reactionImage}
            />
            <ShareOwnerInformationCard
                sharingImage={sharingImage}
                sharingName={sharingName}
            />
            <ContentCard />
            <ReactionsAndCommentsCard />
           
        </View>
    )
}

export default React.memo(PostCardComponents)
