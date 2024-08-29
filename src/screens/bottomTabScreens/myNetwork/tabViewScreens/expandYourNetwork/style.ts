import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.lightGrey,
        paddingVertical: 8
    },
    infoSection: {
        backgroundColor: colors.white,
        padding: 10
    },
    infoText: {
        marginBottom: 10,
        fontSize: 16,
        color: colors.black,
        paddingHorizontal: 4
    },
    cardWrapper: {
        flex: 1,
        margin: 5
    },
    columnWrapper: {
        justifyContent: 'space-between'
    }
})
