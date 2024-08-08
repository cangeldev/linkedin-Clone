import { TouchableHighlight } from 'react-native'
import React, { FC } from 'react'
import colors from 'assets/colors/colors'

interface ITabBarButton {
    onPress?: any
    children: any
}

export const TabBarButton: FC<ITabBarButton> = ({ children, onPress }) => {
    return (
        <TouchableHighlight
            style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 5,
            }}
            onPress={onPress}
            underlayColor={colors.lightGrey}
        >
            {children}
        </TouchableHighlight>
    )
}