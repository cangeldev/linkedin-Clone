import colors from 'assets/colors/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15
    },
    email: {
        fontWeight: '600',
        color: colors.darkGrey
    },
    editEmail: {
        fontWeight: '600',
        color: colors.darkGrey
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15
    },
    resendCode: {
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 20,
        fontWeight: '600',
        color: colors.black
    },
    info: {
        marginTop: -20,
        marginBottom: 20
    }
})
