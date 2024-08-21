import colors from 'assets/colors/colors';
import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15,
    },
    logo: {
        width: 85,
        height: 40,
        resizeMode: 'contain',
        marginVertical: 10,
    },
    title: {
        color: colors.black,
        fontSize: 23,
        fontWeight: 'bold',
        marginVertical: 30,
    },
    email: {
        fontWeight: '600',
        color: colors.darkGrey,
    },
    editEmail: {
        fontWeight: '600',
        color: colors.darkGrey,
    },
    footer: {
        flex: 1,
        justifyContent: 'flex-end',
        marginBottom: 15,
    },
    resendCode: {
        alignSelf: 'center',
        marginVertical: 10,
        fontSize: 20,
        fontWeight: '600',
        color: colors.black,
    },
});
