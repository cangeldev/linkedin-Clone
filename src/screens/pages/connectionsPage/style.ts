import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    connectionCountText: {
        fontSize: 16,
        flex: 1
    },
    toolbar: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15
    },
    toolbarIcons: {
        fontSize: 18,
        marginLeft: 25,
        color: colors.black
    }
})