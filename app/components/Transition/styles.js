import { StyleSheet } from 'react-native';
let color1 = '#202030';
let color2 = '#303040';
let color3 = '#404066';

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010',
    },
    header: {
    	flex: 4,
    	flexDirection: 'row',
    },
    profileView: {
    	flex: 2,
    	justifyContent: 'center',
    },
    profileButton: {
    	width: '75%',
    	height: '75%',
    	justifyContent: 'center',
    	alignSelf: 'center',
    },
    numberView: {
    	flex: 5,
    	justifyContent: 'center',
    },
    totalView: {
    	flex: 2,
    	justifyContent: 'center',
    },
    body: {
    	flex: 14,
    },
    question: {
    	flex: 3,
    	justifyContent: 'center',
    	marginLeft: '5%',
    	marginRight: '5%',
    },
    answers: {
    	flex: 2,
    	marginLeft: '5%',
    	marginRight: '5%',
    },
    a: {
    	flex: 1,
    	flexDirection: 'row',
    },
    answerLabelView: {
    	flex: 1,
    	justifyContent: 'center',
    },
    answerContentView: {
    	flex: 5,
    	justifyContent: 'center',
    },
    b: {
    	flex: 1,
    	flexDirection: 'row',
    },
    choice: {
    	flex: 14,
    },
    achoice: {
    	flex: 1,
    },
    bchoice: {
    	flex: 1,
    	backgroundColor: color1,
    },
    achoiceLabelView: {
    	flex: 1,
    	backgroundColor: color1,
    	borderTopLeftRadius: 10,
    	borderTopRightRadius: 10,
    },
    bchoiceLabelView: {
    	flex: 1,
    	backgroundColor: color2,
    	borderTopLeftRadius: 10,
    	borderTopRightRadius: 10,
    },
    aoptionsContainer: {
    	flex: 5,
    	flexDirection: 'row',
    	alignItems: 'center',
    	paddingRight: '5%',
    	backgroundColor: color1,
        borderTopRightRadius: 10,
    },
    boptionsContainer: {
    	flex: 5,
    	flexDirection: 'row',
    	alignItems: 'center',
    	paddingRight: '5%',
    	backgroundColor: color2,
        borderTopRightRadius: 10,
    },
    aoptionButton: {
    	flex: 1,
        marginLeft: '5%',
        height: '40%',
        backgroundColor: color3,
        borderRadius: 5,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: { width: 3, height: 3 },
    },
    boptionButton: {
    	flex: 1,
        marginLeft: '5%',
        height: '40%',
        backgroundColor: color3,
        borderRadius: 5,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOpacity: 1,
        shadowRadius: 3,
        shadowOffset: { width: 4, height: 4 },
    },
    profile: {
    	textAlign: 'center',
    	fontFamily: 'Montserrat-Regular',
    	fontSize: 14,
    	color: '#D0D0D0'
    },
    number: {
    	textAlign: 'center',
    	fontFamily: 'Montserrat-Bold',
    	fontSize: 20,
    	color: '#D0D0D0'
    },
    totalLabel: {
    	textAlign: 'center',
    	fontFamily: 'Montserrat-Regular',
    	fontSize: 14,
    	color: '#D0D0D0'
    },
    total: {
    	textAlign: 'center',
    	fontFamily: 'Montserrat-Regular',
    	fontSize: 16,
    	color: '#D0D0D0',
    },
    questionText: {
    	fontFamily: 'Montserrat-SemiBold',
    	fontSize: 18,
    	color: '#F0F0F0',
    },
    answerLabel: {
    	fontFamily: 'Montserrat-Medium',
    	fontSize: 24,
    	color: '#F0F0F0',
    },
    answerContent: {
    	fontFamily: 'Montserrat-Medium',
    	fontSize: 16,
    	color: '#F0F0F0',
    },
    choiceLabel: {
    	textAlign: 'center',
    	marginTop: '7%',
    	fontFamily: 'Montserrat-Medium',
    	fontSize: 24,
    	color: '#F0F0F0',
    },
    option: {
    	textAlign: 'center',
    	fontFamily: 'Montserrat-Regular',
    	fontSize: 14,
    	color: '#F0F0F0',
    },

    //Second Screen

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