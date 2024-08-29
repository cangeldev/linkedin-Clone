import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

export default StyleSheet.create({
    container: {
        padding: 15,
        backgroundColor: colors.white,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8
    },
    title: {
        fontSize: 17,
        color: colors.black,
        fontWeight: "600"
    },
    icon: {
        fontSize: 18
    }
})
