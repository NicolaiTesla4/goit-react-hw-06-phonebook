import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './contactsSlices';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';


const persistConfig = {
    key: "root",
    version: 1,
    storage
};

const reducer = combineReducers({
    users: usersReducer
})

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
    reducer: persistedReducer,
})