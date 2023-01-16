import { db } from '../../firebase';
import {
    collection,
    getDocs,
    addDoc,
    doc,
    updateDoc,
    deleteDoc,
} from 'firebase/firestore';
import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTodos = createAsyncThunk('todo/fetchTodos', async (_) => {
    try {
        const todoColection = collection(db, 'todos');
        const res = await getDocs(todoColection);
        const convertedRes = res.docs.map((item) => ({
            ...item.data(),
            id: item.id,
        }));
        return convertedRes;
    } catch (error) {
        console.log(error);
    }
});

export const addTodo = createAsyncThunk('todo/addTodo', async (todo) => {
    try {
        const todoColection = collection(db, 'todos');
        const payload = {
            title: todo,
        };
        const res = await addDoc(todoColection, payload);
        if (res.error) {
            throw new Error(res.error);
        }

        return { ...payload, id: res.id };
    } catch (error) {
        console.log(error);
    }
});

export const updateTodo = createAsyncThunk('todo/updateTodo', async (todo) => {
    try {
        const todoDoc = doc(db, 'todos', todo.id);
        const payload = {
            id: todo.id,
            title: todo.title,
        };

        await updateDoc(todoDoc, payload);
        return payload;
    } catch (error) {
        console.log(error);
    }
});

export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id) => {
    try {
        const todoDoc = doc(db, 'todos', id);
        const payload = {
            id: id,
        };

        await deleteDoc(todoDoc, payload);
        return payload;
    } catch (error) {
        console.log(error);
    }
});

export const clearTodo = createAsyncThunk('todo/clearTodo', async (_) => {
    try {
        const todoColection = collection(db, 'todos');
        const res = await getDocs(todoColection);
        const convertedRes = res.docs.map((item) => ({
            ...item.data(),
            id: item.id,
        }));

        convertedRes.forEach(async (todo) => {
            const todoDoc = doc(db, 'todos', todo.id);
            await deleteDoc(todoDoc);
        });
    } catch (error) {
        console.log(error);
    }
});
