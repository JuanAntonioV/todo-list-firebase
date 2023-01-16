const AddTodoButton = ({ children, onClick, className }) => {
    return (
        <button
            className={`py-3 px-5 rounded-lg bg-blue-500 text-white ${
                className ? className : ''
            }`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default AddTodoButton;
