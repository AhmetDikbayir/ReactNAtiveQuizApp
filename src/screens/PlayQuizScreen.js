import { View, Text } from 'react-native'
import React, {useEffect, useState} from 'react'
import { getQuestionsByQuizId, getQuizById } from '../utils/database';

const PlayQuizScreen = ({navigation, route}) => {

    const [currentQuizId, setCurrentQuizId] = useState(route.params.currentQuizId);
    const[title, setTitle] = useState('');
    const [questions, setQuestions] = useState([]);

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
        
    })

    
    };

    useEffect(() => {
        getQuizAndQuestionDetails();
    }, []);

  return (    
    <View>
      <Text>PlayQuizScreen</Text>
    </View>
  )
}

export default PlayQuizScreen