import { View, Text, TouchableOpacity,} from 'react-native'
import React from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const CommonButton = ({title, textColor,onPress,bgColor}) => {
  return (
    <TouchableOpacity style={{
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: bgColor,
      width : "85%",
      height: 50,
      borderRadius: 10,
      alignSelf:'center',
      marginTop: 50,
    }}
    onPress ={()=>{
      onPress();
    }}
    >
      <Text style={{color: textColor,alignSelf:'center'}}>{title}</Text>
    </TouchableOpacity>
  )
}

export default CommonButton

