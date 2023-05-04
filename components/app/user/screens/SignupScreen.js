import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ToastAndroid,
  SafeAreaView,
  KeyboardAvoidingView
} from 'react-native';
import React, {useState, useContext} from 'react';
import styles from '../../../../assets/styles/SignUpScreenStyle';
import { UserContext } from '../utilities/UserContext';
import { validateEmail } from '../utilities/ConfigUser';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

const SignupScreen = ({navigation}) => {

  const { register } = useContext(UserContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = async () => {
    // valid
    if (email == '' || password == '' || confirmPassword == '') {
        ToastAndroid.show('Please type in the blank', ToastAndroid.SHORT);
        return;
    }

    if (password != confirmPassword) {
      ToastAndroid.show('Check your confirm password', ToastAndroid.SHORT);
      return;
    }

    if (!validateEmail(email)) {
      ToastAndroid.show('Email is invalid', ToastAndroid.SHORT);
      return;
    }
    // end valid

    const result = await register(email, password);
    if (result == false) {
      ToastAndroid.show('Email already exists', ToastAndroid.SHORT);
      return;
    } 
    ToastAndroid.show('Register success!', ToastAndroid.SHORT);
    navigation.goBack()
  }

  return (
      
    // <SafeAreaView style={styles.container}>
      <KeyboardAwareScrollView style={styles.container} enableOnAndroid={true}>
        <Text style={styles.hello}>Hello!</Text>
        <Text style={styles.description}>Signup to get Started</Text>
        <View style={styles.form}>
          {/* username */}
          <Text style={styles.form_title}>
            Email<Text style={{color: '#C30052'}}>*</Text>
          </Text>
          <TextInput style={styles.form_input} value={email} onChangeText={setEmail}/>
          
          <View style={styles.form_valid}>
            <Image source={require('../../../../assets/images/ic_error.png')} />
            <Text style={styles.valid_text}>Invalid Username</Text>
          </View>

          {/* password */}
          <Text style={styles.form_title}>
            Password<Text style={{color: '#C30052'}}>*</Text>
          </Text>
          
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput style={styles.form_input_password} value={password} onChangeText={setPassword}/>
            <View style={styles.eye_icon}>
              <TouchableOpacity>
                <Image source={require('../../../../assets/images/ic_hide_icon.png')} />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.form_valid}>
            <Image source={require('../../../../assets/images/ic_error.png')} />
            <Text style={styles.valid_text}>Invalid Password</Text>
          </View>

          {/* reply password */}
          <Text style={styles.form_title}>
            Confirm Password<Text style={{color: '#C30052'}}>*</Text>
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextInput style={styles.form_input_password} value={confirmPassword} onChangeText={setConfirmPassword}/>
            <View style={styles.eye_icon}>
              <TouchableOpacity>
                <Image source={require('../../../../assets/images/ic_hide_icon.png')} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.form_valid}>
            <Image source={require('../../../../assets/images/ic_error.png')} />
            <Text style={styles.valid_text}>Invalid Username</Text>
          </View>
        </View>

        <TouchableOpacity
          style={styles.login_btn}
          activeOpacity={0.9}
          onPress={handleRegister}>
          <Text style={styles.login_text}>Sign up</Text>
        </TouchableOpacity>

        <View style={styles.btn}>
          <TouchableOpacity style={[styles.gg_btn, {marginRight: 15}]} activeOpacity={0.9}>
            <Image source={require('../../../../assets/images/ic_fb.png')} />
            <Text style={styles.gg_text}>Facebook</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.gg_btn, {marginLeft: 15}]} activeOpacity={0.9}>
            <Image source={require('../../../../assets/images/google.png')} />
            <Text style={styles.gg_text}>Google</Text>
          </TouchableOpacity>
         
        </View>

        <View style={styles.move_login}>
          <Text style={styles.text_login}>Already have an account? </Text>
          <TouchableOpacity activeOpacity={0.7}
          onPress={() => navigation.goBack()}>
            <Text style={styles.bt_login}>Login</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAwareScrollView>
    // </SafeAreaView>
  );
};

export default SignupScreen;
