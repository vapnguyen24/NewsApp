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
    backgroundColor: color.white
  },
  
  hello: {
    fontFamily: fonts[2],
    fontSize: 48,
    color: color.blue,
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
    width: 222,
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
  },
  form_input_password: {
    height: 48,
    // width: '100%',
    borderColor: color.gray_text,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderTopLeftRadius: 6,
    borderBottomLeftRadius: 6,
    marginTop: 4,
    paddingLeft: 10,
    paddingRight: 10,
    flex: 1,
    marginTop: 4,
  },

  eye_icon: {
    height: 48,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 10,
    borderColor: color.gray_text,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderRightWidth: 1,
    borderTopRightRadius: 6,
    borderBottomRightRadius: 6,
    marginTop: 4,
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

  login_btn: {
    height: 50,
    marginHorizontal: 24,
    borderRadius: 6,
    backgroundColor: color.blue,
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  login_text: {
    fontFamily: fonts[1],
    color: color.white,
    fontSize: 16,
  },

  move_login: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 16,
  },
  text_login: {
    fontFamily: fonts[1],
    fontSize: 14,
    color: color.gray_text,
  },
  bt_login: {
    fontFamily: fonts[1],
    fontSize: 14,
    color: color.blue,
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
    // width: '100%',
    flex: 1,
    backgroundColor: '#EEF1F4',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    // marginHorizontal: 24,
    // marginTop: 16,
    borderRadius: 6,
    elevation: 1,
  },

  gg_text: {
    marginLeft: 10,
    fontFamily: fonts[3],
    color: color.gray_text,
  },
});
export default styles;
