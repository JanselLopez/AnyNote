import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '../utils/constants';

const BASE_AUTH_URL = `${BASE_URL}auth/`;

// Función para iniciar sesión
export async function login (email, password) {
  const response = await fetch (BASE_AUTH_URL + 'login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify ({
      email,
      password,
    }),
  });
  const data = await response.json ();
  if (response.ok) {
    return data.token;
  } else {
    console.error ('Error:', data);
  }
}

// Función para registrar un usuario
export async function register (email, password) {
  const response = await fetch (BASE_AUTH_URL + 'register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify ({
      email,
      password,
    }),
  });
  const data = await response.json ();
  if (response.ok) {
    return data;
  } else {
    console.error ('Error:', data);
  }
}

export const saveToken = async token => {
  try {
    await AsyncStorage.setItem ('token', token);
    console.log ('Token guardado correctamente');
  } catch (error) {
    console.error ('Error al guardar el token:', error);
  }
};

export const getToken = async () => {
  try {
    const token = await AsyncStorage.getItem ('token');
    console.log ('Token obtenido correctamente:', token);
    return token;
  } catch (error) {
    console.error ('Error al obtener el token:', error);
  }
};
