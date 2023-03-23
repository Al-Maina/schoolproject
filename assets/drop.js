import { View, Navigation,} from 'react-native'
import React from 'react'
import DropDownPicker from 'react-native-dropdown-picker';
import food from './test';
import { Navigation } from 'swiper';



const menu = food.map(item => ({
    label : item.foodName,
    Value:item.foodprice,
    image: item.image
  }));


const drop = () => {
  return (
    
    <View>
        
      <Navigation>
<DropDownPicker
TouchableOpacity

  
defaultNull 
onSelectedItemsChange = {onSelectedItemsChange}
placeholder='pick from our todays menu'
FontAwesome name="search-plus" size={24} color="black"
multiple = {true}
setValue = {TextTrackList}

min = {0}
max = {5}
submitButtonText = 'submit'
item = {menu}
defaultValue = {selectedValue}
onChangeItem = {item => console.log(item.label, item.value)}


/>
 </Navigation>
      
    </View>
  )
}

export default drop