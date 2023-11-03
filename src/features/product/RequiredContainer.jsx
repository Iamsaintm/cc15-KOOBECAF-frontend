import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputProduct, setInputProductCategory } from "../../stores/slices/productSlice";
import { fetchGeocoding } from "../../stores/slices/productSlice";
import InputForm from "../../components/InputForm";
import InputDropdown from "../../components/InputDropdown";
import { debounce } from "lodash";
import { useMemo } from "react";

function RequiredContainer() {
    const dispatch = useDispatch();
    const { categoryData } = useSelector((state) => state.category);
    const { inputProduct } = useSelector((state) => state.product);
    const newCategoryData = [{ id: 0, typeOfCategory: "Category" }, ...categoryData];

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

    const onChangeInputLocation = useCallback(
        async (e) => {
            if (typeof e.target.value === "undefined") return; //ออกนอก Fn เลย if u use useMemo ต้องส่งค่าสักอย่าง " " , undefined
            if (e.target.value === "") return; //ออกนอก Fn เลย
            dispatch(fetchGeocoding(e.target.value));
        },
        [dispatch],
    );

    const handleDebounceInputLocation = useMemo(
        () => debounce(onChangeInputLocation, 1000, { leading: false }),
        [onChangeInputLocation],
    );

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
                <InputForm placeholder={"Location"} onChange={handleDebounceInputLocation} />
            </div>
        </>
    );
}

export default RequiredContainer;
