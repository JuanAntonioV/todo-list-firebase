import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearSelectedTodo } from '../../store/modules/todoReducer';
import { addTodo, updateTodo } from '../../store/thunks/todoThunk';
import TodoButton from '../buttons/TodoButton';
import { AiOutlineClear } from 'react-icons/ai';

const AddTodoSection = () => {
    const dispatch = useDispatch();
    const inputRef = useRef();
    const selectedTodo = useSelector((state) => state.todo.selectedTodo);
    const [value, setValue] = useState('');

    function handleAddTodo(e) {
        e.preventDefault();

        if (value === '') {
            toast.error('Please enter a todo');
            return;
        }

        dispatch(addTodo(value));
        setValue('');
        toast.success('Todo Added');
    }

    function handleUpdateTodo(e) {
        e.preventDefault();

        if (value === '') {
            toast.error('Please enter a todo');
            return;
        }

        dispatch(updateTodo({ id: selectedTodo.id, title: value }));
        setValue('');
        toast.success('Todo Updated');
    }

    function clearTodoText() {
        inputRef.current.focus();
        setValue('');
        dispatch(clearSelectedTodo());
    }

    useEffect(() => {
        selectedTodo && setValue(selectedTodo.title);
        return () => setValue('');
    }, [selectedTodo]);

    return (
        <>
            <form
                onSubmit={
                    selectedTodo && selectedTodo.title
                        ? handleUpdateTodo
                        : handleAddTodo
                }
                className='flexCenter space-x-4'
            >
                <input
                    type='text'
                    className='py-3 px-5 rounded-lg border-2 border-blue-500'
                    placeholder='Add Todo Text'
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    ref={inputRef}
                    autoFocus
                    required
                />

                <button
                    type='button'
                    className='py-4 px-4 border border-gray-200 rounded-lg'
                    onClick={clearTodoText}
                >
                    <AiOutlineClear />
                </button>

                <TodoButton type={'submit'}>
                    <span>
                        {selectedTodo && selectedTodo.title ? 'Update' : 'Add'}{' '}
                        Todo
                    </span>
                </TodoButton>
            </form>
        </>
    );
};

export default AddTodoSection;
