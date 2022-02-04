import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
//import { green100, purple100, red100 } from 'react-native-paper/lib/typescript/styles/colors';

import Main from './components/Main'
import Footer from './components/Footer'
import Header from './components/Header'


class App extends Component{
    render(){
        return(
            <View style={styles.backgroundGlobal}>
                <Header />
                <Main />
                <Footer />                
            </View>
        );
    }
}


const styles = StyleSheet.create({

    backgroundGlobal:{
        height: '100%',
        backgroundColor: 'purple',
    },
});


export default App;
