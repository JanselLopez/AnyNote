import React, {useContext, useState} from 'react';
import {Text, Dimensions, FlatList, View, Button} from 'react-native';
import {CardTask} from './CardTask';
import {Task} from '../models/Task';
import Carousel from 'react-native-snap-carousel';
import {TextInput, Slider, ToastAndroid} from 'react-native';
import {TaskContext} from '../context/TaskContext';
import {ItemTask} from './ItemTask';
import DatePicker from 'react-native-date-picker';
import {createTask} from '../services/tasks';
export function NewTaskScreen({...props}) {
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState();
  const [place, setPlace] = useState();
  const [importance, setImportance] = useState(1);

  function handleAccept() {
    if (title && date && place) {
      const newTask = new Task(
        0,
        title,
        importance ? importance + 1 : 1,
        date,
        '',
        place,
        'Write your notes',
      );
      createTask(newTask);
      ToastAndroid.show('Task created', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Incorrect values', ToastAndroid.SHORT);
    }
  }
  return (
    <View
      style={{
        padding: 10,
        borderRadius: 10,
        height: '100%',
        display: 'flex',
        gap: 20,
      }}>
      <TextInput
        placeholder="title"
        onChangeText={setTitle}
        style={{
          paddingVertical: 2,
        }}></TextInput>
      <TextInput
        placeholder="place"
        onChangeText={setPlace}
        style={{
          paddingVertical: 2,
        }}></TextInput>
      <Text style={{paddingTop: 2}}>Importance: </Text>
      <Slider maximumValue={2} step={1} onValueChange={setImportance}></Slider>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingVertical: 2,
        }}>
        <Text>{date.toLocaleDateString()}</Text>
        <Button
          title="✛"
          onPress={() => setOpen(true)}
          style={{padding: 0}}></Button>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
        }}>
        <Button
          title={'Cancel'}
          color={'tomato'}
          onPress={() => setModal(false)}></Button>
        <Button
          title={'Accept'}
          color={'seagreen'}
          onPress={handleAccept}></Button>
      </View>
      <DatePicker
        modal
        open={open}
        date={date}
        minimumDate={new Date()}
        onConfirm={date => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
    </View>
  );
}
