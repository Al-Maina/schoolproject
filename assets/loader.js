import { View,
   StyleSheet,
ActivityIndicator,
useWindowDimensions,
Text
} from 'react-native';
import React from 'react'

const loader = ({visible = true}) => {
  const {height, width} = useWindowDimensions();
  return (
   visible && (<View style = {[style.cont, {height,width}]}>
    <View style = {style.loader}>
    <ActivityIndicator size = 'small' color = "golden"/>
    <Text style= {{marginRight: 10, fontSize: 16, }}> Loading...</Text>
   </View>
   </View>
   )
  );
};
const style = StyleSheet.create({
cont: {
    zIndex: 10 ,
  backgroundColor: 'rgba(0,0,0,)',
  justifyContent: 'center',
  alignItems: 'center',
  position: 'absolute'
},

loader:{
height: 70,
color: 'white',
marginHorizontal: 5,
flexDirection: 'row',
alignItems: 'center',
paddingHorizontal: 20


}

})



export default loader;