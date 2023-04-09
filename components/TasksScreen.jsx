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

export function TasksScreen({navigation}) {
  const {data} = useContext(TaskContext);
  const [selectedId, setSelectedId] = useState();
  useEffect(() => {
    selectedId &&
      navigation.navigate({
        name: 'Task',
        params: {taskId: selectedId},
        merge: true,
      });
    setSelectedId(undefined);
  }, [selectedId]);

  return (
    <>
      {data && (
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
        </View>
      )}
    </>
  );
}
