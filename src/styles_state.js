import { StyleSheet, Dimensions } from 'react-native';



const deviceWidth = Dimensions.get('window').width;
const deviceHeight = Dimensions.get('window').height;
const buttonWidth = deviceWidth / 4 -20;
const styles = StyleSheet.create({
    buttonBox:{
        flexDirection: "row",
        flexWrap: "wrap",
        width: deviceWidth,
        justifyContent: "space-around"
    },
    display: {
      color: '#fff',
      fontSize: 75,
      textAlign: 'right',
      margin: 2,
      height: 85
    },
    displayFontSizeMax: {
        fontSize: 75
    },
    displayFontSizeMini: {
        fontSize: 40
    },
    displayMath:{
        color: '#fff',
        fontSize: 25,
        textAlign: 'right',
        margin: 2,
        height: 35
    },
    button:{
        backgroundColor: '#333333',
        width: buttonWidth,
        height: buttonWidth,
        borderRadius: buttonWidth,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        margin: 4,
    },
    titleButton: {
        fontWeight: '500',
        fontSize: 38,
        color: '#fff'
    },
    btnZero: {
        width: buttonWidth*2+16,
        alignItems: 'flex-start',
        paddingLeft: 35
    },
    btnGrey: {
        backgroundColor: '#a5a5a5'
    },
    btnOrange: {
        backgroundColor: '#ff9a0a'
    },
    titleMemory: {
        fontSize: 25
    },
    titleOperation: {
        fontSize: 40
    },
    titleReset: {
        fontSize: 30
    }
});

export default styles