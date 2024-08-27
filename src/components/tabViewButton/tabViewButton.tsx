import React from 'react'
import { TouchableOpacity, Text } from 'react-native'
import styles from './style'

interface TabButtonProps {
    onPress: () => void
    isActive: boolean
    label: string
}

export const TabViewButton: React.FC<TabButtonProps> = ({ onPress, isActive, label }) => (
    <TouchableOpacity
        onPress={onPress}
        style={isActive ? styles.activeButton : styles.inactiveButton}
    >
        <Text style={isActive ? styles.activeText : styles.inactiveText}>
            {label}
        </Text>
    </TouchableOpacity>
)
