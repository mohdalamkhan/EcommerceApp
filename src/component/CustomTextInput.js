import {View, Text, Image} from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const CustomTextInput = ({value, onChangeText, placeholder, icon, type, keyboardType}) => {
  return (
    <View
      style={{
        width: wp('85%'),
        height: hp ('6%'),
        borderWidth: wp('.2%'),
        borderRadius: wp('3%'),
        marginTop:hp ('4%'),
        flexDirection: 'row',
      }}>
        <Image source={icon} style={{width: wp ('7%'),
            height:wp('7%'), margin:wp('3%'),fontSize:20}}/>
        
          <TextInput value={value}
          keyboardType={keyboardType? keyboardType: 'default'}
          onChangeText={txt=>{
            onChangeText(txt);
          }}
          placeholder={placeholder} style={{width: wp('80%'),
            marginRight: wp('10%'),}}
             secureTextEntry ={type? true : false}
             />
      </View>
  );
};

export default CustomTextInput;
