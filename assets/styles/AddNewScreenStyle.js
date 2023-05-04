import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
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
    backgroundColor: '#fff',
  },

  head: {
    marginTop: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  title: {
    fontSize: 24,
    fontFamily: fonts[1],
    color: color.black,
  },

  body: {
    marginTop: 16,
    marginBottom: 96
  },

  add_image: {
    // width: '100%',
    // height: 183,
    // backgroundColor: '#EEF1F4',
    // borderColor: color.gray_text,
    // borderWidth: 1,
    // borderRadius: 6,
    // borderStyle: 'dashed'
    height: 183,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  add_image_txt: {
    fontFamily: fonts[0],
    fontSize: 14,
    color: color.gray_text,
    marginTop: 8,
  },

  add_title: {
    flex: 1,
    fontSize: 24,
    fontFamily: fonts[0],
    color: '#A0A3BD',
    // alignItems: 'center',
    borderBottomColor: '#C4C4C4',
    borderBottomWidth: 1,
    paddingBottom: 0,
    marginTop: 16,
  },

  add_content: {
    fontSize: 16,
    fontFamily: fonts[1],
    color: '#A0A3BD',
    lineHeight: 24,
    // height: 200,
    // borderColor: color.black,
    // borderWidth: 1
  },

  foot: {
    height: 78,
    position: 'absolute',
    backgroundColor: color.white,
    bottom: 0,
    width: '100%',
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    paddingHorizontal: 24,
  },

  foot_left: {
    flexDirection: 'row',
    alignItems: 'center'
    
  },

  foot_left_item: {
    marginRight: 27
  },

  foot_right: {
    backgroundColor: '#EEF1F4',
    height: 50,
    width: 109,
    justifyContent: 'center',
    alignItems: 'center',
    shadowRadius: 1.2,
    shadowOffset: {
      width: 0,
      height: -3,
    },
    shadowColor: '#000000',
    elevation: 2.3,
  },

  btPublish_text: {
    color: '#667080',
    fontFamily: fonts[3],
    fontSize: 16,
  },

  foot_right_enabled: {
    // color: color.white,
    backgroundColor: color.blue,
    height: 50,
    width: 109,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },

  btPublish_text_enabled: {
    color: color.white,
    fontFamily: fonts[3],
    fontSize: 16,
  },
});
export default styles;
