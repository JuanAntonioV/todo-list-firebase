import AddTodoSection from '../components/sections/AddTodoSection';
import HeaderTitle from '../components/titles/HeaderTitle';
import { useDispatch, useSelector } from 'react-redux';
import TodoItem from '../components/todos/TodoItem';
import { clearTodo, deleteTodo, fetchTodos } from '../store/thunks/todoThunk';
import { useEffect } from 'react';
import LoadingHandler from '../components/handler/LoadingHandler';
import { toast } from 'react-toastify';
import NoTodoHandler from '../components/handler/NoTodoHandler';
import { selectTodo } from '../store/modules/todoReducer';

const TodoPage = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todo.todos);
    const loading = useSelector((state) => state.todo.loading);

    useEffect(() => {
        dispatch(fetchTodos());
    }, []);

    function editHandler(item) {
        dispatch(selectTodo(item));
    }

    function deleteHandler(id) {
        dispatch(deleteTodo(id));
        toast.success('Todo Deleted');
    }

    function clearAllTodo() {
        dispatch(clearTodo());
        toast.success('Todo Cleared');
    }

    return (
        <main className='container mx-auto mt-10 '>
            <div className='max-w-2xl mx-auto'>
                <HeaderTitle />
                <AddTodoSection />

                <div className='mt-8 w-full max-w-md mx-auto h-[300px] overflow-y-scroll px-6'>
                    {loading ? (
                        <LoadingHandler loading={loading} />
                    ) : !loading && todos.length > 0 ? (
                        todos.map((item) =>
                            item ? (
                                <TodoItem
                                    key={item.id}
                                    item={item}
                                    editAction={editHandler}
                                    deleteAction={deleteHandler}
                                />
                            ) : (
                                <LoadingHandler loading={loading} />
                            )
                        )
                    ) : (
                        <NoTodoHandler />
                    )}
                </div>

                <button
                    className='flexCenter bg-gray-200 p-3 rounded-lg mx-auto mt-6'
                    onClick={clearAllTodo}
                >
                    <span className='text-sm'>Clear Tasks</span>
                </button>
            </div>
        </main>
    );
};

export default TodoPage;
