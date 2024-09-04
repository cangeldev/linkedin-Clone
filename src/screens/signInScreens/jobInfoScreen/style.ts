
import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15
    },
    logo: {
        width: 90,
        height: 45,
        resizeMode: 'contain'
    },
    infoText: {
        color: colors.black,
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 30
    },
    studentSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    studentText: {
        color: colors.black,
        fontSize: 16
    },
    switchContainer: {
        flexDirection: "row",
        alignItems: "center"
    },
    switchLabel: {
        marginRight: 5
    },
    inputSection: {
        flex: 1,
        marginTop: 40
    }
})