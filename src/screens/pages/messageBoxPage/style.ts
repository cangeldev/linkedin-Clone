import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        flex: 1
    },
    tabViewHeader: {
        flexDirection: 'row',
        padding: 15,
        justifyContent: "center"
    }
})