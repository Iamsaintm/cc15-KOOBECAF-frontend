function Button({ type, text, onClick, className }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-full text-lg rounded-full border-2 p-2 bg-second hover:bg-second-dark ${className}`}
        >
            {text}
        </button>
    );
}

export default Button;
