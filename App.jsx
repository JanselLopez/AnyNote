/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from './components/HomeScreen';
import {Login} from './components/Login';
import {NewTaskScreen} from './components/NewTaskScreen';
import {TaskContext} from './context/TaskContext';
import {NoteContext} from './context/NotesContext';
import {TaskScreen} from './components/TaskScreen';
const Stack = createStackNavigator();

function App() {
  const [data, setData] = useState();
  const [notes, setNotes] = useState([]);
  return (
    <TaskContext.Provider value={{data, setData}}>
      <NoteContext.Provider value={{notes, setNotes}}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen
              name="Home"
              component={HomeScreen}
              options={{headerShown: false}}
            />
            <Stack.Screen name="NewTask" component={NewTaskScreen} />
            <Stack.Screen name="Task" component={TaskScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </NoteContext.Provider>
    </TaskContext.Provider>
  );
}

export default App;
