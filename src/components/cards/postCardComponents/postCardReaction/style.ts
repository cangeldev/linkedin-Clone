import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        padding: 10
    },
    reactionUserView: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 10
    },
    reactionImage: {
        width: 30,
        height: 30,
        borderRadius: 25
    },
    reactionUserIconView: {
        flexDirection: "row"
    },
    reactionName: {
        flex: 1,
        marginHorizontal: 10,
        color: colors.black,
        fontWeight: "500"
    },
    reactionText: {
        color: colors.grey
    },
    icons: {
        fontSize: 22,
        color: "#b3b3b3",
        marginLeft: 6
    }
})