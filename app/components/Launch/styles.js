import { StyleSheet, Dimensions } from 'react-native';
const dimensions = Dimensions.get('window');
const height = dimensions.height/4;
const width = dimensions.width;
const color = "#0A0134";
const textcolor = "#D0D0D0";
const textsize = 0.0315*width;
const textsize2 = 0.033*width;
const headsize = 21;

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
    options: {
        flex: 7, 
        width: '60%',
        alignSelf: 'center',
    },
    why: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 5,
        justifyContent: 'center',
    },
    whyText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        textAlign: 'center',
        color: textcolor
    },
    whyScore: {
        flex: 1,
        borderWidth: 1,
        borderColor: "#FFFFFF",
        borderRadius: 5,
        justifyContent: 'center',
    },
    whyScoreText: {
        fontFamily: 'Montserrat-Medium',
        fontSize: 14,
        textAlign: 'center',
        color: textcolor,
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
    modalWhyExist: {
        flex: 3, 
        backgroundColor: "#101010", 
        marginLeft: "5%", 
        marginRight: "5%", 
        borderRadius: 15
    },
    modalWhyExistHead: {
        fontFamily: 'Montserrat-SemiBold', 
        fontSize: headsize, 
        margin: '5%', 
        color: '#FFFFFF'
    },
    modalWhyExistText: {
        fontFamily: 'Montserrat-Regular', 
        fontSize: textsize2, 
        margin: '5%', 
        marginTop: '3%', 
        color: '#D0D0D0'
    },
    modalWhyExistOKView: {
        flex: 4, 
        borderTopWidth: 0.2, 
        borderColor: '#D0D0D0'
    },  
    modalWhyExistOKText: {
        fontFamily: 'Montserrat-Regular', 
        fontSize: 18, 
        textAlign: 'center', 
        color: '#FFFFFF'
    },
    modalWhy: {
        flex: 4, 
        backgroundColor: "#101010", 
        marginLeft: "5%", 
        marginRight: "5%", 
        borderRadius: 15
    },
    modalWhyOKView: {
        flex: 5, 
        borderTopWidth: 0.2, 
        borderColor: '#909090'
    },  
    infoTable: {
        flex: 4,
        flexDirection: 'row',
        alignSelf: 'center'
    },
    infoTableText: {
        marginBottom: '10%',
        fontFamily: 'Montserrat-Medium',
        fontSize: textsize,
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
        fontSize: textsize,
        color: textcolor
    },
    infoTableScore: {
        marginLeft: '4.5%',
        fontFamily: 'Montserrat-Medium',
        fontSize: textsize,
        color: textcolor
    },
    infoTableScoreN1: {
        marginLeft: '4.8%',
        fontFamily: 'Montserrat-Medium',
        fontSize: textsize,
        color: textcolor
    },
    infoTableScoreN2: {
        marginLeft: '4.9%',
        fontFamily: 'Montserrat-Medium',
        fontSize: textsize,
        color: textcolor
    },
    infoTableScoreN3: {
        marginLeft: '5.8%',
        fontFamily: 'Montserrat-Medium',
        fontSize: textsize,
        color: textcolor
    },
    infoTableScoreN4: {
        marginLeft: '4.8%',
        fontFamily: 'Montserrat-Medium',
        fontSize: textsize,
        color: textcolor
    },
    infoTableScoreN5: {
        marginLeft: '3.7%',
        fontFamily: 'Montserrat-Medium',
        fontSize: textsize,
        color: textcolor
    },
    infoTableScoreN6: {
        marginLeft: '3%',
        fontFamily: 'Montserrat-Medium',
        fontSize: textsize,
        color: textcolor
    },
})