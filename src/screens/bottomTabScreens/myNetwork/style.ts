import colors from "assets/colors/colors";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white
    },
    tabBar: {
        backgroundColor: 'white'
    },
    label: {
        textTransform: 'none',
        fontWeight:"600",
        fontSize:16
    },
    indicator: {
        backgroundColor: 'green'
    },
})