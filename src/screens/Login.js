import {
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CommonButton from '../component/CommonaButton';
import CustomTextInput from '../component/CustomTextInput';
import {ScrollView} from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badpassword, setBadPassword] = useState(false);

  const validate = () => {
    console.log("hello")
    
    if (email == '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }

    if (password == '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }
    getData()
    console.log("validation")

  };

  getData = async()=>{
    const mEmail = await AsyncStorage.getItem('EMAIL');
    const mPass = await AsyncStorage.getItem('PASSWORD');
    console.log("getDAta==>",mEmail,mPass)
  }

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../images/shopping.png')}
        />
        <Text style={styles.heading}>Login</Text>

        <CustomTextInput
          placeholder={'Enter Email Id'}
          value={email}
          onChangeText={txt => {
            setEmail(txt);
          }}
          icon={require('../../images/mail.png')}
        />
        {badEmail === true && (
          <Text style={{marginTop: 10, alignSelf: 'center', color: 'red'}}>
            Please Enter Email Id
          </Text>
        )}
        <CustomTextInput
          // type={'password'}
          value={password}
          onChangeText={txt => {
            setPassword(txt);
          }}
          placeholder={'Password'}
          icon={require('../../images/unlock.png')}
        />
        {badpassword === true && (
          <Text style={{marginTop: 10, alignSelf: 'center', color: 'red'}}>
            Please Enter Password.
          </Text>
        )}

        <CommonButton
          onPress={() => {
            validate();
          }}
          title={'Login'}
          bgColor={'#000'}
          textColor={'#fff'}
        />

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('signup');
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginTop: 20,
              textDecorationLine: 'underline',
            }}>
            Create New Account?
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: wp('100'),
    height: hp('100'),
    alignItems: 'center',
    marginTop: hp('16%'),
  },
  heading: {
    fontSize: wp('8%'),
    fontWeight: 'bold',
    marginTop: hp('4%'),
  },
  logo: {
    width: wp('25%'),
    height: wp('25%'),
  },
  input: {
    width: wp('80%'),
    height: hp('6%'),
    borderWidth: 1,
    marginVertical: hp('3%'),
    borderRadius: wp('6%'),
    paddingHorizontal: wp('3%'),
    fontSize: wp('5%'),
  },
});
