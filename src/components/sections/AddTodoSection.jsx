import { useState } from 'react';
import { toast } from 'react-toastify';
import AddTodoButton from '../buttons/AddTodoButton';
import MainInput from '../inputs/Maininput';

const AddTodoSection = () => {
    const [value, setValue] = useState('');

    function handleAddTodo() {
        toast.success('Todo Added');
    }

    return (
        <div className='flexCenter space-x-4'>
            <MainInput onChange={setValue} value={value} />
            <AddTodoButton onClick={handleAddTodo}>
                <span>Add Todo</span>
            </AddTodoButton>
        </div>
    );
};

export default AddTodoSection;
