import {Text, ToastAndroid} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {COLORS} from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import {createQuiz} from '../utils/database';

const CreateQuizScreen = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const navigation = useNavigation();

  const handleQuizSave = async () => {
    try {
      const currentQuizId = Math.floor(
        100000 + Math.random() * 9000,
      ).toString();

      // Save to fireStore
      await createQuiz(currentQuizId, title, description);

      // Navigate to Add Question screen
      navigation.navigate('AddQuestionScreen', {
        currentQuizId: currentQuizId,
        currentQuizTitle: title,
      });

      // Reset
      setTitle('');
      setDescription('');
      ToastAndroid.show('Quiz Saved!', ToastAndroid.SHORT);
    } catch (error) {
      console.error('Error saving quiz: ', error);
      ToastAndroid.show(
        'Failed to save quiz. Please try again.',
        ToastAndroid.LONG,
      );
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        padding: 20,
      }}>
      <Text
        style={{
          fontSize: 20,
          textAlign: 'center',
          marginVertical: 20,
          fontWeight: 'bold',
          color: COLORS.black,
        }}>
        Create Quiz
      </Text>
      <FormInput
        labelText="Title"
        placeholderText="Enter quiz title"
        onChangeText={val => setTitle(val)}
        value={title}
      />
      <FormInput
        labelText="Description"
        placeholderText="Enter quiz description"
        onChangeText={val => setDescription(val)}
        value={description}
      />
      <FormButton labelText="Save Quiz" handleOnPress={handleQuizSave} />
    </SafeAreaView>
  );
};

export default CreateQuizScreen;
