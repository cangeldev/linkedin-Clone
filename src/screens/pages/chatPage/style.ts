import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    pageContainer: {
        flex: 1,
        backgroundColor: colors.white
    },
    backButton: {
        fontSize: 27,
        color: colors.darkGrey,
        marginHorizontal: 10
    },
    headerIcon: {
        fontSize: 20,
        color: "#3e3e3e",
        marginRight: 15
    },
    addIcon: {
        fontSize: 27,
        color: colors.darkBlue
    },
    microphoneIcon: {
        fontSize: 23,
        color: colors.darkGrey
    },
    sendIcon: {
        fontSize: 27,
        color: colors.darkBlue
    },
    headerContainer: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 15,
        elevation: 3,
        backgroundColor: "white"
    },
    usernameText: {
        flex: 1,
        color: colors.black,
        marginLeft: 15,
        fontSize: 17,
        fontWeight: "500"
    },
    profileContainer: {
        margin: 10,
    },
    profileImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
        marginHorizontal: 10
    },
    userNameText: {
        fontSize: 16,
        color: colors.black,
        fontWeight: "500"
    },
    userTitleText: {
        fontSize: 14,
        color: colors.grey
    },
    messageInputContainer: {
        position: 'absolute',
        bottom: 0,
        width: '100%'
    },
    textInputContainer: {
        flexDirection: "row",
        alignItems: "center",
        margin: 10
    },
    messageInput: {
        fontSize: 17,
        color: colors.black,
        backgroundColor: "#f3f2ee",
        flex: 1,
        height: 42,
        borderRadius: 6,
        marginHorizontal: 10,
        paddingLeft: 10
    },
    messageList: {
        marginBottom: 65
    }
})
