import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    innerContainer: {
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
    iconView: {
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
        fontSize: 21,
        color: colors.darkGrey,
        marginLeft: 6
    }
})