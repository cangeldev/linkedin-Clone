import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

export default StyleSheet.create({
    button: {
        borderRadius: 25,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: colors.darkBlue
    },
    buttonText: {
        color: colors.darkBlue,
        fontWeight: '700',
        fontSize: 16,
        textAlign: "center"
    }
})
