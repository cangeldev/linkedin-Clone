import React from 'react'
import { TextStyle, ViewStyle } from 'react-native'
import IconA from 'react-native-vector-icons/AntDesign'
import IconO from 'react-native-vector-icons/Octicons'
import IconI from 'react-native-vector-icons/Ionicons'
import IconF from 'react-native-vector-icons/Fontisto'
import IconFA from 'react-native-vector-icons/FontAwesome'
import IconF5 from 'react-native-vector-icons/FontAwesome5'
import IconF6 from 'react-native-vector-icons/FontAwesome6'
import IconM from 'react-native-vector-icons/MaterialIcons'
import IconMC from 'react-native-vector-icons/MaterialCommunityIcons'
import IconE from 'react-native-vector-icons/Entypo'

interface IconProps {
    type: 'AntDesign' | 'Octicons' | 'Ionicons' | 'Fontisto' | 'FontAwesome6' | "MaterialIcons" | "Entypo" | "FontAwesome" | "MaterialCommunityIcons" | "FontAwesome5"
    name: string
    style?: TextStyle | ViewStyle
    onPress?: () => void
    disabled?: boolean
}

export const Icon: React.FC<IconProps> = React.memo(({ type, name, style, onPress, disabled }) => {
    const getIconComponent = () => {
        switch (type) {

            case 'AntDesign':
                return IconA
            case 'Octicons':
                return IconO
            case 'Ionicons':
                return IconI
            case 'Fontisto':
                return IconF
            case 'FontAwesome5':
                return IconF5
            case 'FontAwesome6':
                return IconF6
            case 'FontAwesome':
                return IconFA
            case 'MaterialIcons':
                return IconM
            case 'MaterialCommunityIcons':
                return IconMC
            case 'Entypo':
                return IconE
            default:
                return IconA
        }
    }

    const IconComponent = getIconComponent()

    return (
        <IconComponent
            name={name}
            style={style}
            onPress={onPress}
            disabled={disabled}
        />
    )
})