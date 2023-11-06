import React, { useEffect } from "react";
import InputForm from "../../components/InputForm";
import { useDispatch, useSelector } from "react-redux";
import InputDropdown from "../../components/InputDropdown";
import { setInputProduct, setInputProductCategory } from "../../stores/slices/productSlice";
import { fetchAllCategory } from "../../stores/slices/categorySlice";

function RequiredContainer() {
    const dispatch = useDispatch();
    const { authUserData } = useSelector((state) => state.auth);
    const { categoryData } = useSelector((state) => state.category);
    const { inputProduct } = useSelector((state) => state.product);
    const newCategoryData = Array.isArray(categoryData)
        ? [{ id: 0, typeOfCategory: "Category" }, ...categoryData]
        : [{ id: 0, typeOfCategory: "Category" }];

    useEffect(() => {
        dispatch(fetchAllCategory());
    }, [authUserData]);

    const onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        dispatch(setInputProduct({ fieldName, fieldValue }));
    };

    const onChangeInputCategory = (e) => {
        const { id } = newCategoryData.find((x) => x.typeOfCategory === e.target.value);
        const fieldValue = e.target.value;
        dispatch(setInputProductCategory({ id, fieldValue }));
    };

    return (
        <>
            <div className="flex flex-col">
                <div className="text-xl font-bold">Required</div>
                <div>Be as descriptive as possible</div>
                <InputForm
                    value={inputProduct.productName}
                    onChange={onChangeInput}
                    name={"productName"}
                    placeholder={"Title"}
                />
                <InputForm
                    value={inputProduct.productPrice}
                    onChange={onChangeInput}
                    name={"productPrice"}
                    placeholder={"Price"}
                />
                <InputDropdown input={inputProduct} data={newCategoryData} onChange={onChangeInputCategory} />
                <InputForm placeholder={"Location"} />
            </div>
        </>
    );
}

export default RequiredContainer;
