import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    parent: {
        flex: 1,
        backgroundColor: '#101010',
    },
    header: {
    	flex: 4,
    	flexDirection: 'row',
    },
    back: {
    	flex: 2,
    	justifyContent: 'center',
    },
    profile:{
    	flex: 13,
    },
    imageView: {
    	flex: 6,
    },
    nameView: {
    	flex: 2,
    	justifyContent: 'center',
    },
    stats: {
    	flex: 23,
    },
    common: {
    	flex: 1,
    	marginLeft: '5%',
    	marginRight: '5%',
    },
    commonHeadView: {
    	flex: 1,
    	justifyContent: 'center',
    },
    commonContentView: {
    	flex: 9,
    	justifyContent: 'center',
    },
    taal: {
    	flex: 1,
    	marginLeft: '5%',
    	marginRight: '5%',
    },
    taalHeadView: {
    	flex: 1,
    	justifyContent: 'center',
    },
    taalContentView: {
    	flex: 9,
    	justifyContent: 'center',
    },
    footer: {
    	flex: 6,
    },
    clear: {
    	flex: 10,
    	borderColor: '#FFFFFF',
    	borderWidth: 1,
    	borderRadius: 5,
    	height: '100%',
    	alignSelf: 'center',
    	justifyContent: 'center',
    },
    avatar: {
    	flex: 1,
    	alignSelf: 'center',
    	borderRadius: 5,
    	aspectRatio: 1,
    },
    info: {
        fontSize: 16,
        fontFamily: 'Montserrat-Regular',
        color: '#F0F0F0',
        textAlign: 'center'
    },
    name: {
    	fontSize: 18,
    	fontFamily: 'Montserrat-SemiBold',
    	color: '#F0F0F0',
    	textAlign: 'center',
    },
    commonHead: {
    	fontSize: 20,
    	fontFamily: 'Montserrat-SemiBold',
    	color: '#F0F0F0',
    },
    commonContent: {
    	flex: 3,
    	fontSize: 14,
    	fontFamily: 'Montserrat-Regular',
    	color: '#F0F0F0',
    },
    commonNumber: {
    	flex: 1,
    	fontSize: 14,
    	fontFamily: 'Montserrat-Regular',
    	color: '#F0F0F0',
    	textAlign: 'right',
    },
    taalHead: {
    	fontSize: 20,
    	fontFamily: 'Montserrat-SemiBold',
    	color: '#F0F0F0',
    },
    taalContent: {
    	flex: 3,
    	fontSize: 14,
    	fontFamily: 'Montserrat-Regular',
    	color: '#F0F0F0',
    },
    taalNumber: {
    	flex: 1,
    	fontSize: 14,
    	fontFamily: 'Montserrat-Regular',
    	color: '#F0F0F0',
    	textAlign: 'right',
    },
    clearText: {
    	fontSize: 16,
    	fontFamily: 'Montserrat-Medium',
    	color: '#FFFFFF',
    	textAlign: 'center',
    },
})