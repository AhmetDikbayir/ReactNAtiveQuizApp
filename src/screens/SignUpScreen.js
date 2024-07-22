import React, {useState} from 'react';
import {Text, View, Alert} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { signUp } from '../utils/auth';


export default function SignUpScreen({navigation}) {

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[confirmPassword, setConfirmPassword] = useState('');

  const handleOnSubmit = () => {
    if(email!=='' && password!=='' && confirmPassword!==''){
      if(password===confirmPassword){
        //Sign up
        signUp(email, password);
      }else{
        //Wrong confirm password
        Alert.alert('Password did not match!');
      }
    }
  }
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
      }}>

        {/* Header*/}
        <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: COLORS.black,
            marginVertical: 32,
        }}>Sign Up</Text>
        {/* Email*/}
        <FormInput 
          labelText='Email' 
          placeholderText='Enter your email' 
          onChangeText={value => setEmail(value)} 
          value={email}
          keyboardType={'email-address'}/>

        {/* Password*/}

        <FormInput 
            labelText='Password' 
            placeholderText='Enter your password'
            onChangeText={value=> setPassword(value)}
            value={password}
            secureTextEntry={true}/>

        {/* Confirm Password*/}

        <FormInput 
            labelText='Confirm Password' 
            placeholderText='Enter your password again'
            onChangeText={value=> setConfirmPassword(value)}
            value={confirmPassword}
            secureTextEntry={true}/>

        {/* Submit Button*/}
        <FormButton 
          labelText='Sign Up' 
          handleOnPress={handleOnSubmit} 
          style={{width: '100%'}}
        />

        {/* Footer*/}
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Text>Already have an account?</Text>
            <Text style={{marginLeft: 4, color: COLORS.primary}}
            onPress={() => navigation.navigate('SignInScreen')}>Sign In</Text>
        </View>

      </SafeAreaView>
  );
}
