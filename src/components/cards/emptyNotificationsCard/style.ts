import colors from 'assets/colors/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 130,
        height: 130,
        marginBottom: 15
    },
    notification: {
        fontSize: 23,
        color: colors.darkGrey
    },
    notificationInfo: {
        fontSize: 15,
        marginVertical: 15,
        color: colors.grey,
        textAlign: "center"
    }
})
