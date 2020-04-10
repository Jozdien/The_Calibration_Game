import { StyleSheet } from 'react-native';
let color1 = '#202030';
let color2 = '#303040';
let color3 = '#404066';

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010',
    },
    secondheader: {
        flex: 4,
        flexDirection: 'row',
    },
    secondprofileView: {
        flex: 2,
        justifyContent: 'center',
    },
    secondprofileButton: {
        width: '75%',
        height: '75%',
        justifyContent: 'center',
        alignSelf: 'center',
    },
    secondnumberView: {
        flex: 5,
        justifyContent: 'center',
    },
    secondtotalView: {
        flex: 2,
        justifyContent: 'center',
    },
    secondBody: {
        flex: 25
    },
    secondBodyTextView: {
        flex: 3,
        justifyContent: 'center',
        marginLeft: '5%',
        marginRight: '5%',
    },
    secondBodyStatsView: {
        flex: 4,
        flexDirection: 'row',
    },
    secondTotal: {
        flex: 1,
        justifyContent: 'center',
    },
    secondStatsBorder: {
        flex: 2, 
        borderWidth: 3,
        borderColor: '#404040',
        borderRadius: 5, 
        width: '80%', 
        alignSelf: 'center'
    },
    secondAverage: {
        flex: 1,
        justifyContent: 'center',
    },
    secondAverageLast: {
        flex: 1,
        justifyContent: 'center',
    },
    secondFooter: {
        flex: 4,
        justifyContent: 'center',
    },
    secondNext: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: '30%',
        height: '50%',
        borderRadius: 5,
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 5,
        shadowOffset: { width: 5, height: 5 },
        backgroundColor: '#303030',
    },
    secondprofile: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#D0D0D0'
    },
    secondnumber: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        color: '#D0D0D0'
    },
    secondtotalLabel: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 14,
        color: '#D0D0D0'
    },
    secondtotal: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: '#D0D0D0'
    },
    secondBodyText: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 18,
        color: '#F0F0F0',
    },
    secondLabel: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: '#F0F0F0'
    },
    secondText: {
        textAlign: 'center',
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 20,
        color: '#F0F0F0'
    },
    secondNextText: {
        textAlign: 'center',
        fontFamily: 'Montserrat-Regular',
        fontSize: 16,
        color: '#F0F0F0'
    },
})