import AddTodoSection from '../components/sections/AddTodoSection';
import HeaderTitle from '../components/titles/HeaderTitle';
import { useSelector } from 'react-redux';
import TodoItem from '../components/todos/TodoItem';

const TodoPage = () => {
    const todos = useSelector((state) => state.todo.todos);

    return (
        <main className='container mx-auto mt-10 '>
            <div className='max-w-2xl mx-auto'>
                <HeaderTitle />
                <AddTodoSection />

                <div className='mt-8 w-full max-w-md mx-auto h-[300px]'>
                    {todos.length > 0 ? (
                        todos.map((item, index) => (
                            <TodoItem item={item} key={index} />
                        ))
                    ) : (
                        <div className='flexCenter h-full'>
                            <img
                                src='/assets/images/no-todo.svg'
                                alt='No Todo Illustration'
                                className='w-full h-full object-contain'
                            />
                        </div>
                    )}
                </div>

                <button className='flexCenter bg-gray-200 p-3 rounded-lg mx-auto mt-6'>
                    <span className='text-sm'>Clear Tasks</span>
                </button>
            </div>
        </main>
    );
};

export default TodoPage;
