import {StyleSheet, Text, View, Image, TouchableOpacity, ScrollView} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import color from '../../../../assets/color';
import TopTabMyPost from '../../../../navigations/TopTabMyPost';
import { UserContext } from '../../user/utilities/UserContext';
import {convertDate} from '../utilities/ConfigNews'
import { useRoute
 } from '@react-navigation/native';
const ProfileDetailScreen = (props) => {

  // const route = useRoute();
  // const userFromBack = route.params?.data;
  // console.log('ufb', userFromBack)
  const {navigation} = props
  const {user} = useContext(UserContext);
  
  return (
    <View style={styles.container}>
      {/* <ScrollView showsVerticalScrollIndicator={false} style={{flex:1}}> */}
        <View style={styles.header}>
          <Text></Text>
          <Text style={styles.profileTitle}>Profile</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
            <Image source={require('../../../../assets/images/ic_setting.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.profileInfo}>
          <View style={styles.profileInfoTop}>
            <Image
              style={styles.profileAvt}
              source={{uri: user?.avatar}}
            />
            <View style={styles.social}>
              <View style={styles.socialView}>
                <Text style={styles.socialViewNum}>2156</Text>
                <Text style={styles.socialViewText}>Followers</Text>
              </View>
              <View style={styles.socialView}>
                <Text style={styles.socialViewNum}>567</Text>
                <Text style={styles.socialViewText}>Following</Text>
              </View>
              <View style={styles.socialView}>
                <Text style={styles.socialViewNum}>23</Text>
                <Text style={styles.socialViewText}>News</Text>
              </View>
            </View>
          </View>
          <View style={styles.profileInfoBottom}>
            <Text style={styles.profileInfoName}>{user?.name}</Text>
            <Text style={styles.profileInfoDescription}>
              {user?.address} {'\n'}{user?.phone} {'\n'}{convertDate(user?.dob)}
            </Text>
          </View>
        </View>

        <View style={styles.socialInteract}>
          <TouchableOpacity onPress={() => navigation.navigate('FillProfile')} style={[styles.buttonInteract, {marginRight: 8}]}>
            <Text style={styles.textInteract}>Edit Profile</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.buttonInteract, {marginLeft: 8}]}>
            <Text style={styles.textInteract}>Website</Text>
          </TouchableOpacity>
        </View>

        

        <View style={styles.myNews}>
          {/* <TopTabMyPost /> */}
        </View>
      {/* </ScrollView> */}
      <TouchableOpacity style={styles.btAdd} activeOpacity={0.7} onPress={() => navigation.navigate('AddNews')}>
          <Image source={require('../../../../assets/images/plus.png')}/>
        </TouchableOpacity>
    </View>
  );
};

export default ProfileDetailScreen;
const fonts = [
  'poppins_regular',
  'poppins_medium',
  'poppins_bold',
  'poppins_semi_bold',
];
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingHorizontal: 24,
  },
  header: {
    marginTop: 68,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  profileTitle: {
    fontFamily: fonts[1],
    fontSize: 14,
    color: color.black,
    flexDirection: 'row',
  },

  profileAvt: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },

  social: {
    height: 100,
    flex: 1,
    marginLeft: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  socialView: {
    alignItems: 'center',
  },

  socialViewNum: {
    fontSize: 16,
    fontFamily: fonts[3],
    color: color.black,
    marginTop: 4,
  },

  socialViewText: {
    fontSize: 16,
    fontFamily: fonts[1],
    color: color.gray_text,
  },

  profileInfo: {
    marginTop: 13,
  },

  profileInfoTop: {
    flexDirection: 'row',
  },

  profileInfoBottom: {
    marginTop: 16,
  },

  profileInfoName: {
    fontSize: 16,
    fontFamily: fonts[3],
    color: color.black,
  },

  profileInfoDescription: {
    fontSize: 16,
    fontFamily: fonts[1],
    color: color.gray_text,
  },

  socialInteract: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },

  buttonInteract: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: color.blue,
    height: 50,
    flex: 1,
    borderRadius: 6,
  },

  textInteract: {
    fontSize: 16,
    fontFamily: fonts[3],
    color: color.white,
  },

  myNews: {
    flex: 1,
  },

  btAdd: {
    width: 54,
    height: 54,
    borderRadius: 54,
    backgroundColor: color.blue,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 24,
    bottom: 27,
  }
});
