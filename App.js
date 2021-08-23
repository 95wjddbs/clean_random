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

function happy() {
  console.log('h');
}

const App = () => {
  const [status, setStatus] = useState(false);

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
      <ScrollView style={{backgroundColor: '#fff'}}>
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
            marginBottom: 12,
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
              borderWidth: 2,
              borderColor: '#27A1FF',
            }}>
            <Text style={{color: '#27A1FF', fontSize: 17, fontWeight: 'bold'}}>
              결과 보기
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            marginBottom: 40,
            flexDirection: 'column',
            justifyContent: 'flex-start',
            marginLeft: 16,
          }}>
          <Text style={{fontSize: 13, color: '#333333'}}>
            ※ 분리수거는 자신이 해당하는 요일에 퇴근하기전
          </Text>
          <Text style={{fontSize: 13, color: '#333333', marginLeft: 10}}>
            가득 차 있는 분리수거 통을 비우면 됩니다.
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#CCCCCC',
              marginLeft: 10,
              marginTop: 4,
            }}>
            ex)퇴근 전 '플라스틱'통과 '쓰레기'통이 가득 차있으면 두개 다
            비우시면 됩니다
          </Text>
          <Text
            style={{
              fontSize: 12,
              color: '#CCCCCC',
              marginLeft: 10,
            }}>
            ex2)비울 지 말지 애매하면 청소감독에게 문의
          </Text>
        </View>

        <FlatList
          data={data.type}
          renderItem={renderRow}
          numColumns={2}
          keyExtractor={data => data.clean_name.toString()}
        />
      </ScrollView>
    </>
  );
};

export default App;
