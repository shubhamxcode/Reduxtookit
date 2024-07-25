import { configureStore } from '@reduxjs/toolkit';
import todoReducer from  '../Features/Todo/Todoslicer'
 export const store=configureStore({
    reducer :todoReducer
})