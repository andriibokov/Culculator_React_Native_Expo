import React from 'react';
import { Text, TouchableOpacity } from 'react-native';



export default function List (props) {
    
    return props.state.button.map(b =>{
        return (
            <TouchableOpacity key={b.id} style = { b.styleBtn }  onPress={b.onPress}> 
                <Text style = {b.styleTitleBtn}>
                    {b.title}
                </Text >
            </TouchableOpacity>
            )
        })
    }

    