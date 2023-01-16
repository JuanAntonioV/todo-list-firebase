import { createSlice } from '@reduxjs/toolkit';
import {
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    clearTodo,
} from '../thunks/todoThunk';

const initialState = {
    todos: [],
    loading: false,
    error: null,
    selectedTodo: null,
};

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        selectTodo: (state, { payload }) => {
            state.selectedTodo = payload;
        },
        clearSelectedTodo: (state) => {
            state.selectedTodo = null;
        },
    },
    extraReducers: (builder) => {
        // FETCH TODO BUILDERS
        builder.addCase(fetchTodos.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(fetchTodos.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.todos = payload;
        });
        builder.addCase(fetchTodos.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        // ADD TODO BUILDERS
        builder.addCase(addTodo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(addTodo.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.todos.push(payload);
        });
        builder.addCase(addTodo.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        // UPDATE TODO BUILDERS
        builder.addCase(updateTodo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(updateTodo.fulfilled, (state, { payload }) => {
            state.loading = true;

            const exist = state.todos.some((todo) => todo.id === payload.id);
            if (exist) {
                state.todos.find((todo) => todo.id === payload.id).title =
                    payload.title;
            }

            state.selectedTodo = null;
            state.loading = false;
        });
        builder.addCase(updateTodo.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        // DELETE TODO BUILDERS
        builder.addCase(deleteTodo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(deleteTodo.fulfilled, (state, { payload }) => {
            state.loading = true;

            const exist = state.todos.some((todo) => todo.id === payload.id);
            if (exist) {
                state.todos = state.todos.filter(
                    (todo) => todo.id !== payload.id
                );
            }

            state.selectedTodo = null;
            state.loading = false;
        });
        builder.addCase(deleteTodo.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });

        // CLEAR TODO BUILDERS
        builder.addCase(clearTodo.pending, (state) => {
            state.loading = true;
        });
        builder.addCase(clearTodo.fulfilled, (state) => {
            state.loading = true;
            state.todos = [];
            state.loading = false;
        });
        builder.addCase(clearTodo.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        });
    },
});

export const { selectTodo, clearSelectedTodo } = todoSlice.actions;
export default todoSlice.reducer;
