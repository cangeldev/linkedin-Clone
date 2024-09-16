import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15
    },
    icon: {
        fontSize: 25
    },
    title: {
        color: colors.black,
        fontWeight: "600",
        fontSize: 20,
        marginLeft: 25
    }
})