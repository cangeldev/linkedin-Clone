import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({

    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: -10,
        justifyContent: "space-between",
        width: "100%"
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 50
    },
    input: {
        flex: 1,
        height: 31,
        borderRadius: 2,
        paddingHorizontal: 10,
        backgroundColor: colors.textInputBackground,
        marginHorizontal: 12,
        paddingTop: 0,
        paddingBottom: 0
    },
    icon: {
        fontSize: 25,
        color: "#b3b3b3",
        marginRight: 10
    }
})