import React from "react";

function InputDropdown({ input, data, onChange }) {
    return (
        <>
            <select
                className="w-full appearance-none rounded-full outline-none border-2 px-4 py-3 mt-4 focus:border-1 border-main focus:ring-2 focus:ring-main-dark"
                value={input.typeOfCategory}
                onChange={onChange}
            >
                {data.map((x) => (
                    <option value={x.typeOfCategory} key={x.id}>
                        {x.typeOfCategory.replace(/_/g, " ")}
                    </option>
                ))}
            </select>
        </>
    );
}

export default InputDropdown;
