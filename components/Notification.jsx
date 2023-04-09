import React from 'react';
import {View, Text} from 'react-native';
import {Image} from 'react-native';

export function Notification({item}) {
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          padding: 10,
          margin: 5,
          gap: 10,
        }}>
        <Image
          source={require('../assets/noti_icon.png')}
          style={{width: 25, height: 25}}></Image>
        <Text style={{fontWeight: '400', fontSize: 16, color: 'black'}}>
          {item}
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'black',
          height: 0.5,
          opacity: 0.4,
        }}></View>
    </>
  );
}
