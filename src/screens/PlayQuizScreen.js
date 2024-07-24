import { View, Text, StatusBar } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getQuestionsByQuizId, getQuizById } from '../utils/database';
import { arrayRemove } from '@react-native-firebase/firestore';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';

const PlayQuizScreen = ({navigation, route}) => {

    const [currentQuizId, setCurrentQuizId] = useState(route.params.currentQuizId);
    const[title, setTitle] = useState('');
    const [questions, setQuestions] = useState([]);

    const [correctCount, setCorrectCount] = useState(0);

    const [incorrectCount, setIncorrectCount] = useState(0);

    const shuffleArray = array => {
      for(let i = array.length-1; i>0;i--){
        //Generate random number
        let j = Math.floor(Math.random()*(i+1));

        let temp = array[i];
        array[i] = array[j];

        array[j] = temp;
      }
      return array;
    }

    const getQuizAndQuestionDetails = async () => {

        //Get Quiz
        let currentQuiz = await getQuizById(currentQuizId);
        currentQuiz = currentQuiz.data();
        setTitle(currentQuiz.title);

        //Get Question for current Quiz
        const questions = await getQuestionsByQuizId(currentQuizId)

        //Transform and shuffle options
    let tempQuestions = [];
    await questions.docs.forEach(async res => {
        let question = res.data();

        //Create Single array of all options and shuffle it
        question.allOptions = shuffleArray([
          ...question.incorrect_answers,
          question.correct_answer
        ]);
        await tempQuestions.push(question);
    });
    setQuestions([...tempQuestions]);
    };

    useEffect(() => {
        getQuizAndQuestionDetails();
    }, []);

  return (    
    <SafeAreaView style= {{
      flex: 1,
      position: 'relative',
    }}>
      <StatusBar backgroundColor={COLORS.white} barStyle={'dark-content'}/>

      {/* Top Bar */}
      <View style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: COLORS.white,
        elevation: 4,
      }}>
        {/* Back Button */}

        {/* Title */}

        {/* Correct and incorrect Count */}

          </View>
         

      {/* Questions and options list */}

      {/* Result Model: */  }
        
      
    </SafeAreaView>
  )
}

export default PlayQuizScreen