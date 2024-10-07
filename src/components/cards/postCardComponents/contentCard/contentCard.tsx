import React, { FC, useCallback, useState } from 'react'
import { Text, Image } from 'react-native'
import styles from './style'
import { useTranslation } from 'react-i18next'

interface IContentCard {
    contentText: string
    contentImage: any
}

/**
 * `ContentCard` bileşeni, kullanıcıların paylaşımlarının içeriğini gösteren bir karttır.
 */
export const ContentCard: FC<IContentCard> = React.memo(({ contentText, contentImage }) => {

    const [isTextExpanded, setIsTextExpanded] = useState(false)
    const [hasMoreText, setHasMoreText] = useState(false)
    const { t } = useTranslation()

    let postImageSource
    if (typeof contentImage === 'string') {
        postImageSource = { uri: contentImage }
    } else if (contentImage && contentImage.uri) {
        postImageSource = contentImage
    }

    //  Metni genişletme veya daraltma işlemi için kullanılan fonksiyon
    const toggleTextExpansion = () => {
        setIsTextExpanded(prev => !prev)
    }

    const handleTextLayout = useCallback((e: any) => {
        setHasMoreText(e.nativeEvent.lines.length >= 4)
    }, [])

    return (
        <>
            <Text
                onTextLayout={handleTextLayout}
                numberOfLines={isTextExpanded ? undefined : 3}
                style={styles.textContent}
            >
                {contentText}
            </Text>
            {hasMoreText && (
                <Text
                    onPress={toggleTextExpansion}
                    style={styles.toggleText}
                >
                    {isTextExpanded ? t('hideSee') : t('hideMore')}
                </Text>
            )}
            {
                contentImage && <Image source={postImageSource} style={styles.contentImage} />
            }
        </>
    )
})
