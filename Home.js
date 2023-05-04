import {View, Text, TouchableOpacity, Image, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
// import Style from "./HomeStyle";
// import Product from "../product/Product";
import {TextInput} from 'react-native';
// import AsyncStorage from "@react-native-async-storage/async-storage";
// : id, name, price, category, content, image.
const Home = ({navigation, route}) => {
  const [arr, setArr] = useState([
    {
      id: 1,
      name: 'son sữa ILIA',
      price: 200,
      category: 'đồ làm đẹp',
      content: 'sữa rửa mặt với hơn 30 năm uy tín hàng đầu việt nam',
      image:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzS_MGyqAqTBYYzfACa7WllSDBMMy3VptvSIFjJwnODcITbkgo55e5P-VH2Y7waj3w1RA&usqp=CAU',
    },

    {
        id: 2,
        name: 'son sữa ILIA',
        price: 200,
        category: 'đồ làm đẹp',
        content: 'sữa rửa mặt với hơn 30 năm uy tín hàng đầu việt nam',
        image:
          'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzS_MGyqAqTBYYzfACa7WllSDBMMy3VptvSIFjJwnODcITbkgo55e5P-VH2Y7waj3w1RA&usqp=CAU',
      },
  ]);

  const product = {
    id: 3,
    name: 'son sữa ILIA',
    price: 300,
    category: 'đồ làm đẹp',
    content: 'sữa rửa mặt với hơn 30 năm uy tín hàng đầu việt nam',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTzS_MGyqAqTBYYzfACa7WllSDBMMy3VptvSIFjJwnODcITbkgo55e5P-VH2Y7waj3w1RA&usqp=CAU',
  }

  useEffect(() => {
    console.log('hi');
    getData();
    // const unsubscribe = navigation.addListener('focus', () => {
     
    // });
    // return unsubscribe;
  }, [navigation]);

  const getData =  () => {
    // const keyObject = 'object';
    // try {
    //   const value = await AsyncStorage.getItem(keyObject);
    //   if (value !== null) {
    //     const Product = JSON.parse(value);
    //     // console.log(Product);

    //     setArr([...arr, Product]);
    //     // console.log(arr);
    //   }
    // } catch (e) {
    //   console.log(e);
    // }
    console.log(arr)
    setArr([...arr, product])
  };

//   const goToDetail = item => {
//     return navigation.navigate('detail', {
//       id: item.id,
//       name: item.name,
//       price: item.price,
//       category: item.category,
//       content: item.content,
//       image: item.image,
//     });
//   };
//   const goToAddProduct = item => {
//     return navigation.navigate('AddProduct');
//   };
  return (
    <View style={{flex: 1}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 40,
          marginBottom: 20,
          alignItems: 'center',
        }}>
        <Image
          style={{width: 43, height: 43, marginLeft: 20, borderRadius: 10}}
          source={{
            uri: 'https://cdn-icons-png.flaticon.com/512/2354/2354551.png',
          }}
        />
        <Text style={{color: 'silver', fontSize: 20}}>Product</Text>
        <Image
          style={{width: 43, height: 43, marginRight: 20, borderRadius: 10}}
          source={{
            uri: 'https://vienthammys-one.vn/wp-content/uploads/2020/12/avata-mi-mat.jpg',
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginLeft: 20,
          width: '95%',
          justifyContent: 'space-between',
        }}>
        <TextInput
          placeholder="search..."
          style={{
            height: 50,
            backgroundColor: 'white',
            flex: 2,
            borderRadius: 10,
            paddingLeft: 10,
            marginBottom: 20,
          }}
        />

        <TouchableOpacity onPress={() => goToAddProduct()}>
          <Image
            style={{
              width: 30,
              height: 30,
              marginRight: 20,
              marginTop: 10,
              marginLeft: 10,
            }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/32/32563.png',
            }}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        // id={Array.id}
        data={arr}
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => goToDetail(item)}>
                <View style={{marginTop: 20}}>
                    <Text>{item.id}</Text>
                    <Text>{item.name}</Text>
                    <Text>{item.price}</Text>
                </View>
              {/* <Product
                id={item.id}
                name={item.name}
                price={item.price}
                category={item.category}
                content={item.content}
                image={item.image}
              /> */}
            </TouchableOpacity>
          );
        }}
        numColumns={1}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default Home;
