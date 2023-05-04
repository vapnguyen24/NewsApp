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
import PostLatestItem from '../../../PostLatestItem';
import {TextInput} from 'react-native-gesture-handler';

const fonts = [
  'poppins_regular',
  'poppins_medium',
  'poppins_bold',
  'poppins_semi_bold',
];

const BookmarkScreen = ({navigation}) => {
  const {getArticles, articles, searchArticle} = useContext(NewsContext);
  const [posts, setPosts] = useState();
  const [search, setSearch] = useState('');
  // setPosts(articles.data);
  //const posts = articles?.data

  // const getNews = async () => {
  //   const result = await getArticles();
  // };
  useEffect(() => {
    // getNews();
    getArticlesFromSearch();
  }, []);

  const getArticlesFromSearch = async () => {
    const result = await searchArticle(search);
    setPosts(result.data);
  };
  // const headerComponent = () => {
    
  //   return (
      
  //   );
  // };

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

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.explore}>Bookmark</Text>
        <View style={styles.input_view}>
          <View style={styles.input_left}>
            <Image
              style={{marginLeft: 12, width: 24, height: 24}}
              source={require('../../../../assets/images/ic_search.png')}
            />
            <TextInput
              returnKeyType="search"
              style={styles.input_text}
              placeholder="Search"
              value={search}
              onChangeText={setSearch}
              onSubmitEditing={getArticlesFromSearch}
            />
          </View>
          <Image
            style={{marginRight: 12, width: 24, height: 24}}
            source={require('../../../../assets/images/ic_filter.png')}
          />
        </View>
      </View>
      <View style={styles.popular_list}>
        <FlatList
          showsVerticalScrollIndicator={false}
          // ListHeaderComponent={headerComponent}
          data={posts}
          keyExtractor={(item, index) => item._id}
          renderItem={renderItem}
        />
      </View>
    </View>
  );
};

export default BookmarkScreen;

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

  input_view: {
    height: 48,
    borderColor: color.gray_text,
    marginVertical: 16,
    borderWidth: 1,
    borderRadius: 6,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  input_left: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  input_text: {
    marginLeft: 12,
    width: Dimensions.get('window').width - 132,
    paddingRight: 12,
    fontFamily: fonts[0],
    fontSize: 14,
    color: color.black,
    marginTop: 2,
  },

  popular_list: {
    paddingBottom: 200
  }
});
