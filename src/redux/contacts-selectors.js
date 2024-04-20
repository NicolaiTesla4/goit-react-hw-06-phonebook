import { createAction } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

// Agrega un parámetro `userId` para identificar qué usuario debe eliminarse
export const deleteUser = createAction('users/deleteUser', userId => ({
  payload: {
    userId
  }
}));

export const addUser = createAction('users/addUser', (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  }
}));

export const filterUser = createAction('users/filterUser', filter => ({
  payload: {
    filter
  }
}));
