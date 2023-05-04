import {StyleSheet, Dimensions} from 'react-native';
import color from '../color';

const fonts = [
  'poppins_regular',
  'poppins_medium',
  'poppins_bold',
  'poppins_semi_bold',
];

const styles = StyleSheet.create({
    news_container: {
      flex: 1,
      backgroundColor: color.white,
    },
    news_info: {},
    bottom: {
      width: '100%',
      position: 'absolute',
      bottom: 0,
      shadowRadius: 1.2,
      shadowOffset: {
        width: 0,
        height: -3,
      },
      shadowColor: '#000000',
      elevation: 2.3,
      
    },
    news_interaction: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      height: 78,
      alignItems: 'center',
      // backgroundColor: color.white
    },
    news_interaction_left: {
      flexDirection: 'row',
      marginLeft: 24,
    },
    news_heart: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    news_chat: {
      flexDirection: 'row',
      alignItems: 'center',
      marginLeft: 30,
    },
    news_heart_text: {
      marginLeft: 6,
      marginTop: 3,
      fontFamily: fonts[1],
      fontSize: 16,
      color: color.black_login_title,
    },
    save_icon: {
      marginRight: 50,
    },
    top_bar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: 30
    },
  
    top_bar_left: {
      marginLeft: 24,
    },
  
    top_bar_right: {
      marginRight: 24,
      flexDirection: 'row',
      alignItems: 'center'
    },
    top_bar_share: {
      marginRight: 21.5,
    },
  
    auth_info: {
      marginTop: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    auth_info_left: {
      marginLeft: 24,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    auth_avt: {
      height: 50,
      width: 50
    },
    auth_follow: {
      height: 34,
      width: 102,
      marginRight: 24,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#1877F2',
      borderRadius: 6,
    },
    text_fl: {
      color: color.white,
      fontFamily: fonts[3],
      fontSize: 16,
      marginTop:3
    }, 
  
    auth_name: {
      color: color.black,
      fontSize: 16,
      fontFamily: fonts[3],
  
    },
  
    auth_publish: {
      color: color.gray_text,
      fontSize: 14,
      fontFamily: fonts[0],
  
    },
    news_inf: {
      marginHorizontal: 24,
    },
    news_image: {
      width: '100%',
      height: 248,
      marginTop: 16,
      borderRadius: 6,
    },
    news_topic: {
      marginTop: 16,
      fontFamily: fonts[0],
      fontSize: 14,
      color: color.gray_text,
    },
    news_title: {
      marginTop: 4,
      fontFamily: fonts[0],
      fontSize: 24,
      color: color.black
    },
    news_content: {
      marginTop: 4,
      marginBottom: 16,
      fontFamily: fonts[0],
      fontSize: 16,
      color: color.gray_text
    },
  });
export default styles;
