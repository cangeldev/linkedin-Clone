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
    },
    iconUnchecked: {
        fontSize: 24,
        color: colors.grey
    },
    iconChecked: {
        fontSize: 24,
        color: colors.darkGreen
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50
    },
    rememberMeText: {
        fontSize: 15,
        color: colors.black
    },
    moreInfoText: {
        color: colors.darkBlue,
        fontWeight: '500',
        fontSize: 15,
        marginVertical: 15
    },
    passwordInfo: {
        fontSize: 12
    }
})