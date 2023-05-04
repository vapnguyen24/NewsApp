import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import color from '../assets/color';

const PostLatestItem = (props) => {
  return (
      <View style={styles.container}>
        <View style={styles.content_image}>
          <Image style={styles.image} source={{uri: props.image}} />
        </View>

        <View style={styles.content}>
          <Text style={styles.topic}>{props.title}</Text>
          <Text style={styles.title}>{props.content}</Text>

          <View style={styles.auth_info}>
            <Image style={styles.auth_avt} source={require('../assets/images/image4.png')} />
            <Text style={styles.auth_name}>BBC News</Text>
            <Image
              style={styles.auth_time_icon}
              source={require('../assets/images/ic_clock.png')}
            />
            <Text style={styles.auth_publish}>{props.auth_publish}</Text>
          </View>
        </View>
      </View>
  );
};

export default PostLatestItem;
const fonts = [
  'poppins_regular',
  'poppins_medium',
  'poppins_bold',
  'poppins_semi_bold',
];
const styles = StyleSheet.create({
  container: {
    // width: '100%',
    padding: 8,
    flexDirection: 'row',
    marginBottom: 16,
  },
  content: {
    width: Dimensions.get('window').width - 164,
  },
  content_image: {
    width: 96,
    height: 96,
    marginRight: 4,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 6,
  },
  topic: {
    fontSize: 13,
    fontFamily: fonts[0],
    color: color.gray_text,
  },
  title: {
    fontFamily: fonts[1],
    fontSize: 16,
    color: color.black,
    marginTop: 4,
    lineHeight: 24,
  },
  auth_info: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  auth_avt: {
    width: 20,
    height: 20,
  },
  auth_name: {
    fontSize: 13,
    fontFamily: fonts[3],
    color: color.gray_text,
    marginLeft: 4,
  },

  auth_time_icon: {
    marginLeft: 13.17,
  },

  auth_publish: {
    marginTop: 4,
    marginLeft: 4,
    fontFamily: fonts[0],
    color: color.gray_text,
  },
});
