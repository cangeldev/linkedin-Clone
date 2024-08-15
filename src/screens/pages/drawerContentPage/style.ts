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
        resizeMode: 'cover',
        borderRadius: 50
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
    },
    premiumContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: "9%",
        paddingVertical: 5
    },
    premiumImage: {
        width: 24,
        height: 24
    },
    premiumText: {
        fontSize: 17,
        marginLeft: 10,
        fontWeight: "bold",
        color: colors.black
    }
})