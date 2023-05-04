import { StyleSheet, Text, View, TouchableOpacity, Image, FlatList } from 'react-native'
import React, {useContext, useEffect} from 'react'
import color from '../../../../assets/color'
import PostTrendingItem from '../../../PostTrendingItem'
import { NewsContext } from '../utilities/NewsContext'
import { getShortContent, convertDate } from '../utilities/ConfigNews'

const AllTrendingNews = (props) => {

    const {navigation} = props;

        const {getArticles, articles} = useContext(NewsContext);
    // const [posts, setPosts] = useState(null);
    const posts = articles.data;
    const getNews = async () => {
        const result = await getArticles();
    };
    useEffect(() => {
        getNews();
    }, []);
    const headerComponent = () => (
        <View style={styles.header}>
            <TouchableOpacity>
                <Image source={require('../../../../assets/images/ic_back.png')}/>
            </TouchableOpacity>
            <Text style={styles.title}>Trending</Text>
            <TouchableOpacity>
                <Image source={require('../../../../assets/images/ic_more_options.png')}/>
            </TouchableOpacity>
        </View>
    )

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
    )


  return (
    <View style={styles.container}>
        <View style={styles.body}>
            <FlatList
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={headerComponent}
            data={posts}
            keyExtractor={(item, index) => item._id}
            renderItem={renderItem}/>
        </View>
    </View>
  )
}

export default AllTrendingNews


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
        paddingHorizontal: 24

    },

    header: {
        marginTop: 68,
        paddingHorizontal: 4,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    title: {
        fontFamily: fonts[3],
        color: color.black,
        fontSize: 16,
    }
})