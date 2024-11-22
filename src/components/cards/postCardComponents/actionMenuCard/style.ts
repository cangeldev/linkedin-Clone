import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

const style = StyleSheet.create({
    cardContainer: {
        marginBottom: 5
    },
    iconContainer: {
        alignItems: 'center',
        marginTop: 5
    },
    image: {
        width: 20,
        height: 20,
        borderRadius: 20
    },
    iconLabel: {
        color: colors.darkGrey,
        fontSize: 12,
        fontWeight: '500'
    },
    icon: {
        color: colors.darkGrey,
        fontSize: 18
    },
    trueIcon: {
        color: colors.darkBlue,
        fontSize: 18
    },
    ideaLabel: {
        color: '#f2bd5b',
        fontSize: 12,
        fontWeight: '500'
    },
    heartLabel: {
        color: '#a44333',
        fontSize: 12,
        fontWeight: '500'
    },
    clappingLabel: {
        color: '#6dae52',
        fontSize: 12,
        fontWeight: '500'
    },
    supportLabel: {
        color: '#baa9d3',
        fontSize: 12,
        fontWeight: '500'
    },
    laughingLabel: {
        color: '#45adc3',
        fontSize: 12,
        fontWeight: '500'
    },
    likeLabel: {
        color: '#338ee5',
        fontSize: 12,
        fontWeight: '500'
    }
})
export default style
