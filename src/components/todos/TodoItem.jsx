import { BiEdit, BiTrash } from 'react-icons/bi';

const TodoItem = ({ item }) => {
    return (
        <div className='flexBetween py-3 border-b border-gray-200'>
            <p className='text-sm'>{item.title}</p>

            <div className='flexCenter space-x-2'>
                <button className='flexCenter bg-blue-500 p-3 rounded-lg'>
                    <BiEdit color='#fff' size={18} />
                </button>
                <button className='flexCenter bg-red-500 p-3 rounded-lg'>
                    <BiTrash color='#fff' size={18} />
                </button>
            </div>
        </div>
    );
};

export default TodoItem;
