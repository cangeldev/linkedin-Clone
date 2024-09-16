import { StyleSheet } from 'react-native'
import colors from 'assets/colors/colors'

export default StyleSheet.create({
    card: {
        backgroundColor: colors.white,
        elevation: 2,
        borderRadius: 10,
        paddingVertical: 10,
        marginBottom: 5,
        alignItems: "center",
        width: 175,
        alignSelf: "center"
    },
    description: {
        minHeight: 36,
        overflow: 'hidden'
    },
    banner: {
        width: "100%",
        height: 60,
        backgroundColor: "yellow",
        position: "absolute",
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50
    },
    name: {
        color: colors.black,
        fontSize: 15,
        fontWeight: "500",
        marginVertical: 7
    },
    profileInfo: {
        color: '#888',
        marginVertical: 7
    },
    iconWrapper: {
        position: 'absolute',
        right: 10,
        top: 6
    },
    icon: {
        fontSize: 25
    }
})
