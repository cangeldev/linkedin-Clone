// style.js
import { StyleSheet } from 'react-native';
import colors from 'assets/colors/colors';

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 5
    },
    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 22.5 // Profil resmini daha yuvarlak yapmak için
    },
    infoContainer: {
        flex: 1,
        marginHorizontal: 5
    },
    nameText: {
        fontWeight: '600',
        color: colors.black,
        fontSize: 15
    },
    textDescription: {
        fontSize: 13,
        lineHeight: 15
    },
    footerContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    followButton: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        marginLeft: 10
    },
    plusIcon: {
        fontSize: 23,
        color: "#0e67c1"
    },
    followButtonText: {
        fontSize: 15,
        color: "#0e67c1",
        fontWeight: '600'
    }
});

export default styles;