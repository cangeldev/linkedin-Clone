import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 13
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 7
    },
    closeIcon: {
        fontSize: 25,
        color: colors.black,
        marginRight: 20
    },
    profileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10
    },
    username: {
        flex: 1,
        fontSize: 16,
        fontWeight: "500",
        color: colors.darkGrey,
        textAlignVertical: "center"
    },
    dropdownIcon: {
        fontSize: 12,
        color: colors.black
    },
    innerHeader: {
        flexDirection: "row",
        alignItems: "center"
    },
    timeIcon: {
        fontSize: 19,
        marginRight: 10,
        color: colors.black
    },
    disabledPostButton: {
        color: "#a3a3a3",
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: colors.lightGrey,
        borderRadius: 25,
        fontSize: 16,
        fontWeight: "500"
    },
    enabledPostButton: {
        color: colors.white,
        paddingVertical: 5,
        paddingHorizontal: 12,
        backgroundColor: "#0b66bf",
        borderRadius: 25,
        fontSize: 16,
        fontWeight: "500"
    },
    inputContainer: {
        flex: 1
    },
    textInput: {
        fontSize: 17,
        color: colors.black
    },
    footer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 8
    },
    sparklesIcon: {
        fontSize: 16,
        color: "#c47c18",
        marginRight: 5
    },
    aiButton: {
        flexDirection: "row",
        paddingHorizontal: 15,
        paddingVertical: 7,
        borderRadius: 25,
        borderWidth: 1.5,
        alignItems: "center"
    },
    aiText: {
        fontSize: 16,
        fontWeight: "500"
    },
    footerIcon: {
        fontSize: 20
    },
    postImageView: {
        width: "100%",
        height: "50%",
        marginBottom: 10,
    },
    postImage: {
        width: "100%",
        height: "100%",
        resizeMode: "stretch",
        borderRadius: 15
    },
    icon: {
        position: "absolute",
        top: 8,
        right: 10,
        fontSize: 30,
        color: colors.white
    }
})
