import { useSelector } from 'react-redux';

const App = () => {
    const todo = useSelector((state) => state.todos.loading);

    return (
        <div className='app'>
            <h1 className='flexCenter'>Hello World</h1>

            {todo && <h1>Loading...</h1>}
        </div>
    );
};

export default App;
