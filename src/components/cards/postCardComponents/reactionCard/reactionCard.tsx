import { View, Text, Image } from 'react-native'
import React, { FC } from 'react'
import style from './style'
import { Divider } from 'components/divider/divider'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

interface IReactionCard {
    reactionName?: string
    reactionImage?: any
}

const Icon = ({ name }: any) => <IconM name={name} style={style.icons} />

const ReactionCard: FC<IReactionCard> = ({ reactionImage, reactionName }) => {
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
                    <Icon name="dots-vertical" />
                    <Icon name="close" />
                </View>
            </View>
            <Divider />
        </View>
    )
}
export default React.memo(ReactionCard)