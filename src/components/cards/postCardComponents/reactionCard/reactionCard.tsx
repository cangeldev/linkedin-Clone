import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { Divider } from 'components/divider/divider'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

interface IPostCardReaction {
    reactionName?: string
    reactionImage?: any
}

const PostCardReaction: FC<IPostCardReaction> = ({ reactionImage, reactionName }) => {
    return (
        <View style={style.container}>
            <View style={style.innerContainer}>
                <Image source={reactionImage} style={style.reactionImage} />
                <Text numberOfLines={1} style={style.reactionName}>
                    {reactionName}
                    <Text style={style.reactionText}>
                        {""} bunu beğendi
                    </Text>
                </Text>
                <View style={style.iconView}>
                    <IconM name="dots-vertical" style={style.icons} />
                    <IconM name="close" style={style.icons} />
                </View>
            </View>
                <Divider />
        </View>
    )
}
export default React.memo(PostCardReaction)