import React, {useEffect, useState, useContext} from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TasksScreen} from './TasksScreen';
import {NotificationScreen} from './NotificationScreen';
import {AboutScreen} from './AboutScreen';
import {Task} from '../models/Task';
import {TaskContext} from '../context/TaskContext';
import {Button, Text} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export function HomeScreen({navigation}) {
  const {setData} = useContext(TaskContext);
  useEffect(() => {
    setData(
      [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map(
        item =>
          new Task(
            item,
            `Task ${item}`,
            Math.floor(Math.random() * 3) + 1,
            new Date(),
            '21jansel@gmail.com',
            'Cuba',
          ),
      ),
    );
  }, []);

  return (
    <Tab.Navigator
      activeColor={'orangered'}
      activeTintColor={'orangered'}
      barStyle={{
        backgroundColor: '#fff',
      }}
      tabBarOptions={{
        style: {
          backgroundColor: '#ffffff',
        },
      }}>
      <Tab.Screen
        name="Tasks"
        component={TasksScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Text style={{color, fontSize: 16}}>✔️</Text>
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={NotificationScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Text style={{color, fontSize: 16}}>🔔</Text>
          ),
        }}
      />
      <Tab.Screen
        name="About"
        component={AboutScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Text style={{color, fontSize: 16}}>❓</Text>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default HomeScreen;
