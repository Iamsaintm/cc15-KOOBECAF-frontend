import { FaSistrix } from "react-icons/fa6";
function SearchInput({ type = "text", placeholder, onChange, value, styles, isError, name }) {
    return (
        <>
            <div className="w-full text-lg py-3 font-light ">
                <div className="text-2xl text-slate-500 absolute top-20 left-7">
                    <FaSistrix />
                </div>
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    onChange={onChange}
                    value={value}
                    className={`${styles} ${
                        isError
                            ? "w-full rounded-full outline-none border-2 px-4 py-2  focus:border-1 border-error-light-soft focus:ring-2 focus:ring-error-light  "
                            : "w-full rounded-full outline-none border-2 pl-10 py-2  focus:border-1 border-main focus:ring-2 focus:ring-main-dark"
                    }`}
                />
            </div>
        </>
    );
}

export default SearchInput;
