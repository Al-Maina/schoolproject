import React, { Component } from 'react'
import { View } from 'react-native'
import { SliderBox } from 'react-native-image-slider-box';

const Images = [
  {
 Num : "001",
 hName: 'Chicke and rice',
 price: '200',
 image: require ('./images/chicken-rice.png'),
  },
  {
     Num : "002",
     hName: 'Milk',
     price: '70',
     image: require ('./images/milk-glass-mil.png'),
      },
      {
         Num : "003",
         hName: 'Coffee',
         price: '60',
         image: require ('./images/coffee.png'),
          },
          {
             Num : "004",
             hName: 'Burger',
             price: '80',
             image: require ('./images/burger.png'),
              },
              
 
 ]

const  Quick =()=> {
  render() 
    return (
      <View>
        <SliderBox
          images={Images.map((images,
             index) => (
            <Image
              source={images.source}
              style={{ width: images.width, height: images.height }}
              key={index}
            />
          ))}
          activeDotColor='green'
          inactiveDotColor='white'
          dotStyle={{
            width: 10,
            height: 10,
            borderRadius: 5,
          }}
        />
      </View>
    )
  }


export default Quick;
