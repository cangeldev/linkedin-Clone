import colors from 'assets/colors/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15,
        paddingVertical: 5
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 50
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
    userDetails: {
        color: colors.black,
    },
    iconView: {
        flexDirection: "row"
    },
    icon: {
        fontSize: 30,
        marginLeft: 10
    },
    date: {
        fontSize: 12
    }
})
