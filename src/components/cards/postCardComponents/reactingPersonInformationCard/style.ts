import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

const styles = StyleSheet.create({
    cardContainer: {
        paddingHorizontal: 10,
        paddingVertical: 5
    },
    contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10
    },
    reactionImage: {
        width: 30,
        height: 30,
        borderRadius: 15
    },
    textContainer: {
        flex: 1,
        marginHorizontal: 10
    },
    reactionName: {
        color: colors.black,
        fontWeight: '500'
    },
    reactionDescription: {
        color: colors.grey
    },
    iconContainer: {
        flexDirection: 'row'
    },
    icon: {
        fontSize: 21,
        color: colors.darkGrey,
        marginLeft: 6
    }
})

export default styles
