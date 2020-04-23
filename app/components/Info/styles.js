import { StyleSheet, Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const height = dimensions.height/4;
const width = dimensions.width;
const color = "#0A0134";
const textcolor = "#FFFFFF";

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#000000'
    },
    rectangle: {
        width: width,
        height: "24%",
        backgroundColor: color
    },
    triangle: {
        borderRightWidth: width,
        borderTopWidth: height,
        borderTopColor: 'transparent'
    },
    headView: {
        flex: 1,
        justifyContent: 'center',
    },
    head: {
        color: "#D0D0D0",
        alignSelf: 'center',
        marginTop: "-115%",
        fontSize: 24,
        fontFamily: 'Montserrat-SemiBold'
    },
    imageContainer: {
        flex: 2,
        flexDirection: 'row'
    },
    hal: {
        flex: 1,
        alignSelf: 'center',
        marginTop: '-70%',
        aspectRatio: 1,
    },
    nextView: {
        flex: 1,
        justifyContent: 'center',
    },
    next: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '-10%',
        backgroundColor: '#000005',
        borderRadius: 5,
        width: '40%',
        height: '70%',
    },
    nextText: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        alignSelf: 'center',
        color: '#A0A0A0'
    },
    info: {
        flex: 12,
        justifyContent: 'center',
        marginLeft: '10%',
        marginRight: '10%',
    },
    infoHead: {
        marginBottom: '8%',
        fontFamily: 'Montserrat-Bold',
        fontSize: 20,
        alignSelf: 'center',
        textAlign: 'center',
    },
    infoTable: {
        flex: 1,
        flexDirection: 'row',
        marginLeft: '-7%',
    },
    infoTableText: {
        marginBottom: '4.5%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor
    },
    infoTableScoreView: {
        marginBottom: '2%',
        marginRight: '-7%',
        flexDirection: 'row'
    },
    infoTableNumber: {
        marginLeft: '2%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor
    },
    infoTableScore: {
        marginLeft: '4.5%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor
    },
    infoTableScoreN1: {
        marginLeft: '4.8%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor
    },
    infoTableScoreN2: {
        marginLeft: '4.9%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor
    },
    infoTableScoreN3: {
        marginLeft: '5.8%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor
    },
    infoTableScoreN4: {
        marginLeft: '4.8%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor
    },
    infoTableScoreN5: {
        marginLeft: '3.7%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor
    },
    infoTableScoreN6: {
        marginLeft: '3%',
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor
    },
    options: {
        flex: 7, 
    },
    optionsView: {
        flexDirection: 'row',
        marginLeft: "5%",
        marginRight: '5%',
    },
    why: {
        flex: 1,
        justifyContent: 'center',
    },
    whyText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor
    },
    whyTextActive: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        color: textcolor
    },
    whyScore: {
        flex: 1,
        height: '100%',
        justifyContent: 'center',
    },
    whyScoreText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 13,
        color: textcolor,
        alignSelf: 'flex-end',
    },
    whyScoreTextActive: {
        fontFamily: 'Montserrat-SemiBold',
        fontSize: 13,
        color: textcolor,
        alignSelf: 'flex-end',
    },
    optionsTextView: {
        marginTop: '-2%',
        marginLeft: '5%',
        marginRight: '5%',
    },
    optionsText: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 12,
        color: textcolor,
        textAlign: 'justify'
    },
    super: {
        fontFamily: 'Montserrat-Regular', 
        color: textcolor, 
        fontSize: 9, 
        lineHeight: 10
    },
    playView: {
        flex: 2.8,
        justifyContent: 'center',
    },
    play: {
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: '-10%',
        backgroundColor: '#000005',
        borderRadius: 5,
        width: '40%',
        height: '70%',
    },
    playText: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        alignSelf: 'center',
        color: '#A0A0A0'
    },
})