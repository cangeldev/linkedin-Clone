import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    containerWrap: {
        flex: 1,
        height: 1,
        backgroundColor: colors.lightGrey
    }
})