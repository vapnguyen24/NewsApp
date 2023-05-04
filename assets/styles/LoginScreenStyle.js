import {StyleSheet} from 'react-native';
import color from '../color';

const fonts = [
  'poppins_regular',
  'poppins_medium',
  'poppins_bold',
  'poppins_semi_bold',
];
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: 'white'
  },
  hello: {
    fontFamily: fonts[2],
    fontSize: 48,
    color: color.black,
    marginTop: 30,
    marginLeft: 24,
    width: 167,
    lineHeight: 72,
  },
  description: {
    fontFamily: fonts[1],
    fontSize: 20,
    color: color.gray_text,
    marginTop: 4,
    marginLeft: 24,
    // width: 222,
  },
  form: {
    marginHorizontal: 24,
    marginTop: 32,
  },
  form_title: {
    fontFamily: fonts[0],
    fontSize: 14,
    color: color.gray_text,
    marginTop: 16,
  },
  form_input: {
    height: 48,
    width: '100%',
    borderColor: color.gray_text,
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 4,
    paddingLeft: 10,
    color: color.black
  },

  form_input_err: {
    height: 48,
    width: '100%',
    backgroundColor: '#FFF3F8',
    borderColor: '#C30052',
    borderWidth: 1,
    borderRadius: 6,
    marginTop: 4,
    paddingLeft: 10,
    color: color.black
  },
  
  
  form_input_password: {
    height: 48,
    // width: '100%',
    // borderColor: color.gray_text,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderLeftWidth: 1,
    // borderTopLeftRadius: 6,
    // borderBottomLeftRadius: 6,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    color: color.black
  },


  eye_icon: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    // borderColor: color.gray_text,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    // borderRightWidth: 1,
    // borderTopRightRadius: 6,
    // borderBottomRightRadius: 6,
  },

  password_valid: {
    borderColor: '#4E4B66',
    borderWidth: 1,
  },

  password_unvalid: {
    backgroundColor: '#FFF3F8',
    borderColor: '#C30052',
    borderWidth: 1,
  },

  form_valid: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
    display: 'none',
  },

  form_valid_show: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  
  valid_text: {
    fontFamily: fonts[0],
    fontSize: 14,
    color: color.gray_text,
    color: '#C30052',
    marginLeft: 6,
  },

  remember: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: 14,
    height: 20,
    fontFamily: fonts[0],
    color: color.gray_text,
    marginLeft: 6,
  },

  forget_password: {
    color: '#5890FF',
    fontFamily: fonts[0],
    fontSize: 14,
    height: 20,
  },

  login_btn: {
    height: 50,
    marginHorizontal: 24,
    borderRadius: 6,
    backgroundColor: color.blue,
    marginTop: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_text: {
    fontFamily: fonts[1],
    color: color.white,
    fontSize: 16,
  },
  continue: {
    width: '100%',
    marginTop: 16,
    fontFamily: fonts[0],
    fontSize: 14,
    textAlign: 'center',
    color: color.gray_text
  },

  btn: {
    flexDirection: 'row',
    justifyContent: 'space-between', 
    alignItems: 'center',
    marginHorizontal: 24,
    marginTop: 16,
  },

  gg_btn: {
    height: 48,
    flex: 1,
    backgroundColor: '#EEF1F4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 6,
  },

  gg_text: {
    marginLeft: 10,
    fontFamily: fonts[3],
    color: color.gray_text,
  },

  move_signup: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 40
  },
  text_signup: {
    fontFamily: fonts[1],
    fontSize: 14,
    color: color.gray_text,
  },
  bt_signup: {
    fontFamily: fonts[1],
    fontSize: 14,
    color: color.blue,
  },
});
export default styles;
