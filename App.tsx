import React, { useState } from 'react'
import { View , Text, StyleSheet, ScrollView, RefreshControl, SectionList, TextInput, Button, Alert, Modal, TouchableOpacity, Image } from 'react-native'
import MyButton from './components/MyButton';

function App() {
  const [Email , setEmail] = useState('')
  const [Password , setPasword ] = useState('')

  const handleClick = () => {
    if(Email === 'chika@chika' && Password ==='password') {
      Alert.alert('Success' , 'Welcome Chika You Are A Member')
    }
    else{
      Alert.alert('Authentication Error !!' , 'Please Register')
    }
  }

return (
  <View style = {styles.container}>
      <Image
        source={require('./asset/chika.png')} style = {styles.image}
       />

       <TextInput 
        style = {styles.input}
        placeholder='Email'
        onChangeText={(text) => {setEmail(text)}}
       />

       <TextInput
       style = {styles.input}
       placeholder='Password'
       onChangeText={(text) => {setPasword(text)}}
       secureTextEntry = {true}
       />

       <TouchableOpacity style = {{backgroundColor:'white' , paddingLeft:30,paddingBottom:15, paddingRight:30, paddingTop:15, borderRadius:30, marginTop:25}} onPress={handleClick}>
          <Text style ={{color:'gray' , fontSize:20}}>Submit</Text>
        </TouchableOpacity>
       


  </View>
)
  
  
}


const styles = StyleSheet.create({
  input: {
    width: 300,
    height:40,
    borderWidth:1,
    borderColor:'#888',
    borderRadius:5,
    padding:10,
    marginBottom:10,
    backgroundColor:'white'
  },
  heading: {
    fontSize:24,
    marginBottom:20
  },
 container: {
  flex: 1,
  justifyContent: 'center',
  alignItems:'center',
  backgroundColor:'gray'
  
 },
 image:{
  width:200,
  height:200,
  resizeMode:'cover',
  borderRadius:100,
  marginBottom:50
 }
});

export default App