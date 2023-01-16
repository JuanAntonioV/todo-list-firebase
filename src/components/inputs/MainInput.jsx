const MainInput = ({ value, onChange, placeholder }) => {
    return (
        <input
            type='text'
            className='py-3 px-5 rounded-lg border-2 border-blue-500'
            placeholder={`${placeholder ? placeholder : 'Add Todo Text'}`}
            required
        />
    );
};

export default MainInput;
