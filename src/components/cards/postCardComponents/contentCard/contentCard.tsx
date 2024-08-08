import React, { useCallback, useState } from 'react'
import { Text, View } from 'react-native'
import style from './style'

const ContentCard = () => {
    const [textShown, setTextShown] = useState(false)
    const [lengthMore, setLengthMore] = useState(false)

    const toggleNumberOfLines = () => {
        setTextShown(!textShown)
    }

    const onTextLayout = useCallback((e: { nativeEvent: { lines: string | any[] } }) => {
        setLengthMore(e.nativeEvent.lines.length >= 4)
    }, [])

    return (
        <View style={style.container}>
            <Text
                onTextLayout={onTextLayout}
                numberOfLines={textShown ? undefined : 3}
                style={style.contentText}>
                {"Deneme İçeriği"}</Text>
            {
                lengthMore ? <Text
                    onPress={toggleNumberOfLines}
                    style={style.moreText}>{textShown ? 'hide more' : 'see more'}</Text>
                    : null
            }
        </View>
    )
}

export default React.memo(ContentCard)