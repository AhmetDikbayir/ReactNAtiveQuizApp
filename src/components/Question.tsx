import React from 'react';
import {Text, View, TouchableOpacity, Alert} from 'react-native';
import {styles} from '../styles/StyleSheetAPI';

export default function Question() {
  const handlePress = () => {
    Alert.alert('Button Pressed!');
  };

  return (
    <View>
      <Text style={[styles.lightBlueBg, styles.box]}>Question is here</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.choices}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text>Choice 1</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.choices}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text>Choice 2</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={styles.choices}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text>Choice 3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.choices}>
          <TouchableOpacity style={styles.button} onPress={handlePress}>
            <Text>Choice 4</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
