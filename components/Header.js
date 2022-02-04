import React, { Component } from 'react';
import { Text } from 'react-native';


class Head extends React.Component
{
    render(){
        return(
            <Text style={{fontSize: 25, margin: 10, color: 'red', textAlign: 'center'}}>Calculadora IMC</Text>
        );
    }    
}


export default Head;