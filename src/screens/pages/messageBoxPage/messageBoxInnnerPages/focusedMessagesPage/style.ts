import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: colors.lightGrey,
        flex: 1
    },
    icon: {
        color: colors.white,
        fontSize: 25,
        backgroundColor: colors.darkBlue,
        position: "absolute",
        padding: 15,
        borderRadius: 30,
        right: 15,
        bottom: 40
    }
})