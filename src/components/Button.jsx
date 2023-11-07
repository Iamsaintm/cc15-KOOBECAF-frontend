function Button({ type, text, onClick, className = "bg-second hover:bg-second-dark " }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`flex-1 text-lg rounded-full border-2 px-6 py-2 bg-second hover:bg-second-dark ${className}`}
        >
            {text}
        </button>
    );
}

export default Button;
