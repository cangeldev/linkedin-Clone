import React, { FC } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './style'
import { Divider, Icon } from 'components'
import { useTranslation } from 'react-i18next'

interface IReactingPersonInformationCard {
    reactionName?: string
    reactionImage?: any
}

/**
 * `ReactingPersonInformationCard` bileşeni, bir gönderiye verilen tepkinin bilgilerini gösterir.
 * Bu kart, tepki veren kişinin adını ve görüntüsünü, tepkinin açıklamasını ve ek seçenekleri içerir.
 */
export const ReactingPersonInformationCard: FC<IReactingPersonInformationCard> = React.memo(({ reactionImage, reactionName }) => {

    const { t } = useTranslation()

    return (
        <View style={styles.cardContainer}>
            <View style={styles.contentContainer}>
                <Image source={reactionImage} style={styles.reactionImage} />
                <View style={styles.textContainer}>
                    <Text numberOfLines={1} style={styles.reactionName}>
                        {reactionName}
                        <Text style={styles.reactionDescription}>
                            {" "}{t('likesThis')}
                        </Text>
                    </Text>
                </View>
                <View style={styles.iconContainer}>
                    <Icon name='dots-vertical' type='MaterialCommunityIcons' style={styles.icon} />
                    <Icon name='close' type='MaterialCommunityIcons' style={styles.icon} />
                </View>
            </View>
            <Divider />
        </View>
    )
})
