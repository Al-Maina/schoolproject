import React from 'react'
import { Button, Keyboard, SafeAreaView, ScrollView, Text, View,Alert,Input, Colors } from 'react-native'
// import Beuty from './beuty.js';
// import Loader from './loader.js';
import InputCustom from './input.js';
// import { Colors} from 'react-native/Libraries/NewAppScreen';






const DetailsLogin = ({navigation}) => {
const [input, setInputs] = React.useState({
  Fullname: '',
  email: '',
  phonenumber : '',
  password: '',
});
const [error, setErrors] = React.useState({});
const [loading, setLoading] = React.useState(true)
const Validate = () => {
Keyboard.dismiss();
let valid = true;
if (!input.email){
handleError('please input email', 'email');
valid = false;

} else if (!input.email.match(/\S+@\S+\.\S+/)){
handleError('please input valid email ', 'email');
}
if (!input.Fullname){
handleError('please input full name', 'fullname');
}
if (!input.phonenumber){
handleError('please input phone number', 'phonenumber');
}
if (!input.password){
handleError('please input password', 'password');
} else if (input.password.length<5){
  handleError('your password should have at least 5 characters', 'password');
}
if (valid){
register();
}
};
const register = () => {
setLoading  (true);
setTimeout(() => {
setLoading (false);
try{

} catch(error){
Alert.alert("error", "something went wrong")
}
}, 2000);

};
const handleOnChange = (text, input) => {
  setInputs((prevState )=> ({...prevState,[input]: text}))
};
const handleError = (errorMessage, input)=> {
  setErrors((prevState => ({...prevState,[input]: errorMessage})))
}
  console.log(input)
    return (
      



 < SafeAreaView style ={{backgroundColor: Colors.Colors, flex: 1}}>
  <>
  
  
  </>
  
 <Loader visible = {loading} />
  <ScrollView contentContainerStyle ={{
paddingTop: 50,
paddingHorizontal:20,
  }}>

<Text style = {{Color: "grey",fontSize: 20,fontWeight:"100"}}>register</Text>
<Text style = {{Color: 'grey' ,fontSize: 20,fontWeight:"100"}}>enter your details</Text>

<View style={{marginVertical: 20,}}>

<Input 
 placeholder = "Enter your email"
 /*iconName MaterialCommunityIcons name="email-check-outline" size={24} color="black" */
 label = "Email"
 error= {error.email}
 onFocus ={() => {
  handleError(null, "email")
 }}
 onChangeText = {(text)=> handleOnChange(text,"email")}
 />
 <Input 
 placeholder = "Enter your password"
 /*iconName Feather name="eye-off" size={24} color="black" */
 label = "password"
 password 
 error= {error.password}
 onFocus ={() => {
  handleError(null, "password")
 }}
 onChangeText = {(text)=> handleOnChange(text,"password")}
 />
  <Input 
 placeholder = "Enter your full names"
 /*iconName AntDesign name="book" size={24} color="black" */
 label = "Full name"
 error= {error.Fullname}
 onFocus ={() => {
  handleError(null, "fullname")
 }}
 onChangeText = {(text)=> handleOnChange(text,"fullname")}
 />
  <Input
  keyboardType = 'numeric'
 placeholder = "Enter your phone number"
 /*iconName Feather name="phone" size={24} color="black" */
 label = "phone number"
 error= {error.phonenumber}
 onFocus ={() => {
  handleError(null, "phone number")
 }}
 onChangeText = {(text)=> handleOnChange(text,"phone number")}
 />
 <Button title='register' onPress={Validate}/>
 <Text 
 onPress= {()=> navigation.navigate('loginScreen')}
 style ={{
  color:'black', 
 alignText:'center', 
 fonttSize: 15, 
 fontWeight: "bold"}} >Already have an account? Log in</Text>
 <>
 <Loader/>
 <Beuty/>
 <InputCustom/>

 </>




</View>
  </ScrollView>
  
</SafeAreaView>

    )
}
    
 

export default DetailsLogin;