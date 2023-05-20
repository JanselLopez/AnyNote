import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {Text} from 'react-native-paper';
import {Notification} from './Notification';
import {getTasks} from '../services/tasks';
export function NotificationScreen() {
  const [notifications, setNotifications] = useState();
  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setNotifications(
        tasks
          .filter(item => {
            const today = new Date();
            const date = new Date(item.endDate);

            const isToday =
              date.getDate() === today.getDate() &&
              date.getMonth() === today.getMonth() &&
              date.getFullYear() === today.getFullYear();

            return isToday;
          })
          .map(item => `The tasks ${item.title} ends today`),
      );
    };
    fetchTasks();
  }, []);
  return (
    <>
      {notifications && (
        <FlatList
          data={notifications}
          renderItem={Notification}
          keyExtractor={item => `${item}_Noti`}></FlatList>
      )}
    </>
  );
}
