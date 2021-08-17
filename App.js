import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
} from 'react-native';

import data from './dummydata.json';

let arr = [
  '김유태',
  '이창욱',
  '심평섭',
  '박주안',
  '허지행',
  '박진',
  '김인철',
  '황아영',
  '이정윤',
  '마이크',
];
const shuffle = array => {
  for (let i = 0; i < array.length; i++) {
    let j = Math.floor(Math.random() * (i + 1));
    const x = array[i];
    array[i] = array[j];
    array[j] = x;
  }
  return array;
};

shuffle(arr);

console.log(111, arr);
const App = () => {
  const renderRow = ({item, index}) => {
    return (
      <View
        style={{
          flexDirection: 'column',
          width: Dimensions.get('window').width / 2 - 40,
          marginLeft: 25,
          marginBottom: 60,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={require('./image/recycle.png')}
          style={{
            width: '100%',
            height: 91,
            resizeMode: 'contain',
            marginBottom: 10,
          }}
        />
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {item.clean_name + ' :'}
        </Text>
      </View>
    );
  };
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginRight: 20,
          marginTop: 20,
        }}>
        <Image
          source={require('./image/1.png')}
          style={{width: 100, height: 100, resizeMode: 'contain'}}
        />
        <Text style={{fontSize: 24, fontWeight: 'bold'}}>청소 랜덤 뽑기</Text>
      </View>

      <TouchableOpacity
        style={{
          width: Dimensions.get('window').width - 80,
          marginLeft: 40,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
          height: 50,
          borderRadius: 10,
          backgroundColor: '#27A1FF',
          marginBottom: 60,
        }}>
        <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>
          랜덤 뽑기
        </Text>
      </TouchableOpacity>

      <FlatList data={data.type} renderItem={renderRow} numColumns={2} />
    </>
  );
};

export default App;
