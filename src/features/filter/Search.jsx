import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchProduct } from "../../stores/slices/productSlice";
import SearchInput from "./SearchInput";

function Search({ nameTagSearch = "Marketplace", className, div = "pt-10", placeholder = "ค้นหา Marketplace" }) {
    const dispatch = useDispatch();
    const { searchProduct } = useSelector((state) => state.product);
    const onChangeInput = (e) => {
        const fieldValue = e.target.value;
        dispatch(setSearchProduct({ fieldValue }));
    };

    return (
        <>
            <div className={`pb-2 px-4 ${div}`}>
                <div className="flex justify-between">
                    <div className="text-2xl font-bold pl-2">{nameTagSearch}</div>
                </div>
                <SearchInput
                    placeholder={placeholder}
                    onChange={onChangeInput}
                    value={searchProduct}
                    className={className}
                />
            </div>
        </>
    );
}

export default Search;
