import { View, Text,StyleSheet,Image } from 'react-native'
import React, { useEffect } from 'react'
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Splash = ({navigation}) => {
useEffect (()=>{
    setTimeout(() => {
        navigation.navigate('login')
    }, 2000);
},[])


  return (
    <View style={styles.container}>
      <Image style={styles.splashImage}
       source={require('../../images/shopping.png')} />
      <Text style ={ styles.title}>Shopping Adda</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    splashImage:{
      width: wp ('35%'),
      height: hp ('15%'),
    },
    title:{
      fontSize: wp('5%'),
      marginTop: hp ('1.7%'),
      color:'red',
      fontWeight: '500',
    },
})


