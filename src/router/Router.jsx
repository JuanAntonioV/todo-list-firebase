import { Route, Routes } from 'react-router-dom';

// Pages
import TodoPage from '../pages/TodoPage';

const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<TodoPage />} />
        </Routes>
    );
};

export default Router;
