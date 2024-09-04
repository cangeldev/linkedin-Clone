import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15
    },
    pictureContainer: {
        width: "96%",
        height: "29%",
        borderWidth: 1,
        borderColor: colors.lightGrey,
        backgroundColor: "white",
        elevation: 2,
        borderRadius: 10,
        paddingVertical: 25,
        alignSelf: "center"
    },
    cameraButton: {
        backgroundColor: "#f9fafc",
        borderRadius: 50,
        alignSelf: "center",
        borderWidth: 2,
        borderColor: colors.lightGrey,
        width: 80,
        height: 80
    },
    userName: {
        fontSize: 24,
        textAlign: "center",
        marginTop: 16,
        color: colors.darkGrey
    },
    userTitle: {
        fontSize: 16,
        textAlign: "center",
        fontWeight: "500",
        color: colors.black,
        marginTop: 7
    },
    footer: {
        flex: 1,
        justifyContent: "flex-end",
        marginBottom: 15
    },
    skipText: {
        alignSelf: "center",
        marginVertical: 10,
        fontSize: 20,
        fontWeight: "600",
        color: colors.black
    }
})
