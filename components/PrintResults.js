import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
//import { green100, purple100, red100 } from 'react-native-paper/lib/typescript/styles/colors';


class ShowResults extends React.Component
{
  constructor(props){
    super(props);
    this.state={}
  }

  resultsColor(result)
  {
      //console.log(result)
      //console.log(this.props.userResults.imc)

      if(result < 18.5){
          return styles.resultsTextMedium
      }
      else if(result >= 18.5 && result < 27){
          return styles.resultsTextLow
      }
      else if(result >= 27 && result < 39.9){
          return styles.resultsTextMedium
      }
      else if(result >= 30){
          return styles.resultsTextHigh
      }
  }

  render(){
    return(
      <View style={styles.resultsContainer}>
          <Text style={styles.headers}>Resultados</Text>
          <View style={styles.dataContainer}>
              <Text style={this.resultsColor(this.props.userResults.userImc)}>{this.props.userResults != "" ? this.props.userResults.userImc : ""}</Text>
              <Text style={this.resultsColor(this.props.userResults.userImc)}>{this.props.userResults != "" ? this.props.userResults.status : ""}</Text>
          </View>
      </View>
    );
  }    
}


const styles = StyleSheet.create({

    headers:{
        fontSize: 22, 
        color: 'red',
        marginLeft: 10
    },

    resultsContainer:{
        height: 150,
        margin: 10,
    },

    dataContainer:{
      marginTop: 'auto',
      marginBottom: 'auto'
    },

    resultsTextLow:{
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center',
        color: 'green',
        fontSize: 20,
        fontWeight: 'bold',
    },

    resultsTextMedium:{
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center',
        color: 'orange',
        fontSize: 20,
        fontWeight: 'bold',
    },

    resultsTextHigh:{
        marginTop: 'auto',
        marginBottom: 'auto',
        textAlign: 'center',
        color: 'red',
        fontSize: 20,
        fontWeight: 'bold',
    },
});


export default ShowResults;