import {
  Box,
  Heading,
  Text,
  VStack,
  ScrollView,
  Input,
  Pressable,
  IconButton,
  Icon,
  useToast,
  FormControl,
  WarningOutlineIcon,
  CheckIcon,
  CloseIcon,
  Button,
  HStack,
  Divider,
  Flex,
} from 'native-base';
import React, {useState} from 'react';
import {login, register, saveToken} from '../services/auth';

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isEmailValid(email) {
  return emailRegex.test(email);
}

export function Login({navigation}) {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const toast = useToast();
  const showError = () => {
    toast.show({
      title: 'Incorrect fields',
      placement: 'bottom',
      bg: 'red.500',
      color: 'white',
    });
  };
  const handleLogin = async () => {
    if (isEmailValid(email)) {
      const token = await login(email, password);
      if (token) {
        saveToken(token);
        navigation.reset({
          index: 0,
          routes: [{name: 'Home'}],
        });
      }
    } else {
      showError();
    }
  };
  const handleRegister = async () => {
    if (isEmailValid(email)) {
      const user = await register(email, password);
      if (user) {
        toast.show({
          title: `${user.email} registered`,
          placement: 'bottom',
          bg: 'green.500',
          color: 'white',
        });
      } else {
        toast.show({
          title: `Unexpected error`,
          placement: 'bottom',
          bg: 'red.500',
          color: 'white',
        });
      }
    } else {
      showError();
    }
  };
  return (
    <VStack w="full" h="full">
      <Box p={5} w="full" bg="orange.500">
        <Box
          bg={'white'}
          w={'1/4'}
          opacity={0.1}
          h={'1/2'}
          borderBottomRightRadius={'full'}
          position={'absolute'}></Box>
        <Box
          bg={'white'}
          w={'1/2'}
          opacity={0.15}
          h={'full'}
          borderBottomRightRadius={'full'}
          position={'absolute'}></Box>
        <VStack>
          <Heading mb={5} size="2xl" color={'white'}>
            Sign in to your Account
          </Heading>
          <Text opacity={0.5} fontSize="sm" color={'white'}>
            Sign in to your account
          </Text>
        </VStack>
      </Box>
      <ScrollView p={5}>
        <FormControl isRequired isInvalid={email && !isEmailValid(email)}>
          <FormControl.Label>Email</FormControl.Label>
          <Input
            variant="outline"
            placeholder="email"
            onChangeText={setEmail}></Input>
          <FormControl.ErrorMessage leftIcon={<WarningOutlineIcon size="xs" />}>
            Invalid Email
          </FormControl.ErrorMessage>
        </FormControl>
        <FormControl isRequired py={5}>
          <FormControl.Label>Password</FormControl.Label>
          <Input
            variant="outline"
            placeholder="password"
            onChangeText={setPassword}
            type={isPasswordVisible ? 'text' : 'password'}
            InputRightElement={
              <IconButton
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                icon={
                  isPasswordVisible ? <CloseIcon /> : <CheckIcon />
                }></IconButton>
            }></Input>
          <FormControl.HelperText ml={'auto'}>
            Forget Password?
          </FormControl.HelperText>
        </FormControl>
        <Button onPress={handleLogin} bg="orange.500">
          Login
        </Button>
        <HStack alignItems={'center'} px={5} justifyContent={'center'}>
          <Text>Do you not have an account yet?</Text>
          <Button variant={'link'} onPress={handleRegister}>
            Register
          </Button>
        </HStack>
      </ScrollView>
    </VStack>
  );
}
