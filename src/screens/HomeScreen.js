import React, {useEffect, useState} from 'react';
import {Text, View, TouchableOpacity, Alert, Image, StatusBar} from 'react-native';
import {styles} from '../styles/StyleSheetAPI';
import { signOut } from '../utils/auth';
import FormButton from '../components/shared/FormButton';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';
import { FlatList } from 'react-native-gesture-handler';
import { getQuizzes } from '../utils/database';

export default function HomeScreen({navigation}) {

  const [allQuizzes, setAllQuizzes] = useState([]);
  const [refreshing, setRefreshing] = useState(false);

  const getAllQuizzes = async () => {
    setRefreshing(true);
    const quizzes = await getQuizzes();

    //Transform quiz data
    let tempQuizzes = [];
    await quizzes.docs.forEach( async quiz => {
      await tempQuizzes.push({id: quiz.id, ...quiz.data()})
    })
    await setAllQuizzes([...tempQuizzes]);
    setRefreshing(false);
  };

  useEffect(() => {
    getAllQuizzes();
  }, []);

  return (
    <SafeAreaView style={{
        flex: 1,
        position: 'relative',
        backgroundColor: COLORS.background,
    }}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          elevation: 4,
          marginHorizontal: 20,
          marginVertical: 10,
        }}>
          <Text style={{fontSize: 20, color: COLORS.black}}>Quiz App</Text>
          <Text 
            style={{
              fontSize: 20,
              padding: 10,
              color: COLORS.error}}>Log Out</Text>
          </View>

          {/* Quiz List */}
          <FlatList
          data={allQuizzes}
          onRefresh={getAllQuizzes}
          refreshing={refreshing}
          showsVerticalScrollIndicator={false}
          style={{
            paddingVertical: 20,
          }}

          renderItem={({item: quiz}) => (
            <View 
              style={{
                padding: 20,
                borderRadius: 5,
                marginVertical: 5,
                marginHorizontal: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                backgroundColor: COLORS.white,
                elevation: 2,
            }}>
              <View style={{flex:1, paddingRight: 10}}>
                <Text style={{fontSize: 18, color: COLORS.black}}>{quiz.title}</Text>
                {
                  quiz.description!= '' ? <Text style={{opacity: 0.5}}>{quiz.description}</Text> : null
                }
              </View>
              <TouchableOpacity
                style={{
                  paddingVertical: 10,
                  paddingHorizontal: 20,
                  borderRadius:50,
                  backgroundColor: COLORS.primary+'20',
                }}
                onPress={() => navigation.navigate('PlayQuizScreen', {quizId: quiz.id})}>
                  <Text style={{color: COLORS.primary}}>Play</Text>
              </TouchableOpacity>
            </View>
          )}/>
          {/* Button */}
          <FormButton labelText='Create Quiz'
            style={{
              position: 'absolute',
              bottom: 20,
              right: 20,
              borderRadius: 50,
              paddingHorizontal: 30,
            }}
            handleOnPress={() => navigation.navigate('CreateQuizScreen')} />
    </SafeAreaView>
  );
}
