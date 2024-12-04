import React, { FC } from 'react'
import { View } from 'react-native'
import styles from './style'
import { ReactingPersonInformationCard, ShareOwnerInformationCard, ActionMenuCard, ReactionsAndCommentsCard, ContentCard } from 'components/cards/postCardComponents'

interface IPostCardComponents {
    reactionName?: string
    reactionImage?: any
    sharingName: string
    sharingImage: any,
    sharingTitle: string,
    postContent: string
    contentImage: any
    sharingTime: any
    sharingUid: string
    postId: string
}

/**
 * `PostCardComponents` bileşeni, bir paylaşımın tüm öğelerini tek bir kartta toplar.
 * Bu bileşen, paylaşımı oluşturan kişinin bilgilerini, paylaşımı yapan kişinin bilgilerini,
 * paylaşım içeriğini, tepkileri ve yorumları, ve aksiyon menüsünü içerir.
 */
export const PostCardComponents: FC<IPostCardComponents> = React.memo(({ reactionName, reactionImage, sharingName, sharingImage, sharingTitle, postContent, contentImage, sharingTime, sharingUid, postId }) => {

    return (
        <View style={styles.cardContainer}>
            <ReactingPersonInformationCard
                reactionName={reactionName}
                reactionImage={reactionImage}
            />
            <ShareOwnerInformationCard
                sharingImage={sharingImage}
                sharingName={sharingName}
                sharingTitle={sharingTitle}
                sharingTime={sharingTime}
                sharingUid={sharingUid}
            />
            <ContentCard
                contentText={postContent}
                contentImage={contentImage}
            />
            <ReactionsAndCommentsCard
                postId={postId}
            />
            <ActionMenuCard
                postId={postId}
            />
        </View>
    )
})