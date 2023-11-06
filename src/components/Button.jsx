function Button({ type, text, onClick, className = "bg-second hover:bg-second-dark " }) {
    return (
        <button type={type} onClick={onClick} className={`w-full text-lg rounded-full border-2 p-2 ${className}`}>
            {text}
        </button>
    );
}

export default Button;
