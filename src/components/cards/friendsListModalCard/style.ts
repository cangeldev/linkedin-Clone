import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        padding: 14,
        flexDirection: "row",
        alignItems: "center"
    },
    profileImage: {
        width: 47,
        height: 47,
        borderRadius: 25,
        marginRight: 10
    },
    userName: {
        fontSize: 16,
        color: colors.black,
        fontWeight: "600"
    },
    title: {
        fontSize: 15,
        color: colors.black
    }
})
