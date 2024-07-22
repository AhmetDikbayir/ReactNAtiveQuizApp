import auth from '@react-native-firebase/auth';
import { ToastAndroid } from 'react-native';

export const signIn = (email, password) => {
    auth().signInWithEmailAndPassword(email, password).then(()=>{
        ToastAndroid.show('Login Successful', ToastAndroid.SHORT);
    }).catch((error)=>{
        console.log(error);
    });
};

export const signUp = (email, password) => {
    auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
        ToastAndroid.show('User account created & signed in!', ToastAndroid.SHORT);
    })
    .catch(error => {
            console.log(error);
    });
};

export const signOut = () => {
    auth()
        .signOut()
        .then(() => {
            ToastAndroid.show('Signed out!', ToastAndroid.SHORT);
    });
};
        