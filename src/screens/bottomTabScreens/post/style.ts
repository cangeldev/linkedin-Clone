import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    modalContainer: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 13
    },
    modalHeader: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 7,
    },
    closeIcon: {
        fontSize: 25,
        color: colors.black,
        marginRight: 20
    },
    userProfileImage: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: 10
    },
    headerTitle: {
        textAlignVertical: "center", 
        fontSize: 16, 
        fontWeight: "500", 
        color: colors.darkGrey, 
        flex: 1
    },
    dropdownIcon: {
        fontSize: 12, 
        color: colors.black 
    },
    timeIcon: { 
        fontSize: 19, 
        marginRight: 10, 
        color: colors.black 
    },
    postButtonText: { 
        color: "#a3a3a3", 
        paddingVertical: 5, 
        paddingHorizontal: 12, 
        backgroundColor: colors.lightGrey, 
        borderRadius: 25, 
        fontSize: 16, 
        fontWeight: "500" 
    }
})
