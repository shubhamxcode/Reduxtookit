import { configureStore } from '@reduxjs/toolkit';
import todoreducer from './Features/Todo/todoslice'
const store=configureStore({
    reducer:todoreducer
})