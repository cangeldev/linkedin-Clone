import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        padding: 14,
        flexDirection: "row",
        backgroundColor: "red",
        alignItems: "center"
    },
    profileImage: {
        width: 47,
        height: 47,
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
    message: {
        fontSize: 14
    },
    time: {
        alignSelf: "flex-start",
        marginTop:5
    }
})
