import { configureStore } from '@reduxjs/toolkit';

// Modules
import todoReducer from './modules/todoReducer';

export const store = configureStore({
    reducer: {
        todo: todoReducer,
    },
});
