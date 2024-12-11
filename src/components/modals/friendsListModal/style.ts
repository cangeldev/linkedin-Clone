import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        marginTop: 15,
        flex: 1
    },
    closeButton: {
        fontSize: 25,
        color: colors.darkGrey
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 15
    },
    headerTitle: {
        color: colors.black,
        fontSize: 18,
        marginLeft: 30
    },
    headerText: {
        fontWeight: "500",
        fontSize: 17,
        color: colors.black,
        paddingLeft: 15
    },
    headerSearch: {
        flexDirection: "row",
        alignItems: "center"
    },
    txtInput: {
        fontSize: 16,
        marginLeft: 5,
        marginBottom: -3
    },
    contentText: {
        fontSize: 17,
        color: colors.black,
        paddingLeft: 15,
        paddingVertical: 15
    }
})