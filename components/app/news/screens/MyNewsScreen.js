import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'
import PostLatestItem from '../../../PostLatestItem';
const posts = [
  {
    id: '1',
    image: require('../../../../assets/images/image2.png'),
    topic: 'Europe',
    title: "Ukraine's President Zelensky to BBC: Blood money being paid...",
    auth_avt: require('../../../../assets/images/image4.png'),
    auth_name: 'BBC News',
    auth_publish: '14m ago',
  },

  {
    id: '2',
    image: require('../../../../assets/images/image2.png'),
    topic: 'Travel',
    title: 'Her train broke down. Her phone died. And then she met her..',
    auth_avt: require('../../../../assets/images/image4.png'),
    auth_name: 'CNN',
    auth_publish: '1h ago',
  },

  {
    id: '3',
    image: require('../../../../assets/images/image2.png'),
    topic: 'Europe',
    title: 'Russian warship: Moskva sinks in Black Sea',
    auth_avt: require('../../../../assets/images/image4.png'),
    auth_name: 'BBC News',
    auth_publish: '4h ago',
  },
  {
    id: '4',
    image: require('../../../../assets/images/image2.png'),
    topic: 'Money',
    title: 'Wind power produced more electricity than coal and nucle...',
    auth_avt: require('../../../../assets/images/image4.png'),
    auth_name: 'USA Today',
    auth_publish: '4h ago',
  },

  {
    id: '5',
    image: require('../../../../assets/images/image2.png'),
    topic: 'Life',
    title: "We keep rising to new challenges:' For churches hit by",
    auth_avt: require('../../../../assets/images/image4.png'),
    auth_name: 'USA Today',
    auth_publish: '4h ago',
  },
  {
    id: '6',
    image: require('../../../../assets/images/image2.png'),
    topic: 'Life',
    title: "We keep rising to new challenges:' For churches hit by",
    auth_avt: require('../../../../assets/images/image4.png'),
    auth_name: 'USA Today',
    auth_publish: '4h ago',
  },
];



const MyNewsScreen = () => {
  const renderItem = ({item}) => {
    <PostLatestItem
    image={item.image}
    topic={item.topic}
    title={item.title}
    auth_avt={item.auth_avt}
    auth_name={item.auth_name}
    auth_publish={item.auth_publish}
  />
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={posts}
        renderItem={({ item }) => 
        <PostLatestItem
        image={item.image}
        topic={item.topic}
        title={item.title}
        auth_avt={item.auth_avt}
        auth_name={item.auth_name}
        auth_publish={item.auth_publish}
      />}
        keyExtractor={item => item.id}
      />
      {/* <FlatList 
        showsVerticalScrollIndicator={false}
        scrollEnabled={true}
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item, index) => item.id}

      /> */}
    </View>
  )
}

export default MyNewsScreen

const styles = StyleSheet.create({
    container: {
        paddingTop: 14,
        // paddingBottom: 24,
        flex: 1,
        backgroundColor: 'white'
    }
})