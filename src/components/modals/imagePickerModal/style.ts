import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    container: {
        backgroundColor: 'rgba(0,0,0,0.5)',
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingHorizontal: 20
    },
    contentView: {
        backgroundColor: colors.white,
        width: "100%",
        borderRadius: 10,
        padding: 15
    },
    text: {
        fontSize: 16,
        color: colors.black,
        padding: 10        
    }
})