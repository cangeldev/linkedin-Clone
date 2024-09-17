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
    backIcon: {
        fontSize: 25,
    },
    title: {
        color: colors.black,
        fontWeight: "600",
        fontSize: 20,
        marginLeft: 25
    },
    connectionCountText: {
        fontSize: 16,
        flex: 1
    },
    toolbar: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
    },
    toolbarIcons: {
        fontSize: 18,
        marginLeft: 25,
        color: colors.black
    }
})