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
    button: {
        borderRadius: 25,
        paddingHorizontal: 12,
        paddingVertical: 5,
        borderWidth: 1,
        borderColor: colors.darkBlue
    },
    buttonText: {
        color: colors.darkBlue,
        fontWeight: '700',
        fontSize: 16
    },
    notification: {
        fontSize: 23,
        color: colors.darkGrey
    },
    notificationInfo: {
        fontSize: 15,
        marginVertical: 15,
        color: colors.grey
    }
})
