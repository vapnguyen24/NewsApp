import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import color from '../../../../assets/color';
import styles from '../../../../assets/styles/LoginScreenStyle';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import {UserContext} from '../utilities/UserContext';
import {NewsContext} from '../../news/utilities/NewsContext';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
const LoginScreen = ({navigation}) => {
  const {login} = useContext(UserContext);

  const [username, setUsername] = useState('vinh@gmail.com');
  const [password, setPassword] = useState('123456');

  //check valid
  const [checkUsername, setCheckUsername] = useState(true);
  const [checkPassword, setCheckPassword] = useState(true);

  const checkValidUsername = !checkUsername
    ? styles.form_valid_show
    : styles.form_valid;
  const formInput = !checkUsername ? styles.form_input_err : styles.form_input;

  const checkValidPassword = !checkPassword
    ? styles.form_valid_show
    : styles.form_valid;
  const formInputPassword = !checkPassword
    ? styles.password_unvalid
    : styles.password_valid;

  const handleLogin = async () => {
    const result = await login(username, password);
    if (!username || !password || result == false) {
      setCheckUsername(false);
      setCheckPassword(false);
      return;
    }
  };

  // const checkValid = (username == '' && password == '') ? styles.form_valid_show : styles.form_valid

  return (
    <KeyboardAwareScrollView style={styles.container} enableOnAndroid={true}>
      <Text style={styles.hello}>
        Hello{'\n'}
        <Text style={{color: color.blue}}>Again!</Text>
      </Text>
      <Text style={styles.description}>
        Welcome back you’ve{'\n'}been missed
      </Text>
      <View style={styles.form}>
        {/* username */}
        <Text style={styles.form_title}>
          Email<Text style={{color: '#C30052'}}>*</Text>
        </Text>
        <TextInput
          style={formInput}
          onChangeText={setUsername}
          value={username}
        />

        <View style={checkValidUsername}>
          <Image source={require('../../../../assets/images/ic_error.png')} />
          <Text style={styles.valid_text}>Invalid Username</Text>
        </View>

        {/* password */}
        <Text style={styles.form_title}>
          Password<Text style={{color: '#C30052'}}>*</Text>
        </Text>
        <View
          style={[
            {
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',

              borderRadius: 6,
            },
            formInputPassword,
          ]}>
          <TextInput
            style={styles.form_input_password}
            onChangeText={setPassword}
            value={password}
          />
          <View style={styles.eye_icon}>
            <TouchableOpacity>
              <Image
                source={require('../../../../assets/images/ic_hide_icon.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={checkValidPassword}>
          <Image source={require('../../../../assets/images/ic_error.png')} />
          <Text style={styles.valid_text}>Invalid Password</Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <View style={styles.remember}>
            <BouncyCheckbox
              innerIconStyle={{width: 20, height: 20, borderRadius: 3}}
              iconStyle={{width: 20, height: 20, borderRadius: 3}}
              disableText={true}
              unfillColor="#FFFFFF"
              fillColor={color.blue}
              onPress={isChecked => {}}
            />
            <Text style={styles.label}>Remember me?</Text>
          </View>
          <TouchableOpacity>
            <Text style={styles.forget_password}>Forgot the password ?</Text>
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity
        style={styles.login_btn}
        activeOpacity={0.9}
        onPress={handleLogin}>
        <Text style={styles.login_text}>Login</Text>
      </TouchableOpacity>

      <Text style={styles.continue}>or continue with</Text>

      <View style={styles.btn}>
        <TouchableOpacity
          style={[styles.gg_btn, {marginRight: 15}]}
          activeOpacity={0.7}>
          <Image source={require('../../../../assets/images/ic_fb.png')} />
          <Text style={styles.gg_text}>Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.gg_btn, {marginLeft: 15}]}
          activeOpacity={0.7}>
          <Image source={require('../../../../assets/images/google.png')} />
          <Text style={styles.gg_text}>Google</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.move_signup}>
        <Text style={styles.text_signup}>don't have an account? </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}
          activeOpacity={0.7}>
          <Text style={styles.bt_signup}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAwareScrollView>
  );
};

export default LoginScreen;
