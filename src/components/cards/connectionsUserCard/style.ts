import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        padding: 14,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 25
    },
    textContainer: {
        paddingHorizontal: 10,
        flex: 1
    },
    userName: {
        fontSize: 16,
        color: colors.black,
        fontWeight: "500"
    },
    userDetails: {
        color: colors.black
    },
    optionsIcon: {
        fontSize: 18,
        marginRight: 16,
        color: colors.black
    },
    iconContainer: {
        flexDirection: "row"
    },
    sendIcon: {
        fontSize: 26,
        color: colors.black,
        alignSelf: "center"
    }
})
