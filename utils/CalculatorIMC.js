import React, { Component } from 'react';
//import { green100, purple100, red100 } from 'react-native-paper/lib/typescript/styles/colors';

// IMC Classification
const data = [
    {userImc: "", imc: 18.5, status: "Peso Insuficiente"},
    {userImc: "", imc: 24.9, status: "Peso Normal"},
    {userImc: "", imc: 26.9, status: "Sobrepeso grado I"},
    {userImc: "", imc: 29.9, status: "Pre-Obesidad"},
    {userImc: "", imc: 34.9, status: "Obesidad grado I"},
    {userImc: "", imc: 39.9, status: "Obesidad grado II"},
    {userImc: "", imc: 49.9, status: "Obesidad Mórbida"},
    {userImc: "", imc: 50, status: "Obesidad Extrema"}
]


function results(weight, high)
{
    let result = calcIMC(weight, high)
    let objectResult = compareResults(result);
    
    return objectResult
}


function calcIMC(weight, high)
{
    return weight / (Math.pow(high, 2));
}


function compareResults(result)
{
  
    if(result < data[0].imc){
        data[0].userImc = result.toFixed(2);
        return data[0]
    }
    else if(result >= data[0].imc && result <= data[1].imc){
        data[1].userImc = result.toFixed(2);
        return data[1]
    }
    else if(result > data[1].imc && result <= data[2].imc){
        data[2].userImc = result.toFixed(2);
        return data[2]
    }
    else if(result > data[2].imc && result <= data[3].imc){
        data[3].userImc = result.toFixed(2);
        return data[3]
    }
    else if(result > data[3].imc && result <= data[4].imc){
        data[4].userImc = result.toFixed(2);
        return data[4]
    }
    else if(result > data[4].imc && result <= data[5].imc){
        data[5].userImc = result.toFixed(2);
        return data[5]
    }
    else if(result > data[5].imc && result <= data[6].imc){
        data[6].userImc = result.toFixed(2);
        return data[6]
    }
    else if(result >= data[7].imc){
        data[7].userImc = result.toFixed(2);
        return data[7]
    }
}


export default results;