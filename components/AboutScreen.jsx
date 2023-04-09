import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Image, Dimensions} from 'react-native';

export function AboutScreen() {
  const windowWidth = Dimensions.get('window').width;
  return (
    <View
      style={[styles.aboutContainer, {height: '100%', display:'flex', justifyContent:'center'}]}>
      <Text style={styles.mainHeader}> AnyNote </Text>
      <Text style={styles.paraStyle}> A flexible tool for your notes 😀 </Text>

      <View>
        <Image style={styles.imgStyle} source={require('../assets/logo.png')} />
      </View>

      <View style={styles.aboutLayout}>
        <Text style={styles.aboutSubHeader}> About me </Text>
        <Text style={[styles.paraStyle, styles.aboutPara]}>
          This application aims to create notes in the most flexible way
          possible for the enjoyment of the end user.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  aboutContainer: {
    display: 'flex',
    alignItems: 'center',
  },

  imgStyle: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  mainHeader: {
    fontSize: 18,
    color: '#344055',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginTop: 50,
    marginBottom: 10,
    fontFamily: 'JosefinSans_700Bold',
  },
  paraStyle: {
    fontSize: 18,
    color: '#7d7d7d',
    paddingBottom: 30,
  },
  aboutLayout: {
    backgroundColor: 'orangered',
    paddingHorizontal: 30,
    marginVertical: 30,
  },
  aboutSubHeader: {
    fontSize: 18,
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: '500',
    marginVertical: 15,
    fontFamily: 'JosefinSans_700Bold',
    alignSelf: 'center',
  },
  aboutPara: {
    color: '#fff',
  },
  menuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },

  iconStyle: {
    width: '100%',
    height: 50,
    aspectRatio: 1,
  },
});
