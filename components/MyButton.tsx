import React from 'react'
import { GestureResponderEvent, Text, TouchableOpacity, View } from 'react-native'

function MyButton({clicked}:any) {

  return (
    <TouchableOpacity onPress={clicked}  >
        {/* <View style = {{backgroundColor:'blue' , padding:10 , width: '10px'}}>
            <Text style ={{color: 'white' , textAlign:'center'}}>Click Me</Text>
        </View> */}

    </TouchableOpacity>
  )
}

export default MyButton
