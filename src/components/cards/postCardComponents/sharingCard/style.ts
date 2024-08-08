import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"
export default StyleSheet.create({
    container: {
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingVertical: 5
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 50,
        backgroundColor: "red"
    },
    contentView: {
        flex: 1,
        marginHorizontal: 5
    },
    nameText: {
        fontWeight: "600",
        color: colors.black,
        fontSize: 15
    },
    description: {
        fontSize: 14,
        lineHeight: 15
    },
    footerView: {
        flexDirection: "row",
        alignItems: "center"
    },
    followButton: {
        alignItems: "center",
        flexDirection: "row",
    },
    buttonPlus: {
        fontSize: 25,
        color: "#0e67c1"
    },
    buttonText: {
        fontSize: 15,
        color: "#0e67c1",
        fontWeight: "600"
    }
})