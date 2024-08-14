import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    buttonContainer: {
        marginBottom: 15,
        borderRadius: 30,
    },
    icon: {
        width: 20,
        height: 20,
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "500",
        color: colors.white,
        textAlign: "center",
        backgroundColor: colors.darkBlue,
        paddingVertical: 10,
        borderRadius: 30
    },
    buttonTextWithIcon: {
        fontSize: 20,
        fontWeight: "500",
        color: colors.black,
        borderWidth: 1,
        paddingVertical: 10,
        borderRadius: 30,
        textAlign: "center"
    }
})
