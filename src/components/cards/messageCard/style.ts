import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        padding: 10
    },
    row: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 25
    },
    textContainer: {
        marginLeft: 10,
        flex: 1
    },
    userNameContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    userName: {
        fontWeight: 'bold',
        fontSize: 15,
        color: colors.black
    },
    timestamp: {
        fontSize: 11,
        color: '#888'
    },
    messageText: {
        fontSize: 13,
        color: colors.black
    }
})
