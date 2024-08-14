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
        alignItems: 'center'
    },
    separatorLine: {
        flex: 1,
        height: 1,
        backgroundColor: colors.grey
    },
    separatorText: {
        width: 60,
        textAlign: 'center',
        fontWeight: '600',
        color: colors.black
    }
})
