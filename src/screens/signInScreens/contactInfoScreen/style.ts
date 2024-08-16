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
    info: {
        color: colors.black,
        fontSize: 35,
        fontWeight: "bold",
        marginVertical: 20
    },
    inputView: {
        marginVertical: 30
    }
})