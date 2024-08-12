import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%"
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 50
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
        fontSize: 25,
        color: "#b3b3b3",
        marginRight: 10
    },
    iconContainer: {
        flexDirection: "row"
    },
    searchIcon:
    {
        position: "absolute",
        left: 20,
        color: colors.darkGrey,
        fontSize: 13
    }
})