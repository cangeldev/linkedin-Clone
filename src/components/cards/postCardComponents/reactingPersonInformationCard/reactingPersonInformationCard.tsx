
import React, { FC } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import { Divider } from 'components/divider/divider'
import IconM from 'react-native-vector-icons/MaterialCommunityIcons'

interface IReactingPersonInformationCard {
    reactionName?: string
    reactionImage?: any
}

const Icon = ({ name }: { name: string }) => <IconM name={name} style={styles.icon} />

const ReactingPersonInformationCard: FC<IReactingPersonInformationCard> = ({ reactionImage, reactionName }) => {
    return (
        <View style={styles.cardContainer}>
            <View style={styles.contentContainer}>
                <Image source={reactionImage} style={styles.reactionImage} />
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={styles.reactionName}>
                        {reactionName}
                        <Text style={styles.reactionDescription}>
                            {" "}bunu beğendi
                        </Text>
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon name="dots-vertical" />
                    <Icon name="close" />
                </View>
            </View>
            <Divider />
        </View>
    )
}

export default React.memo(ReactingPersonInformationCard)
