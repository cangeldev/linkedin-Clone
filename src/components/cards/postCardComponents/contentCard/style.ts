import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

const styles = StyleSheet.create({
    textContent: {
        color: colors.black,
        lineHeight: 20,
        paddingHorizontal: 10,
        marginBottom: 8
    },
    toggleText: {
        color: colors.grey,
        paddingHorizontal: 10,
    },
    contentImage: {
        width: "100%",
        height: 220
    }
})
export default styles
