import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 10
    },
    reactionIconContainer: {
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 50
    },
    reactionIcon: {
        borderRadius: 50,
        width: 17,
        height: 17
    },
    separator: {
        marginLeft: -5
    },
    userCount: {
        flex: 1,
        marginLeft: 5,
        fontSize: 13
    },
    comment: {
        fontSize: 13
    }
})