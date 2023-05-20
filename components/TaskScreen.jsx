import React, {useContext, useEffect, useState} from 'react';
import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';
import Markdown from 'react-native-markdown-display';
import {NoteContext} from '../context/NotesContext';
import {Note} from '../models/Note';
import {updateTask} from '../services/tasks';

export function TaskScreen({navigation, route}) {
  const taskId = route.params?.taskId;
  const [currentNote, setCurrentNote] = useState(route.params?.mdContent);
  const handleSave = async () => {
    await updateTask(taskId, currentNote);
  };
  return (
    <>
      <ScrollView style={{flex: 1}}>
        <TextInput
          multiline
          value={currentNote}
          placeholder={'Write your Markdown Note...'}
          inputAccessoryViewID="saveButton"
          cursorColor={'orangered'}
          selectionColor="orange"
          activeUnderlineColor="orangered"
          style={{backgroundColor: 'rgba(255, 69, 0, 0.05)', padding: 10}}
          onChangeText={setCurrentNote}></TextInput>
        <View style={{padding: 10}}>
          <Markdown>{currentNote}</Markdown>
        </View>
      </ScrollView>

      <Button
        title="Save Note"
        color={'orangered'}
        onPress={handleSave}></Button>
    </>
  );
}
