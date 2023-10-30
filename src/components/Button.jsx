function Button({ type, text, onClick }) {
    return (
        <button
            type={type}
            onClick={onClick}
            className="w-full text-lg rounded-full border-2 p-2 bg-second hover:bg-second-dark"
        >
            {text}
        </button>
    );
}

export default Button;
