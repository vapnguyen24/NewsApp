import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState, useContext, useCallback} from 'react';
import styles from '../../../../assets/styles/FillProfileScreenStyle';
import {UserContext} from '../../user/utilities/UserContext';
import {NewsContext} from '../utilities/NewsContext';
import {convertDate} from '../../user/utilities/ConfigUser';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

const FillProfileScreen = ({navigation}) => {
  const {user, update} = useContext(UserContext);
  const {uploadImage} = useContext(NewsContext);

  const [avatar, setAvatar] = useState(user?.avatar);
  const [fullName, setFullName] = useState(user?.name);
  const [address, setAddress] = useState(user?.address);
  const [dob, setDob] = useState(user?.dob);
  const [phone, setPhone] = useState(user?.phone);

  const handleUpdateProfile = async () => {
    const user = {
      name: fullName,
      address: address,
      phone: phone,
      avatar: avatar,
      // avatar:
        // 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      // avatar: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      // avatar: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/what_is_image_Processing.jpg',
      dob: dob,
    };
    const result = await update(user);
    console.log(result);
  };

  const openGallery = useCallback(async () => {
    const options = {
      saveToPhotos: true,
      mediaType: 'photo',
      includeBase64: false,
      includeExtra: true,
    };

    const result = await launchImageLibrary(options, async response => {
      if (response.didCancel) {
        console.log('Cancel pick image');
      } else if (response.error) {
        console.log('image picker err: ', response.error);
      } else if (response.customButton) {
        console.log('tap button: ', response.customButton);
      } else {
        // setPhotoUri(response.assets[0].uri);
        // setIsHidden(false);
        response = response.assets[0];
        // console.log(response);
        const formData = new FormData();
        formData.append('image', {
          uri: response.uri,
          type: response.type,
          name: response.fileName,
        });

        const res = await uploadImage(formData);
        console.log('res: ', res);
        setAvatar(res.path);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1, height: Dimensions.get('window').height}}>
        <View style={styles.navigate_view}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              style={styles.ic_back}
              source={require('../../../../assets/images/back.png')}
            />
          </TouchableOpacity>

          <Text style={styles.title}>Edit Profile</Text>

          <TouchableOpacity activeOpacity={0.5} onPress={handleUpdateProfile}>
            <Image
              style={styles.ic_back}
              source={require('../../../../assets/images/update.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.avt_view}>
          <TouchableOpacity style={styles.avt_custom} onPress={openGallery}>
            <Image style={styles.avt_image} source={{uri: avatar}} />
            <Image
              style={styles.avt_edit}
              source={require('../../../../assets/images/edit_avt.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.form}>
          <View style={styles.form_item}>
            <Text style={styles.form_item_title}>Full Name*</Text>
            <TextInput
              style={styles.form_item_input}
              value={fullName}
              onChangeText={setFullName}
            />
            <View style={styles.form_item_valid}>
              <Image
                source={require('../../../../assets/images/ic_error.png')}
              />
              <Text style={styles.valid_text}>Invalid name</Text>
            </View>
          </View>

          <View style={styles.form_item}>
            <Text style={styles.form_item_title}>Address*</Text>
            <TextInput
              style={styles.form_item_input}
              value={address}
              onChangeText={setAddress}
            />
            <View style={styles.form_item_valid}>
              <Image
                source={require('../../../../assets/images/ic_error.png')}
              />
              <Text style={styles.valid_text}>Invalid address</Text>
            </View>
          </View>

          <View style={styles.form_item}>
            <Text style={styles.form_item_title}>Date of birthday*</Text>
            <TextInput
              style={styles.form_item_input}
              placeholder="yyyy-mm-dd"
              value={convertDate(dob)}
              onChangeText={setDob}
            />
            <View style={styles.form_item_valid}>
              <Image
                source={require('../../../../assets/images/ic_error.png')}
              />
              <Text style={styles.valid_text}>Invalid birthday</Text>
            </View>
          </View>

          <View style={styles.form_item}>
            <Text style={styles.form_item_title}>Phone Number*</Text>
            <TextInput
              style={styles.form_item_input}
              value={phone}
              onChangeText={setPhone}
            />
            <View style={styles.form_item_valid}>
              <Image
                source={require('../../../../assets/images/ic_error.png')}
              />
              <Text style={styles.valid_text}>Invalid phone number</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default FillProfileScreen;
