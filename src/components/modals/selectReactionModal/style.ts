import colors from "assets/colors/colors"
import { StyleSheet } from "react-native"

export default StyleSheet.create({
    reactionImage: {
        width: 35,
        height: 35,
        borderRadius: 30
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        justifyContent: 'flex-end'
    },
    reactionContainer: {
        position: 'absolute',
        width: "100%"
    },
    contentContainerStyle: {
        justifyContent: 'space-between',
        flex: 1,
        marginHorizontal: 20,
        paddingVertical: 10,
    },
    innerContainer: {
        backgroundColor: colors.white,
        elevation: 10,
        borderRadius: 50,
        marginHorizontal: 15
    }
})