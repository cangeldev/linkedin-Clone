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
        borderRadius: 50
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
        fontSize: 13,
        lineHeight: 15
    },
    footerView: {
        flexDirection: "row",
        alignItems: "center"
    },
    followButton: {
        alignItems: "center",
        flexDirection: "row",
        marginBottom: 20,
        marginLeft: 10
    },
    buttonPlus: {
        fontSize: 23,
        color: "#0e67c1"
    },
    buttonText: {
        fontSize: 15,
        color: "#0e67c1",
        fontWeight: "600"
    }
})