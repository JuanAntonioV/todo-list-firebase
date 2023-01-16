import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    todos: [
        // {
        //     id: 1,
        //     title: 'Todo 1',
        // },
    ],
    loading: false,
    error: null,
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            state.todos.push(action.payload);
        },
    },
});

export const { addTodo } = todoSlice.actions;

export default todoSlice.reducer;
