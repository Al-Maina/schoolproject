import React from 'react';
import { Navigator, SafeAreaView, View, FlatList } from 'react-native';
import Swiper from 'swiper';
import Quick from './assets/carousel.js';
import Rooms from './assets/room.js';
import DetailsLogin from './assets/Registration.js';
import Choose from './assets/choice.js';
import InputCustom from './assets/input.js';
import Beuty from './assets/beuty.js';
import Test from './assets/test.js';

const App = () => {
  return (
    <SafeAreaView>
      <>
      
      </>
     
    </SafeAreaView>
  );
};

export default App;

    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
   
  
    
    
    
    
      /*
<SafeAreaView>
  <Stack.Navigator  >
    <Stack.Screen 
    name = 'DetailsLogin'
    component = {DetailsLogin}/>
  </Stack.Navigator>

<Swiper>
<Text style = {{Colors: color1, fontWeight: 'bold'}}>Quick menu</Text>
<Stack.Screen
name = "Carousel"
component = {Carousel}

paging
style= {{
innerHeight: 0.25 * screenHeight,
innerWidth: 0.25 * screenWidth,
backgroundColor: colorfade,
alignItem: 'row',
defaultValue: ('none')
}} />
</Swiper>

<Navigator style= {{color: 'black',
innernaHeight: 0.5 * screenHeight,
innerWidth : 0.5 * screenWidth,
}}>
  
<DetailsLogin 
paging
/>
</Navigator>
  <View style = {style.drop}>

<DropDownPicker
TouchableOpacity
searchable = {true}
searchPlaceholder = "Have a taste of our todays menu!"
FontAwesome name="search-plus" size={24} color="black" 
setValue={TextTrackList}

item = {menu}
defaultValue = {selectedValue}
onChangeItem = {item => selectedValue (item.Value)}

/>
</View>
<Swiper>

<Stack.screen
style= {{color:'grey'}}
name = {room}
Component = {room}
item = {Choice}

onChangeItem = {item => selectedValue (item.Value)}
innerHeight = {screenHeight * 0.5 }
innerWidth = {screenWidth * 0.5 }
styles =  {{
  color: 'grey',
  alignItem :'column',
  marginTop : 20,
  marginBottom : 20

}}

/>

drop:{
  alignItem: 'center',
  innerHeight: 0.3 * screenHeight,
  innerWidth: 0.3 * screenWidth,
  color : 'golden'



</Swiper>
</SafeAreaView>
*/


/*
const Choice = Rooms.map(item => ({
label1 : item.Roomname,
value1: item.roomPrice,
label2: item.description

}));

const menu = food.map(item => ({
  label : item.foodName,
  Value :item.Foodprice,
  image : item.image
}));*/