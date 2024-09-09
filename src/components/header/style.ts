import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    profileImageView: {
        width: 30,
        height: 30
    },
    inputView: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center"
    },
    input: {
        flex: 1,
        height: 31,
        borderRadius: 2,
        paddingHorizontal: 10,
        backgroundColor: colors.textInputBackground,
        marginHorizontal: 12,
        paddingTop: 0,
        paddingBottom: 0,
        paddingLeft: 27
    },
    icon: {
        fontSize: 22,
        color: colors.darkGrey,
        marginRight: 10
    },
    messageIcon: {
        fontSize: 22,
        color: colors.darkGrey
    },
    iconContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    searchIcon:
    {
        position: "absolute",
        left: 20,
        color: colors.darkGrey,
        fontSize: 13
    }
})