import React from 'react';
import {FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {Notification} from './Notification';
export function NotificationScreen() {
  const notifications =[1, 2, 3, 4, 5, 6, 7, 8, 9].map(item => `Notification - ${item}`);
  return (
    <FlatList
      data={notifications}
      renderItem={Notification}
      keyExtractor={item => `${item.id}_Noti`}></FlatList>
  );
}
