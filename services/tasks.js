import {BASE_URL} from '../utils/constants';
import {getToken} from './auth';

const BASE_TASKS_URL = `${BASE_URL}tasks/`;

export async function getTasks () {
  const token = await getToken ();
  const response = await fetch (BASE_TASKS_URL, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json ();
  if (response.ok) {
    return data.tasks;
  } else {
    throw new Error (data);
  }
}

// Función para crear una nueva tarea
export async function createTask (task) {
  console.log (task);
  const token = await getToken ();
  console.log (token);
  const response = await fetch (BASE_TASKS_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify (task),
  });
  const data = await response.json ();
  if (response.ok) {
    return data;
  } else {
    throw new Error (data);
  }
}

// Función para actualizar una tarea existente
export async function updateTask (id, mdContent) {
  const token = await getToken ();
  const response = await fetch (`${BASE_TASKS_URL}?id=${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify ({
      mdContent,
    }),
  });
  const data = await response.json ();
  if (response.ok) {
    return data;
  } else {
    throw new Error (data);
  }
}

// Función para eliminar una tarea existente
export async function deleteTask (id) {
  const token = await getToken ();
  const response = await fetch (`${BASE_TASKS_URL}?id=${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json ();
  if (response.ok) {
    return data;
  } else {
    throw new Error (data);
  }
}
