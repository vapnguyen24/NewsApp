import {StyleSheet, Dimensions} from 'react-native';
import color from '../color';

const fonts = [
  'poppins_regular',
  'poppins_medium',
  'poppins_bold',
  'poppins_semi_bold',
];


const styles = StyleSheet.create({
  header: {
    // marginHorizontal: 12,
    marginTop: 34.5,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {
    width: 100,
    height: 30,
  },

  icon: {
    width: 18,
    height: 21.5,
    color: color.black,
    resizeMode: 'contain'
  },

  custom_search: {
    // marginHorizontal: 12,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: 48,
    borderRadius: 6,
    alignItems: 'center',
    marginTop: 42,
    borderColor: color.gray_text,
    borderWidth: 1,
  },

  search_left: {
    flexDirection: 'row',
  },

  input: {
    color: '#A0A3BD',
    fontSize: 14,
    fontFamily: 'poppins_medium',
    borderColor: color.gray_text,
    marginLeft: 12,
    width: Dimensions.get('window').width - 139,
  },

  body: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
    // marginHorizontal: 12,
    alignItems: 'center',
  },
  latest_view: {
    marginTop: 16,
  },
  latest_title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  latest_topic: {
    marginTop: 16,
  },
  latest_post: {
    marginHorizontal: 12
  },
});
export default styles;
