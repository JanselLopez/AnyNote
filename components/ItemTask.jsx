import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from 'react-native-paper';
export function ItemTask({item, index}) {
  const {title, importance, end_date, owner, place} = item;
  return (
    <TouchableOpacity
      style={{
        padding: 10,
      }}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
          }}
          numberOfLines={2}>
          {title}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{opacity: 0.6}}>{place}</Text>
          <View style={{width: 10}}></View>
          <Text style={{opacity: 0.6}}>{end_date.toLocaleDateString()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
