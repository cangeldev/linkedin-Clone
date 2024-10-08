import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15
    },
    title: {
        fontSize: 17,
        color: colors.black,
        flex: 1,
        marginLeft: 15
    },
    icon: {
        fontSize: 18,
        color: colors.black
    },
    count: {
        fontSize: 16,
        color: colors.black
    }
})
