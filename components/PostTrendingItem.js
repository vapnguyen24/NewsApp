import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import color from '../assets/color'

const PostTrendingItem = (props) => {
  return (
    <View style={styles.container}>
        <View>
            <Image style={styles.image} source={{uri: props.image}}/>
        </View>
        <Text style={styles.topic}>{props.title}</Text>
        <Text style={styles.title}>{props.content}</Text>
        <View style={styles.auth_info}>
            <Image style={styles.auth_avt} source={require('../assets/images/image4.png')}/>
            <Text style={styles.auth_name}>BBC News</Text>
            <Image style={styles.auth_time_icon} source={require('../assets/images/ic_clock.png')}/>
            <Text style={styles.auth_publish}>{props.createdAt}</Text>

        </View>
    </View>
  )
}

export default PostTrendingItem
const fonts = ['poppins_regular','poppins_medium','poppins_bold','poppins_semi_bold'];
const styles = StyleSheet.create({
    container: {
        // marginHorizontal: 12,
        padding: 8,
        marginTop: 16,
    },
    image: {
        borderRadius: 6,
        height: 183,
        width: '100%',
    },
    topic: {
        marginTop: 8,
        fontFamily: fonts[0],
        color: color.gray_text,
        fontSize: 13,
    },
    title: {
        fontSize: 16,
        fontFamily: fonts[1],
        color: color.black,
        marginTop: 4,
    },
    auth_info: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    auth_avt: {
        width: 20, height: 20,
    },
    auth_name: {
        fontSize: 13,
        fontFamily: fonts[3],
        color: color.gray_text,
        marginLeft: 4,
        marginTop: 2,
    },

    auth_time_icon: {
        marginLeft: 13.17,
    },

    auth_publish: {
        marginLeft: 4,
        fontFamily: fonts[0],
        color: color.gray_text,
        marginTop: 4,
    },

})