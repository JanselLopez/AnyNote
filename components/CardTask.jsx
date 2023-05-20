import React, {useContext} from 'react';
import {TouchableOpacity, View, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';

export function CardTask({item, index, setSelectedId}) {
  console.log('ITEM', item);
  const {id, title, importance, endDate, owner, place, mdContent} = item;
  const end_date = new Date(endDate);
  return (
    <TouchableOpacity
      onPress={() => setSelectedId(id)}
      style={{
        backgroundColor: getColor(importance),
        shadowColor: getColor(importance),
        elevation: 10,
        padding: 10,
        borderRadius: 15,
        width: Dimensions.get('screen').width * 0.45,
        height: Dimensions.get('screen').width * 0.45,
        margin: 9,
      }}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
          }}
          numberOfLines={1}>
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
        <Text numberOfLines={6}>{mdContent}</Text>
      </View>
    </TouchableOpacity>
  );
}
function getColor(importance) {
  return importance == 3
    ? 'lightcoral'
    : importance == 2
    ? 'khaki'
    : 'lightskyblue';
}
