import React, {useContext} from 'react';
import {TouchableOpacity, View, Dimensions} from 'react-native';
import {Text} from 'react-native-paper';
import {NoteContext} from '../context/NotesContext';
export function CardTask({item, index, setSelectedId}) {
  const {id, title, importance, end_date, owner, place} = item;
  const {notes} = useContext(NoteContext);
  return (
    <TouchableOpacity
      onPress={() => setSelectedId(id)}
      style={{
        backgroundColor: getColor(importance),
        shadowColor: getColor(importance),
        elevation: 10,
        padding: 10,
        borderRadius: 15,
        width: Dimensions.get('screen').width * 0.45,
        height: Dimensions.get('screen').width * 0.45,
        margin: 9,
      }}>
      <View>
        <Text
          style={{
            fontWeight: 'bold',
          }}
          numberOfLines={1}>
          {title}
        </Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{opacity: 0.6}}>{place}</Text>
          <View style={{width: 10}}></View>
          <Text style={{opacity: 0.6}}>{end_date.toLocaleDateString()}</Text>
        </View>
        <Text numberOfLines={6}>
          {notes.find(note => note.task == id)?.content}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
function getColor(importance) {
  return importance == 3
    ? 'lightcoral'
    : importance == 2
    ? 'khaki'
    : 'lightskyblue';
}
