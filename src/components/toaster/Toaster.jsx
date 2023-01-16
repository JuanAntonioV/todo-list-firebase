import { ToastContainer } from 'react-toastify';

const Toaster = () => {
    const contextClass = {
        success: 'bg-green-500',
        error: 'bg-red-600',
        info: 'bg-blue-600',
        warning: 'bg-orange-400',
        default: 'bg-indigo-600',
        dark: 'bg-white-600 font-gray-300',
    };

    return (
        <ToastContainer
            position='bottom-right'
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='colored'
            bodyClassName={''}
            className={'font-poppins text-sm'}
            toastClassName={({ type }) =>
                contextClass[type || 'default'] +
                ' relative flex p-4 min-h-12 my-4 rounded-xl justify-between overflow-hidden cursor-pointer'
            }
        />
    );
};

export default Toaster;
