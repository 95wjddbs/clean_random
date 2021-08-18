import React, {useEffect, useState} from 'react';
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

function shuffle(array) {
  array?.sort(() => Math.random() - 0.5);
}
const numbers = [
  '김유태',
  '박주안',
  '이창욱',
  '허지행',
  '심평섭',
  '박진',
  '김인철',
  '황아영',
  '이정윤',
  '마이크',
];
shuffle(numbers);
console.log(numbers);

const App = () => {
  const [status, setStatus] = useState(false);

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
          source={{uri: item.img}}
          style={{
            width: '100%',
            height: 91,
            resizeMode: 'contain',
            marginBottom: 10,
          }}
        />
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>
          {item.clean_name + ' :'}
          {status === true ? <Text>{numbers[index]}</Text> : null}
        </Text>
      </View>
    );
  };
  return (
    <>
      <View style></View>
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

      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          onPress={() => shuffle(numbers)}
          style={{
            width: Dimensions.get('window').width / 2 - 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            height: 50,
            borderRadius: 10,
            backgroundColor: '#27A1FF',
            marginBottom: 60,
          }}>
          <Text style={{color: '#fff', fontSize: 17, fontWeight: 'bold'}}>
            랜덤 셔플
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setStatus(prev => !prev)}
          style={{
            width: Dimensions.get('window').width / 2 - 40,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 40,
            height: 50,
            borderRadius: 10,
            backgroundColor: '#fff',
            marginBottom: 60,
            borderWidth: 2,
            borderColor: '#27A1FF',
          }}>
          <Text style={{color: '#27A1FF', fontSize: 17, fontWeight: 'bold'}}>
            결과 보기
          </Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={data.type}
        renderItem={renderRow}
        numColumns={2}
        keyExtractor={data => data.clean_name.toString()}
      />
    </>
  );
};

export default App;
