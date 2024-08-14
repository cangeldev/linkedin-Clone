import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 190,
        paddingHorizontal: 15
    },
    logo: {
        width: 220,
        height: 45,
        resizeMode: 'contain',
        alignSelf: 'center'
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        marginVertical: 45,
        color: colors.black,
        paddingHorizontal: 25,
        fontWeight: '300'
    },
    description: {
        fontSize: 12,
        color: colors.grey,
        marginTop: 50,
        marginBottom: 15,
        textAlign: 'left'
    },
    linkText: {
        color: colors.darkBlue,
        fontWeight: '500'
    },
    loginPrompt: {
        alignSelf: 'center',
        color: colors.darkBlue,
        fontSize: 19,
        fontWeight: '600',
        marginTop: 20
    }
})
