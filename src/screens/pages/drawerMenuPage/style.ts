import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({

    container: {
        flex: 1
    },
    headerContainer: {
        paddingVertical: "12%",
        paddingHorizontal: "9%"
    },
    profileImage: {
        width: 60,
        height: 60,
        resizeMode: 'cover'
    },
    name: {
        fontSize: 19,
        fontWeight: "bold",
        color: colors.black,
        marginTop: 10
    },
    goProfileText: {
        color: "#666666"
    },
    whoViewedText: {
        marginTop: 20,
        color: colors.grey,
        fontSize: 15
    },
    whoViewedCountText: {
        fontWeight: "bold",
        color: colors.black
    }
})