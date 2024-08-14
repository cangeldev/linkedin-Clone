import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

export default StyleSheet.create({
    inputView: {
        marginVertical: 15,
        justifyContent: "center"
    },
    input: {
        borderBottomWidth: 1,
        padding: 0,
        margin: 0,
        fontSize: 16,
    },
    eyeIcon: {
        fontSize: 24,
        color: colors.darkGrey,
        position: "absolute",
        right:10
    }

})
