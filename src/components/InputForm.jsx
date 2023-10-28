export default function InputForm({ type = "text", placeholder, onChange, value, styles, isError = false }) {
    return (
        <div className="w-96 text-lg py-3 font-light ">
            <input
                type={type}
                placeholder={placeholder}
                onChange={onChange}
                value={value}
                className={` ${styles} ${
                    isError
                        ? "w-full rounded-full outline-none border-1 px-4 py-2  focus:border-2  border-error-light-soft ring-2 ring-error-light focus:ring-error-light  "
                        : "w-full rounded-full outline-none border-1 px-4 py-2  focus:border-2 border-main ring-2 ring-main-dark focus:ring-main-dark"
                }`}
            />
        </div>
    );
}
