import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 20
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.black,
        marginLeft: 10
    },
    image: {
        width: 22,
        height: 22,
        tintColor: colors.grey
    }
})