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

export function TaskScreen({navigation, route}) {
  const {notes, setNotes} = useContext(NoteContext);
  const [currentNote, setCurrentNote] = useState(
    new Note(notes ? notes.length : 0, '', route.params?.taskId),
  );
  function handleSave() {
    let aux = {
      ...currentNote,
    };
    console.log(aux);
    setNotes([...notes.filter(note => note.id != aux.id), aux]);
  }
  useEffect(() => {
    let aux = notes
      ? notes.find(note => note.task == route.params?.taskId)
      : undefined;
    if (aux) {
      setCurrentNote(aux);
    }
  }, [notes]);
  return (
    <>
      <ScrollView style={{flex: 1}}>
        <TextInput
          multiline
          value={currentNote.content}
          placeholder={'Write your Markdown Note...'}
          inputAccessoryViewID="saveButton"
          cursorColor={'orangered'}
          selectionColor="orange"
          activeUnderlineColor="orangered"
          style={{backgroundColor: 'rgba(255, 69, 0, 0.05)', padding: 10}}
          onChangeText={value =>
            setCurrentNote(new Note(currentNote.id, value, currentNote.task))
          }></TextInput>
        <View style={{padding: 10}}>
          <Markdown>{currentNote.content}</Markdown>
        </View>
      </ScrollView>

      <Button
        title="Save Note"
        color={'orangered'}
        onPress={handleSave}></Button>
    </>
  );
}
