import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
//import { green100, purple100, red100 } from 'react-native-paper/lib/typescript/styles/colors';


class InputUser extends React.Component
{
  constructor(props){
    super(props);
    this.setState={
      peso: 0,
      altura: 0
    }
  }

  render(){
    return (
        <View style={styles.elementsUserContainer}>  
            <Text style={styles.headers}>Datos</Text>
            <View style={{margin: 10}}>
                <Text style={styles.textWeightHigh}>Peso</Text>
                <TextInput 
                    placeholder = "Introduzca su peso"
                    onChangeText ={(text) => this.setState({peso: text})}
                />
            </View>
            <View style={{margin: 10}}>
                <Text style={styles.textWeightHigh}>Altura</Text>
                <TextInput 
                   placeholder = "Introduzca su altura"
                   onChangeText ={(text) => this.setState({altura: text})}
                />     
            </View>        
        </View>        
    ); 
  }
}


const styles = StyleSheet.create({

    elementsUserContainer:{
        margin: 10,
    },

    headers:{
        fontSize: 22, 
        margin: 10, 
        color: 'red'
    },

    textWeightHigh:{
        color: 'blue',
        fontWeight: 'bold',
    }
});


export default InputUser;