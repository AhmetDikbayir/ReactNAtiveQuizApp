import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function StyleSheetAPI() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Hello World</Text>
        </View>
    );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'plum',
    padding: 60,
  },

  title:{
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: 'lightgreen',
  },

  box: {
    width: 200,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    borderRadius:20,
    backgroundColor:'pink',
  },

  button: {
    padding: 10,
    borderRadius: 5,
  },

  lightBlueBg: {
    backgroundColor: 'lightblue',
  },

  lightGreenBg: {
    backgroundColor: 'lightgreen',
  },

  choices: {
    backgroundColor:'lightgreen',
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    borderRadius: 50,
  },

  


});