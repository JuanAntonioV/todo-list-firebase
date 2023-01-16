import { useSelector } from 'react-redux';
import Toaster from './components/toaster/Toaster';
import Router from './router/Router';

const App = () => {
    return (
        <div className='app font-poppins antialiased'>
            <Router />
            <Toaster />
        </div>
    );
};

export default App;
