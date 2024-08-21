import colors from 'assets/colors/colors'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({

    logo: {
        width: 85,
        height: 40,
        resizeMode: 'contain',
        marginVertical: 10
    },
    title: {
        color: colors.black,
        fontSize: 23,
        fontWeight: 'bold',
        marginVertical: 30
    }
})
