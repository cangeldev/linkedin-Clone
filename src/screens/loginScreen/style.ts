import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
        paddingHorizontal: 15
    },
    logo: {
        width: 90,
        height: 45,
        resizeMode: 'contain'
    },
    title: {
        fontSize: 30,
        color: colors.black,
        fontWeight: '700',
        marginTop: 30
    },
    subtitle: {
        marginVertical: 20
    },
    highlightedText: {
        color: colors.darkBlue,
        fontWeight: '500'
    },
    separatorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.lightGrey
    },
    separatorText: {
        width: 60,
        textAlign: 'center',
        fontWeight: '600',
        color: colors.black
    },
    iconUnchecked: {
        fontSize: 24,
        color: colors.grey
    },
    iconChecked: {
        fontSize: 24,
        color: colors.darkGreen
    },
    rememberMeContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    rememberMeText: {
        fontSize: 15,
        color: colors.black
    },
    moreInfoText: {
        color: colors.darkBlue,
        fontWeight: '500',
        fontSize: 15,
        marginVertical: 15
    },
    forgotPasswordText: {
        color: colors.darkBlue,
        fontSize: 15,
        marginVertical: 15
    }
});
