import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  ScrollView,
  FlatList,
  RefreshControl,
  ActivityIndicator,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import color from '../../../../assets/color';
import PostTrendingItem from '../../../PostTrendingItem';
import PostLatestItem from '../../../PostLatestItem';
import styles from '../../../../assets/styles/HomeScreenStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {UserContext} from '../../user/utilities/UserContext';
import {NewsContext} from '../utilities/NewsContext';
import {convertDate, getShortContent} from '../utilities/ConfigNews';

const HomeScreen = ({navigation}) => {
  const {getArticles, articles, lastArticle} = useContext(NewsContext);
  const [posts, setPosts] = useState(null);

  const getNews = async () => {
    const result = await getArticles();
    setPosts(result);
  };

  useEffect(() => {
    getNews();
  }, []);


  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);

    // Do your API call or data fetching here
    getNews();
    // After fetching new data, set refreshing to false
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('PostDetail', {id: item._id})}>
      <PostLatestItem
        image={item.image}
        content={getShortContent(item.content)}
        title={item.title}
        auth_publish={convertDate(item.createdAt)}
      />
    </TouchableOpacity>
  );

  const headerComponent = () => (
    <View>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          source={require('../../../../assets/images/logo.png')}
        />
        <TouchableOpacity>
          <Image
            style={styles.icon}
            source={require('../../../../assets/images/ic_notifycation.png')}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity activeOpacity={0.7}>
        <View style={styles.custom_search}>
          <View style={styles.search_left}>
            <Image
              style={[styles.icon, {marginLeft: 12}]}
              source={require('../../../../assets/images/ic_search.png')}
            />
            <Text style={styles.input}>Search</Text>
          </View>
          <Image
            style={[styles.icon, {marginRight: 12}]}
            source={require('../../../../assets/images/ic_filter.png')}
          />
        </View>
      </TouchableOpacity>

      <View style={styles.body}>
        <Text
          style={{
            fontFamily: 'poppins_semi_bold',
            fontSize: 16,
            color: color.black,
          }}>
          Trending
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('AllTrendingNews')}>
          <Text
            style={{
              fontFamily: 'poppins_regular',
              fontSize: 14,
              color: color.gray_text,
            }}>
            See all
          </Text>
        </TouchableOpacity>
      </View>

      {posts == null ? (
        <ActivityIndicator />
      ) : (
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('PostDetail', {id: lastArticle._id});
          }}>
          <PostTrendingItem
            image={lastArticle.image}
            content={getShortContent(lastArticle.content)}
            title={lastArticle.title}
            createdBy_avatar={lastArticle.createdBy.avatar}
            createdBy_name={lastArticle.createdBy.name}
            createdAt={convertDate(lastArticle.createdAt)}
          />
        </TouchableOpacity>
      )}

      <View style={styles.latest_view}>
        <View style={styles.latest_title}>
          <Text
            style={{
              fontFamily: 'poppins_semi_bold',
              fontSize: 16,
              color: color.black,
            }}>
            Latest
          </Text>
          <TouchableOpacity>
            <Text
              style={{
                fontFamily: 'poppins_regular',
                fontSize: 14,
                color: color.gray_text,
              }}>
              See all
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.latest_topic}></View>
      </View>
    </View>
  );

  return (
    <View
      style={{flex: 1, backgroundColor: color.white, paddingHorizontal: 12}}>
      <View style={styles.latest_post}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={headerComponent}
          data={posts}
          keyExtractor={(item, index) => item._id}
          renderItem={renderItem}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        />
      </View>
    </View>
  );
};

export default HomeScreen;
