import React from "react";

function InputDropdown({ name, value, data, onChange, type }) {
    let context = null;

    const dataMap = (type) => {
        context = data.map((x) => (
            <option value={x[type]} key={x.id}>
                {x[type].replace(/_/g, " ")}
            </option>
        ));
    };

    if (type === "category") dataMap("typeOfCategory");
    if (type === "vehicle") dataMap("vehicleType");
    if (type === "rental") dataMap("homeProperty");
    if (type === "rental2") dataMap("homeType");

    return (
        <>
            <select
                className="w-full appearance-none rounded-full outline-none border-2 px-4 py-2 mt-4 focus:border-1 border-main focus:ring-2 focus:ring-main-dark"
                name={name}
                value={value}
                onChange={onChange}
            >
                {context}
            </select>
        </>
    );
}

export default InputDropdown;
