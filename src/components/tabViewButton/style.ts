import { StyleSheet, ViewStyle, TextStyle } from 'react-native'
import colors from 'assets/colors/colors'

const baseButton: ViewStyle = {

    borderRadius: 25,
    marginRight: 5,
    paddingHorizontal: 12,
    paddingVertical: 6,
}

const baseText: TextStyle = {
    fontWeight: '600',
}

const styles = StyleSheet.create({
    activeButton: {
        ...baseButton,
        backgroundColor: 'green',
    } as ViewStyle,
    inactiveButton: {
        ...baseButton,
        borderWidth: 1,
        borderColor: colors.darkGrey,
    } as ViewStyle,
    activeText: {
        ...baseText,
        color: 'white',
    } as TextStyle,
    inactiveText: {
        ...baseText,
        color: colors.darkGrey,
    } as TextStyle,
})

export default styles
