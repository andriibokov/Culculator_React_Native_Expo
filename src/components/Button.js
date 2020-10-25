import React, { useState } from "react";
import  List from "../components/Map";
import { Text, View } from 'react-native';
import styles from '../styles_state';



export default function Button (props) {
    let state = {
        button: [
            {
                id:1, title: "AC", onPress: () => resetText(),
                styleBtn: [ styles.button, styles.btnGrey ], styleTitleBtn: [ styles.titleButton, styles.titleReset ]
            },
            {
                id:2, title: "+/-", onPress: () => checkMinus('-'),
                styleBtn: [ styles.button, styles.btnGrey ], styleTitleBtn: styles.titleButton,
            },
            {
                id:3, title: "%", onPress: () => interest(),
                styleBtn: [ styles.button, styles.btnGrey ], styleTitleBtn: styles.titleButton,
            },
            {
                id:4, title: transformIcon('&#x00F7'), onPress: () => pushOperation('/'),
                styleBtn: [ styles.button, styles.btnOrange ], styleTitleBtn: styles.titleButton,
            },
            {
                id:5, title: "mc", onPress: () => memory('mc'),
                styleBtn: styles.button, styleTitleBtn: [ styles.titleButton, styles.titleMemory]
            },
            {
                id:6, title: "mr", onPress: () => memory('mr'),
                styleBtn: styles.button, styleTitleBtn: [ styles.titleButton, styles.titleMemory]
            },
            {
                id:7, title: "m-", onPress: () => memory('m-'),
                styleBtn: styles.button, styleTitleBtn: [ styles.titleButton, styles.titleMemory]
            },
            {
                id:8, title: "m+", onPress: () => memory('m+'),
                styleBtn: [ styles.button, styles.btnOrange ], styleTitleBtn: [ styles.titleButton, styles.titleMemory]
            },
            {
                id:9, title: "7", onPress: () => pushNumber('7'),
                styleBtn: styles.button, styleTitleBtn: styles.titleButton,
            },
            {
                id:10, title: "8", onPress: () => pushNumber('8'),
                styleBtn: styles.button, styleTitleBtn: styles.titleButton,
            },
            {
                id:11, title: "9", onPress: () => pushNumber('9'),
                styleBtn: styles.button, styleTitleBtn: styles.titleButton,
            },
            {
                id:12, title: transformIcon('&#xD7;'), onPress: () => pushOperation('*'),
                styleBtn: [ styles.button, styles.btnOrange ], styleTitleBtn: [styles.titleButton, styles.titleOperation ]
            },
            {
                id:13, title: "4", onPress: () => pushNumber('4'),
                styleBtn: styles.button, styleTitleBtn: styles.titleButton,
            },
            {
                id:14, title: "5", onPress: () => pushNumber('5'),
                styleBtn: styles.button, styleTitleBtn: styles.titleButton,
            },
            {
                id:15, title: "6", onPress: () => pushNumber('6'),
                styleBtn: styles.button, styleTitleBtn: styles.titleButton,
            },
            {
                id:16, title: transformIcon('&#x2212'), onPress: () => pushOperation('-'),
                styleBtn: [ styles.button, styles.btnOrange ], styleTitleBtn: [styles.titleButton, styles.titleOperation ]
            },
            {
                id:17, title: "1", onPress: () => pushNumber('1'),
                styleBtn: styles.button, styleTitleBtn: styles.titleButton,
            },
            {
                id:18, title: "2", onPress: () => pushNumber('2'),
                styleBtn: styles.button, styleTitleBtn: styles.titleButton,
            },
            {
                id:19, title: "3", onPress: () => pushNumber('3'),
                styleBtn: styles.button, styleTitleBtn: styles.titleButton,
            },
            {
                id:20, title: transformIcon('&#x2b'), onPress: () => pushOperation('+'),
                styleBtn: [ styles.button, styles.btnOrange ], styleTitleBtn: [styles.titleButton, styles.titleOperation ]
            },
            {
                id:21, title: "0", onPress: () => pushNumber('0'),
                styleBtn: [styles.button, styles.btnZero], styleTitleBtn: styles.titleButton,
            },
            {
                id:22, title: ",", onPress: () => fractionText('.'),
                styleBtn: styles.button, styleTitleBtn: styles.titleButton,
            },
            {
                id:23, title: transformIcon('&#x3d'), onPress: () => pushOperation('='),
                styleBtn: [ styles.button, styles.btnOrange ], styleTitleBtn: [styles.titleButton, styles.titleOperation ]
            },
        ]
    }



    function transformIcon(icon){
        return String.fromCharCode(parseInt(icon.substr(3), 16));   
    }

    const [display, setDisplay] = useState();
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState("0");
    const [checkBoxOperation, setCheckBoxOperation] = useState(false);
    const [checkBoxNumber, setCheckBoxNumber] = useState(false);
    const [BoxOperation, setBoxOperation] = useState();
    const [BoxMemory, setBoxMemory] = useState(0);
    const [secondNumberLength, setSecondNumberLength] = useState(0);

    

    function resetText() {
        setSecondNumber("0")
        setFirstNumber(0)
        setDisplay()
        setSecondNumberLength(0)
        setCheckBoxOperation(false)
    }

    function pushNumber(params){
        setSecondNumberLength(secondNumber.length)
        if( secondNumberLength > "14" ) return false
        if(!checkBoxNumber){
            setSecondNumber(params)
        }else{
            if(secondNumber === "0"){
                setSecondNumber(`${secondNumber.slice(1)}${params}`)
            } else{
                setSecondNumber(`${secondNumber}${params}`)
            }
        }
        setCheckBoxNumber(true)
    }

    function pushOperation(params){
        let firstNumberBox = parseFloat(firstNumber)
        let secondNumberBox = parseFloat(secondNumber)
        let BoxParams
        if(params !== '=') {
            BoxParams = params; setBoxOperation(`${params}`)
        } else{
            BoxParams = ''
        }
        if(!checkBoxOperation && params !== '=') {
            setFirstNumber(secondNumberBox)
            setDisplay(`${secondNumberBox}${BoxParams}`)
            setCheckBoxOperation(true)
        } else {
            if(BoxOperation === '+'){
                setSecondNumber(firstNumberBox + secondNumberBox)
                setFirstNumber(firstNumberBox + secondNumberBox)
                setDisplay(`${firstNumberBox + secondNumberBox}${BoxParams}`)
            }
            if (BoxOperation === '-'){
                setSecondNumber(firstNumberBox - secondNumberBox)
                setFirstNumber(firstNumberBox - secondNumberBox)
                setDisplay(`${firstNumberBox - secondNumberBox}${BoxParams}`)
            }
            if(BoxOperation === '*'){
                setSecondNumber(firstNumberBox * secondNumberBox)
                setFirstNumber(firstNumberBox * secondNumberBox)
                setDisplay(`${firstNumberBox * secondNumberBox}${BoxParams}`)
            }
            if (BoxOperation === '/'){
                setSecondNumber(firstNumberBox / secondNumberBox)
                setFirstNumber(firstNumberBox / secondNumberBox)
                setDisplay(`${firstNumberBox / secondNumberBox}${BoxParams}`)
            }
            if (params === '='){
                setCheckBoxOperation(false)
            }
        }
        setCheckBoxNumber(false)
    }

    function fractionText(params){
        if(!checkBoxNumber){
            setSecondNumber(`0${params}`)
        } else if( secondNumber.indexOf('.') === -1){
            setSecondNumber(`${secondNumber}${params}`)
        }
    }

    function interest(){
        setSecondNumber((parseFloat(firstNumber)/100)* parseFloat(secondNumber))
    }

    function checkMinus(){
        if(secondNumber === "0") return false
        secondNumber.slice(0, 1) === '-' ? setSecondNumber(secondNumber.slice(1)) : setSecondNumber(`-${secondNumber}`)
    }
    
    function memory(props){
        if(props === 'm+'){
            setBoxMemory( parseFloat(BoxMemory) + parseFloat(secondNumber))
        }
        if(props === 'm-'){
            setBoxMemory( parseFloat(BoxMemory) - parseFloat(secondNumber))
        }
        if(props === 'mc'){
            setBoxMemory(0)
        }
        if(props === 'mr'){
            setSecondNumber(BoxMemory)
        }
    }
    

    return (
        <View>
            <Text style={styles.displayMath}>{ display }</Text>
            <Text style={[styles.display, (secondNumberLength < 8) ? styles.displayFontSizeMax : styles.displayFontSizeMini]}>{ secondNumber }</Text>
            <View style={styles.buttonBox}>
                <List state={state}/>
            </View>
        </View>
    );
}