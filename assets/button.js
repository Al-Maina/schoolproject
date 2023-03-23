import React, { Component } from 'react'
import { Text, TouchableOpacity, Button } from 'react-native'
import { Button } from 'react-native'


const button =({title, onPress = () => {}}) => {

  
    return (
      <TouchableOpacity 
      activeOpacity={0.7}
      onPress = {onPress} 
      style = {{
        height: 25,
         width: 25, 
        backgroundColor: 'blue', 
        justifyContent: 'center',
         alignItems: 'center',
         marginVertical: 20}}>
            <Text style = {{color: color1, fontWeight:'bold', fontSize: 15}}>{title}</Text>
         </TouchableOpacity>
    )
  }


export default button
