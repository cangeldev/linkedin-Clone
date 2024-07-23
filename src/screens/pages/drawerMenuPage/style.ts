import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
   
    headerContainer: {
        paddingTop: "12%",
        paddingHorizontal: "9%"
    },
    profileImage: {
        width: '26%',
        height: '30%',
        resizeMode: 'cover'
    },
    name: {
        fontSize: 19,
        fontWeight: "bold",
        color: colors.black,
        marginTop: 10
    },
    goProfileText: {
        color: "#666666"
    },
    whoViewedText: {
        marginTop: 20,
        color: colors.grey,
        fontSize: 15
    },
    whoViewedCountText: {
        fontWeight: "bold",
        color: colors.black
    }
})