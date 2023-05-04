import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import React, {useContext, useState, useEffect} from 'react';
import styles from '../../../../assets/styles/PostDetailStyle';
import {NewsContext} from '../utilities/NewsContext';
import {convertDate, base64File} from '../utilities/ConfigNews';
import Share from 'react-native-share';
import RNFetchBlob from 'rn-fetch-blob';

const PostDetails = ({navigation, route}) => {
  const idArticle = route.params.id;

  const {getDetailArticle} = useContext(NewsContext);
  const [articles, setArticles] = useState({});

  const getArticles = async idArticle => {
    const result = await getDetailArticle(idArticle);
    setArticles(result);
  };

  useEffect(() => {
    getArticles(idArticle);
  }, []);

  const myCustomShare = async () => {
    console.log(base64File(articles.image));
      const options = {
        // url: 'data:application/octet-stream;base64,/9j/4AAQSkZJRgABAQEASABIAAD/4S/+RXhpZgAATU0AKgAAAAgABgESAAMAAAABAAEAAAEaAAUAAAABAAAA'
        // message: 'test'
      }

      try {
        const ShareResponse = await Share.open(options)
      } catch (error) {
        console.log(error)
      }
    // Share.open(options)
    //   .then(res => {
    //     console.log(res);
    //   })
    //   .catch(err => {
    //     err && console.log(err);
    //   });
  };

  return (
    <View style={styles.news_container}>
      <View style={styles.news_info}>
        <ScrollView style={{marginBottom: 78}}>
          <View style={styles.top_bar}>
            <View style={styles.top_bar_left}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Image
                  source={require('../../../../assets/images/ic_back.png')}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.top_bar_right}>
              <TouchableOpacity onPress={myCustomShare}>
                <Image
                  style={styles.top_bar_share}
                  source={require('../../../../assets/images/ic_share.png')}
                />
              </TouchableOpacity>

              <TouchableOpacity>
                <Image
                  source={require('../../../../assets/images/ic_more_options.png')}
                />
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.auth_info}>
            <View style={styles.auth_info_left}>
              <Image
                style={styles.auth_avt}
                source={require('../../../../assets/images/image4.png')}
              />
              <View style={{marginLeft: 4, height: 45}}>
                <Text style={styles.auth_name}>BBC News</Text>
                <Text style={styles.auth_publish}>
                  {convertDate(articles.createdAt)}
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.auth_follow}>
              <Text style={styles.text_fl}>Following</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.news_inf}>
            <Image style={styles.news_image} source={{uri: articles.image}} />
            <Text style={styles.news_topic}>Europe</Text>
            <Text style={styles.news_title}>{articles.title}</Text>
            <Text style={styles.news_content}>{articles.content}</Text>
          </View>
        </ScrollView>
      </View>

      <View style={styles.bottom}>
        <View style={styles.news_interaction}>
          <View style={styles.news_interaction_left}>
            <View style={styles.news_heart}>
              <TouchableOpacity>
                <Image
                  source={require('../../../../assets/images/ic_heart_sellected.png')}
                />
              </TouchableOpacity>
              <Text style={styles.news_heart_text}>24.5k</Text>
            </View>

            <TouchableOpacity style={styles.news_chat}>
              <Image
                source={require('../../../../assets/images/ic_chat.png')}
              />
              <Text style={styles.news_heart_text}>1k</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity>
            <Image
              style={styles.save_icon}
              source={require('../../../../assets/images/ic_save_sellected.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default PostDetails;
