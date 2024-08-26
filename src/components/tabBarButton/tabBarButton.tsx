import { TouchableHighlight } from 'react-native'
import React, { FC } from 'react'
import colors from 'assets/colors/colors'
import style from './style'

interface ITabBarButton {
    onPress?: any
    children: any
    accessibilityState?: any
}

export const TabBarButton: FC<ITabBarButton> = React.memo(({ children, onPress, accessibilityState }) => {
    const isActive = accessibilityState?.selected

    return (
        <TouchableHighlight
            style={[style.container, {
                borderTopWidth: isActive ? 2 : 0,
                borderTopColor: isActive ? colors.darkGrey : 'transparent',
            }]}
            onPress={onPress}
            underlayColor={colors.lightGrey}
        >
            {children}
        </TouchableHighlight>
    )
})