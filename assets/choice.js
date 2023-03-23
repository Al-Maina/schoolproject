import { View } from 'react-native'
import React from 'react'
import Swiper from 'swiper'
import Rooms from './room';


const Choose = Rooms.map(item => ({
    label : item.Roomname,
    value: item.roomPrice,
    label: item.description
    
    }));
const choice = () => {
  return (
    <View>
<Swiper
activeDotColor = {'green'}
 alignItem = {'center'}  

item = {Choose}
onChangeItem = {item => console.log(item.label, item.value)}
innerHeight = {screenHeight * 0.5 }
innerWidth = {screenWidth * 0.5 }
style =  {{
  color: 'grey',
  alignItem :'column',
  marginTop : 20,
  marginBottom : 20,
  activeDotColor :'green',
 alignItem :'center'  

}}


/>
      
    </View>
  )
}

export default choice