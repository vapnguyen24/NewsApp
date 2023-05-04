import {
  Text,
  View,
  ScrollView,
  Image,
  ImageBackground,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  PermissionsAndroid,
  ToastAndroid,
} from 'react-native';
import React, {useState, useContext, useCallback} from 'react';
import styles from '../../../../assets/styles/AddNewScreenStyle';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import {NewsContext} from '../utilities/NewsContext';

const AddNewsScreen = ({navigation}) => {
  const {addArticle, uploadImage} = useContext(NewsContext);

  const [photoUri, setPhotoUri] = useState(
    'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=2000&q=60',
  );
  const [title, setTitle] = useState(
    'Day la title one',
  );
  const [content, setContent] = useState(
    'I have the same issue with TextInput. I guess TextInput loses its focus because of FlatList. I tried to apply stopPropagation, but it doesnt work',
  );

  const [isHidden, setIsHidden] = useState(true);

 

  const handleAddNews = useCallback(async () => {
    // add news
    const article = {
      title: title,
      content: content,
      image: photoUri,
    };

    const result = await addArticle(article);

    if (result) {
      ToastAndroid.show('News have been added', ToastAndroid.SHORT);
      setContent('');
      setTitle('');
      setIsHidden(true);
    } else {
      ToastAndroid.show('Some thing went wrong', ToastAndroid.SHORT);
    }
    console.log(result);
  }, [title, content, photoUri]);

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
        setPhotoUri(res.path);
        setIsHidden(false);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView style={{flex: 1}}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          style={{flex: 1, paddingHorizontal: 24}}>
          <View style={styles.head}>
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <Image
                source={require('../../../../assets/images/ic_back.png')}
              />
            </TouchableOpacity>

            <Text style={styles.title}>Create News</Text>

            <TouchableOpacity activeOpacity={0.8}>
              <Image
                source={require('../../../../assets/images/ic_more_options.png')}
              />
            </TouchableOpacity>
          </View>

          <View style={styles.body}>
            <TouchableOpacity activeOpacity={0.7} onPress={openGallery}>
              {isHidden ? (
                <ImageBackground
                  resizeMode="contain"
                  source={require('../../../../assets/images/bg_news.png')}
                  style={styles.add_image}>
                  <Image
                    source={require('../../../../assets/images/ic_add_gray.png')}
                  />
                  <Text style={styles.add_image_txt}>Add Cover Photo</Text>
                </ImageBackground>
              ) : (
                <Image
                  style={{width: '100%', height: 183, borderRadius: 6}}
                  source={{uri: photoUri}}
                />
              )}
            </TouchableOpacity>

            {/* <View style={{display: isHidden ? 'none' : 'flex'}}>
            </View>
             */}
            <TextInput
              multiline
              style={styles.add_title}
              placeholder="News title"
              onChangeText={setTitle}
              value={title}
              placeholderTextColor="#C4C4C4"
            />

            <TextInput
              multiline
              style={styles.add_content}
              placeholder="Add News/Article"
              onChangeText={setContent}
              placeholderTextColor="#A0A3BD"
              value={content}
            />
          </View>
        </ScrollView>
        <View style={styles.foot}>
          <View style={styles.foot_left}>
            <TouchableOpacity style={styles.foot_left_item} activeOpacity={0.8}>
              <Image
                source={require('../../../../assets/images/ic_font.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.foot_left_item} activeOpacity={0.8}>
              <Image
                source={require('../../../../assets/images/ic_align.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.foot_left_item} activeOpacity={0.8}>
              <Image
                source={require('../../../../assets/images/ic_photo.png')}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.foot_left_item} activeOpacity={0.8}>
              <Image
                source={require('../../../../assets/images/ic_more_options_hor.png')}
              />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.foot_right_enabled}
            activeOpacity={0.8}
            onPress={handleAddNews}>
            <Text style={styles.btPublish_text_enabled}>Publish</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

export default AddNewsScreen;
