import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native'
import styles from './style'
import { useTranslation } from 'react-i18next'

/**
 * `ContentCard` bileşeni, kullanıcıların paylaşımlarının içeriğini gösteren bir karttır.
 */
export const ContentCard = React.memo(() => {

    const [isTextExpanded, setIsTextExpanded] = useState(false)
    const [hasMoreText, setHasMoreText] = useState(false)
    const { t } = useTranslation()

    //  Metni genişletme veya daraltma işlemi için kullanılan fonksiyon
    const toggleTextExpansion = () => {
        setIsTextExpanded(prev => !prev)
    }

    const handleTextLayout = useCallback((e: any) => {
        setHasMoreText(e.nativeEvent.lines.length >= 4)
    }, [])

    return (
        <View style={styles.cardContainer}>
            <Text
                onTextLayout={handleTextLayout}
                numberOfLines={isTextExpanded ? undefined : 3}
                style={styles.textContent}
            >
                Deneme İçeriği {"\n"}Deneme 2 {"\n"}Deneme 3{"\n"}Deneme 4
            </Text>
            {hasMoreText && (
                <Text
                    onPress={toggleTextExpansion}
                    style={styles.toggleText}
                >
                    {isTextExpanded ? t('hideSee') : t('hideMore')}
                </Text>
            )}
        </View>
    )
})
