import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native'
import styles from './style'

const ContentCard = () => {
    const [isTextExpanded, setIsTextExpanded] = useState(false)
    const [hasMoreText, setHasMoreText] = useState(false)

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
                    {isTextExpanded ? 'hide more' : 'see more'}
                </Text>
            )}
        </View>
    )
}

export default React.memo(ContentCard)
