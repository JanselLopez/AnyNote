import React, {} from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {TasksScreen} from './TasksScreen';
import {NotificationScreen} from './NotificationScreen';
import {AboutScreen} from './AboutScreen';
import {Text} from 'react-native';

const Tab = createMaterialBottomTabNavigator();

export function HomeScreen() {

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
