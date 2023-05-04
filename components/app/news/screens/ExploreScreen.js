import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import React, {useState, useContext, useEffect} from 'react';
import color from '../../../../assets/color';
import {NewsContext} from '../utilities/NewsContext';
import {convertDate, getShortContent} from '../utilities/ConfigNews';
import PostTrendingItem from '../../../PostTrendingItem';

const fonts = [
  'poppins_regular',
  'poppins_medium',
  'poppins_bold',
  'poppins_semi_bold',
];

const ExploreScreen = ({navigation}) => {

  const {getArticles, articles} = useContext(NewsContext);
  // const [posts, setPosts] = useState(null);
  const posts = articles?.data;
  const getNews = async () => {
    const result = await getArticles();
  };
  useEffect(() => {
    getNews();
  }, []);

  const headerComponent = () => (
    <View>
      <Text style={styles.explore}>Explore</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <Text style={styles.topic}>Topic</Text>
        <Text style={styles.seeall}>See all</Text>
      </View>
      <View style={styles.topic_list}>
        <View style={styles.topic_list_item}>
          <View style={styles.list_item_content}>
            <View style={styles.content_img}>
              <Image
                style={styles.img_topic}
                source={require('../../../../assets/images/topic.png')}
              />
            </View>
            <View style={styles.content_text}>
              <Text style={styles.content_title}>Health</Text>
              <Text style={styles.content_content}>
                Get energizing workout moves, healthy recipes...
              </Text>
            </View>
          </View>
          <View style={styles.list_item_btn}>
            <TouchableOpacity style={styles.btn_inactive}>
              <Text style={styles.saved_inactive}>Saved</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topic_list_item}>
          <View style={styles.list_item_content}>
            <View style={styles.content_img}>
              <Image
                style={styles.img_topic}
                source={require('../../../../assets/images/topic.png')}
              />
            </View>
            <View style={styles.content_text}>
              <Text style={styles.content_title}>Health</Text>
              <Text style={styles.content_content}>
                Get energizing workout moves, healthy recipes...
              </Text>
            </View>
          </View>
          <View style={styles.list_item_btn}>
            <TouchableOpacity style={styles.btn_active}>
              <Text style={styles.saved_active}>Saved</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.topic_list_item}>
          <View style={styles.list_item_content}>
            <View style={styles.content_img}>
              <Image
                style={styles.img_topic}
                source={require('../../../../assets/images/topic.png')}
              />
            </View>
            <View style={styles.content_text}>
              <Text style={styles.content_title}>Health</Text>
              <Text style={styles.content_content}>
                Get energizing workout moves, healthy recipes...
              </Text>
            </View>
          </View>
          <View style={styles.list_item_btn}>
            <TouchableOpacity style={styles.btn_active}>
              <Text style={styles.saved_active}>Saved</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <Text style={styles.popular_title}>Popular Topic</Text>
    </View>
  );

  const renderItem = ({item}) => (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={() => navigation.navigate('PostDetail', {id: item._id})}>
      <PostTrendingItem
        image={item.image}
        content={getShortContent(item.content)}
        title={item.title}
        auth_avt={item.createdBy.avatar}
        auth_name={item.createdBy.name}
        createdAt={convertDate(item.createdAt)}
      />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <View style={styles.popular_list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          ListHeaderComponent={headerComponent}
          data={posts}
          keyExtractor={(item, index) => item._id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.white,
    paddingRight: 24,
    paddingLeft: 24,
  },
  explore: {
    fontSize: 32,
    color: color.black,
    fontFamily: fonts[2],
    marginTop: 68,
  },

  topic: {
    fontFamily: 16,
    color: color.black,
    fontFamily: fonts[3],
  },

  seeall: {
    fontFamily: 14,
    color: color.gray_text,
    fontFamily: fonts[1],
  },

  topic_list: {
    marginTop: 16,
  },

  topic_list_item: {
    marginBottom: 16,
    marginHorizontal: 4.5,
    paddingVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  list_item_content: {
    flexDirection: 'row',
  },

  img_topic: {
    width: 70,
    height: 70,
    borderRadius: 6,
  },

  content_text: {
    marginLeft: 8,
  },

  content_title: {
    fontFamily: 16,
    color: color.black,
    fontFamily: fonts[1],
  },

  content_content: {
    marginTop: 4,
    fontFamily: 14,
    color: color.gray_text,
    fontFamily: fonts[0],
    width: Dimensions.get('window').width - 221,
  },

  btn_active: {
    width: 78,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1877F2',
    borderRadius: 6,
  },

  btn_inactive: {
    width: 78,
    height: 34,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#1877F2',
    borderWidth: 1,
    borderRadius: 6,
  },

  saved_active: {
    fontFamily: 16,
    color: color.white,
    fontFamily: fonts[3],
    marginTop: 2,
  },

  saved_inactive: {
    fontFamily: 16,
    color: '#1877F2',
    fontFamily: fonts[3],
    marginTop: 2,
  },
  popular_title: {
    fontFamily: 16,
    color: color.black,
    fontFamily: fonts[2],
  },

  popular_list: {
    marginTop: 16,
  },
});
