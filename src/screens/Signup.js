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

const Signup = ({navigation}) => {
  const [name, setName] = useState('');
  const [badName, setBadName] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [badEmail, setBadEmail] = useState(false);
  const [badpassword, setBadPassword] = useState(false);
  const [badConfirmPassword, setBadConfirmPassword] = useState(false);
  const [mobile, setMobile] = useState('');
  const [badMobile, setBadMobile] = useState(false);

  const validate = () => {
    if (email == '') {
      setBadEmail(true);
    } else {
      setBadEmail(false);
    }

    if (name == '') {
      setBadName(true);
    } else {
      setBadName(false);
    }

    if (mobile == '') {
      setBadMobile(true);
    } else if (mobile.length < 10) {
      setBadMobile(true);
    } else {
      setBadMobile(false);
    }
    if (password == '') {
      setBadPassword(true);
    } else {
      setBadPassword(false);
    }

    if (confirmPassword == '') {
      setBadConfirmPassword(true);
    } else {
      setBadConfirmPassword(false23);
    }
    if (password !== confirmPassword) {
      setBadConfirmPassword(true);
    } else {
      setBadConfirmPassword(false);
    }
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <SafeAreaView style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../images/shopping.png')}
        />
        <Text style={styles.heading}>Create New Account</Text>

        <CustomTextInput
          placeholder={'Enter Name'}
          value={name}
          onChangeText={txt => {
            setName(txt);
          }}
          icon={require('../../images/user.png')}
        />
        {badName === true && (
          <Text style={{marginTop: 10, alignSelf: 'center', color: 'red'}}>
            Please Enter Name
          </Text>
        )}
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
          placeholder={'Enter Mobile'}
          value={mobile}
          keyboardType={'number-pad'}
          onChangeText={txt => {
            setMobile(txt);
          }}
          icon={require('../../images/smartphone.png')}
        />
        {badMobile === true && (
          <Text style={{marginTop: 10, alignSelf: 'center', color: 'red'}}>
            Please Enter Correct Mobile No.
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
        <CustomTextInput
          // type={'password'}
          value={confirmPassword}
          onChangeText={txt => {
            setConfirmPassword(txt);
          }}
          placeholder={'Confirm Password'}
          icon={require('../../images/unlock.png')}
        />
        {badConfirmPassword === true && (
          <Text style={{marginTop: 10, alignSelf: 'center', color: 'red'}}>
            Please Enter Correct Password.
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
            navigation.goBack();
          }}>
          <Text
            style={{
              fontSize: 18,
              fontWeight: '500',
              marginTop: 20,
              textDecorationLine: 'underline',
            }}>
            Already have account?
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
};

export default Signup;

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
