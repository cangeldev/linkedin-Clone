import React, { FC } from 'react'
import { View } from 'react-native'
import styles from './style'
import { ReactingPersonInformationCard, ShareOwnerInformationCard, ActionMenuCard, ReactionsAndCommentsCard, ContentCard } from 'components/cards/postCardComponents'

interface IPostCardComponents {
    reactionName?: string
    reactionImage?: any
    sharingName: string
    sharingImage: any
}

export const PostCardComponents: FC<IPostCardComponents> = React.memo(({
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
            <ActionMenuCard />
        </View>
    )
})