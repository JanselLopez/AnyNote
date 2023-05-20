import React, {useContext, useState, useEffect} from 'react';
import {
  Text,
  Dimensions,
  FlatList,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';
import {CardTask} from './CardTask';
import {Task} from '../models/Task';
import Carousel from 'react-native-snap-carousel';
import {TextInput, Slider} from 'react-native';
import {TaskContext} from '../context/TaskContext';
import {ItemTask} from './ItemTask';
import DatePicker from 'react-native-date-picker';
import {getTasks} from '../services/tasks';

export function TasksScreen({navigation}) {
  const [data, setData] = useState();
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    const fetchTasks = async () => {
      const tasks = await getTasks();
      setData(tasks);
    };
    fetchTasks();
  }, []);
  useEffect(() => {
    selectedId &&
      navigation.navigate({
        name: 'Task',
        params: {
          taskId: selectedId,
          mdContent: data.find(item => selectedId === item.id).mdContent,
        },
        merge: true,
      });
    setSelectedId(undefined);
  }, [selectedId]);

  return (
    <>
      <View>
        <TouchableOpacity
          style={{
            paddingHorizontal: 15,
            paddingVertical: 5,
            marginLeft: 'auto',
          }}
          onPress={() => navigation.navigate('NewTask')}>
          <Text style={{fontSize: 30, fontWeight: 200}}>+</Text>
        </TouchableOpacity>

        {data && (
          <FlatList
            data={data}
            renderItem={({item}) => (
              <CardTask item={item} setSelectedId={setSelectedId}></CardTask>
            )}
            keyExtractor={item => item.id}
            // horizontal
            numColumns={2}
            extraData={selectedId}
            style={{
              width: '100%',
              marginBottom: 50,
            }}
          />
        )}
      </View>
    </>
  );
}
