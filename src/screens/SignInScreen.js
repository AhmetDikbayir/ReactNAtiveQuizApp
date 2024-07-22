import React, { useState } from 'react';
import {Text, View} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../constants/theme';
import FormInput from '../components/shared/FormInput';
import FormButton from '../components/shared/FormButton';
import { signIn } from '../utils/auth';

export default function SignInScreen({navigation}) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleOnSubmit = () => {
        if(email!=='' && password!=''){
            signIn(email, password);
        }
    }
  return (
    <SafeAreaView
    style={{
        backgroundColor: COLORS.white,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding: 20,
    }}>
        {/* Header*/}
        <Text style={{
            fontSize: 24,
            fontWeight: 'bold',
            color: COLORS.black,
            marginVertical: 10,

        }}>Sign In</Text>

        {/* Email*/}
        <FormInput 
            labelText='Email' 
            placeholderText='Enter your email'
            onChangeText={value=> setEmail(value)}
            value={email}
            keyboardType={'email-address'}/>

        {/* Password*/}
        <FormInput 
            labelText='Password' 
            placeholderText='Enter your password'
            onChangeText={value=> setPassword(value)}
            value={password}
            secureTextEntry={true}/>

        {/* Submit Button*/}
        <FormButton 
            labelText='Submit'
            handleOnPress={handleOnSubmit}
            style={{width: '100%'}}/>

        {/* Footer*/}
        <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
            <Text>Don't have an account</Text>
            <Text style={{marginLeft: 4, color: COLORS.primary}}
            onPress={() => navigation.navigate('SignUpScreen')}>Create account</Text>
        </View>

    </SafeAreaView>
  );
}
