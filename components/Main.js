import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Button, TextInput } from 'react-native-paper';
//import { green100, purple100, red100 } from 'react-native-paper/lib/typescript/styles/colors';

import results from '../utils/CalculatorIMC'

import ShowResults from '../components/PrintResults'
import InputUser from '../components/InputUser'

const resultsContext = React.createContext('resultsValue')


class Main extends React.Component
{
  constructor(props){
    super(props);
    this.state={
      userWeight: 0,
      userHeight: 0,
      userResults: "",
      actived: false
    }
  }
  
  handleClick = (event) => {
    event.preventDefault()
    {
      if(this.state.userWeight != 0 && this.state.userHeight != 0){
        this.setState({actived: true})
        this.resultsIMC()
      }
      else if(this.state.actived){
        this.resultsIMC()
      }
    }
  }

  resultsIMC()
  {
    var objectResult = results(this.state.userWeight, this.state.userHeight);
    this.setState({userResults: objectResult})
  }


  render(){
    return (
      <View style={styles.infoUserContainer}>
          <View style={styles.elementsUserContainer}>  
            <Text style={styles.headers}>Datos</Text>
            <View style={{margin: 10}}>
                <Text style={styles.textWeightHigh}>Peso</Text>
                <TextInput 
                    placeholder = "Introduzca su peso"
                    onChangeText ={(text) => this.setState({userWeight: text})}
                />
            </View>
            <View style={{margin: 10}}>
                <Text style={styles.textWeightHigh}>Altura</Text>
                <TextInput 
                  placeholder = "Introduzca su altura"
                  onChangeText ={(text) => this.setState({userHeight: text})}
                />     
            </View>        
        </View>
        <Button mode="contained" style={styles.elementsUserContainer} onPress={this.handleClick}>Calcular IMC</Button>
        <ShowResults userResults={this.state.userResults}/>
      </View>        
    );     
  }        
}


const styles = StyleSheet.create({

    infoUserContainer:{
        margin: 10,
        backgroundColor: 'white',
    },

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


export default Main;