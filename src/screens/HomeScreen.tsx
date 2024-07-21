import React from 'react';
import {Text, View, TouchableOpacity, Alert, Image} from 'react-native';
import {styles} from '../styles/StyleSheetAPI';

export default function HomeScreen() {
  return (
    <View>
      <Image
        source={require('../../assets/images/quizApp.png')}
        style={{width: 500, height: 170, marginBottom: 15}}
      />

      <View style={{padding: 50}}>
        <Text
          style={{
            textAlign: 'center',
            color: 'magenta',
            fontSize: 20,
            fontWeight: 600,
          }}>
          QUIZ RULES
        </Text>

        <View
          style={{
            padding: 10,
            backgroundColor: 'lightblue',
            borderRadius: 6,
            margin: 35,
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text>Her doğru soru 5 puan değerindedir.</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
