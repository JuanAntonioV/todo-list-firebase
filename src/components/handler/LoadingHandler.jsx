import { PulseLoader } from 'react-spinners';

const LoadingHandler = ({ loading }) => {
    return (
        <div className='flexCenter h-full'>
            <PulseLoader color='#3B82F6' loading={loading} size={10} />
        </div>
    );
};

export default LoadingHandler;
