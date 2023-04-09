import React, {useState} from 'react';
import LoginScreen from 'react-native-login-screen';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isEmailValid(email) {
  return emailRegex.test(email);
}

export function Login({navigation}) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  return (
    <LoginScreen
      logoImageSource={require('../assets/logo.png')}
      onLoginPress={() => {
        if (isEmailValid(email)) {
          navigation.reset({
            index: 0,
            routes: [{name: 'Home'}],
          });
        }
      }}
      onSignupPress={() => {}}
      onEmailChange={setEmail}
      onPasswordChange={setPassword}
      loginButtonStyle={{backgroundColor: 'orangered'}}
      disableSocialButtons
    />
  );
}
