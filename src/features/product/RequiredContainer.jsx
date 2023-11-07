import { useCallback, useMemo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setInputProduct, setInputProductCategory } from "../../stores/slices/productSlice";
import { fetchGeocoding } from "../../stores/slices/productSlice";
import { debounce } from "lodash";
import { DatePicker, ConfigProvider } from "antd";
import { fetchAllCategory } from "../../stores/slices/categorySlice";
import InputForm from "../../components/InputForm";
import InputDropdown from "../../components/InputDropdown";
import { useNavigate } from "react-router-dom";

function RequiredContainer({ type }) {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { authUserData } = useSelector((state) => state.auth);
    const { categoryData } = useSelector((state) => state.category);
    const { inputProduct } = useSelector((state) => state.product);

    useEffect(() => {
        dispatch(fetchAllCategory());
    }, [authUserData]);

    const vehicleTypes = [
        { id: 1, vehicleType: "CAR" },
        { id: 2, vehicleType: "TRUCK" },
        { id: 3, vehicleType: "MOTORCYCLE" },
        { id: 4, vehicleType: "POWERSPORT" },
        { id: 5, vehicleType: "RV" },
        { id: 6, vehicleType: "CAMPER" },
        { id: 7, vehicleType: "TRAILER" },
        { id: 8, vehicleType: "BOAT" },
        { id: 9, vehicleType: "COMMERCIAL" },
        { id: 10, vehicleType: "INDUSTRIAL" },
    ];

    const homeTypes = [
        { id: 1, homeType: "FLAT" },
        { id: 2, homeType: "HOUSE" },
        { id: 3, homeType: "TOWNHOME" },
    ];

    const homePropertys = [
        { id: 1, homeProperty: "RENT" },
        { id: 2, homeProperty: "SALE" },
    ];

    const newCategoryData = Array.isArray(categoryData)
        ? [{ id: 0, typeOfCategory: "Category" }, ...categoryData]
        : [{ id: 0, typeOfCategory: "Category" }];
    const newVehicleTypeData = [{ id: 0, vehicleType: "Vehicle type" }, ...vehicleTypes];
    const newHomeTypeData = [{ id: 0, homeType: "Property type" }, ...homeTypes];
    const newHomePropertyData = [{ id: 0, homeProperty: "Home for Sale or Rent" }, ...homePropertys];

    const onChangeInput = (e) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;
        dispatch(setInputProduct({ fieldName, fieldValue }));
    };

    const onChangeInputYear = (date, dateString) => {
        const fieldName = "vehicleYears";
        const fieldValue = dateString;
        dispatch(setInputProduct({ fieldName, fieldValue }));
    };

    const onChangeInputCategory = (e) => {
        const { id } = newCategoryData.find((x) => x.typeOfCategory === e.target.value);
        const fieldValue = e.target.value;
        dispatch(setInputProductCategory({ id, fieldValue }));
        if (id === 1) {
            navigate("/create/vehicle");
            window.location.reload();
        }
        if (id === 2) {
            navigate("/create/rental");
            window.location.reload();
        }
    };

    const onChangeInputLocation = useCallback(
        async (e) => {
            if (typeof e.target.value === "undefined") return; //ออกนอก Fn เลย if you use useMemo ต้องส่งค่าสักอย่าง " " , undefined
            if (e.target.value === "") return; //ออกนอก Fn เลย
            dispatch(fetchGeocoding(e.target.value));
        },
        [dispatch],
    );

    const handleDebounceInputLocation = useMemo(
        () => debounce(onChangeInputLocation, 1000, { leading: false }),
        [onChangeInputLocation],
    );

    let inputForm = (
        <>
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
            <InputDropdown
            className={"mt-4"}
                value={inputProduct.typeOfCategory}
                data={newCategoryData}
                onChange={onChangeInputCategory}
                name={"typeOfCategory"}
            />
            <InputForm placeholder={"Location"} onChange={handleDebounceInputLocation} />
        </>
    );

    if (type === "/create/vehicle") {
        inputForm = (
            <>
                <InputDropdown
                    value={inputProduct.vehicleType}
                    data={newVehicleTypeData}
                    onChange={onChangeInput}
                    name={"vehicleType"}
                />
                <ConfigProvider
                    theme={{
                        token: {
                            colorTextPlaceholder: "#6b7280",
                        },
                    }}
                >
                    <DatePicker
                        className="mt-4 rounded-full outline-none border-2 px-4 py-[9px]  focus:border-1 border-main focus:ring-2 focus:ring-main-dark"
                        onChange={onChangeInputYear}
                        picker="year"
                    />
                </ConfigProvider>
                <InputForm
                    value={inputProduct.vehicleModel}
                    onChange={onChangeInput}
                    name={"vehicleModel"}
                    placeholder={"Model"}
                />
                <InputForm
                    value={inputProduct.vehicleBrand}
                    onChange={onChangeInput}
                    name={"vehicleBrand"}
                    placeholder={"Brand"}
                />
                <InputForm placeholder={"Location"} onChange={handleDebounceInputLocation} />
                <InputForm
                    value={inputProduct.productPrice}
                    onChange={onChangeInput}
                    name={"productPrice"}
                    placeholder={"Price"}
                />
            </>
        );
    }

    if (type === "/create/rental") {
        inputForm = (
            <>
                <InputDropdown
                    value={inputProduct.homeProperty}
                    data={newHomePropertyData}
                    onChange={onChangeInput}
                    name={"homeProperty"}
                />
                <InputDropdown
                    value={inputProduct.homeType}
                    data={newHomeTypeData}
                    onChange={onChangeInput}
                    name={"homeType"}
                />
                <InputForm
                    value={inputProduct.bedroomQuantity}
                    onChange={onChangeInput}
                    name={"bedroomQuantity"}
                    placeholder={"Number of bedrooms"}
                />
                <InputForm
                    value={inputProduct.bathroomQuantity}
                    onChange={onChangeInput}
                    name={"bathroomQuantity"}
                    placeholder={"Number of bathrooms"}
                />
                <InputForm
                    value={inputProduct.productPrice}
                    onChange={onChangeInput}
                    name={"productPrice"}
                    placeholder={"Price"}
                />
                <InputForm placeholder={"Location"} onChange={handleDebounceInputLocation} />
                <InputForm
                    value={inputProduct.homeAddress}
                    onChange={onChangeInput}
                    name={"homeAddress"}
                    placeholder={"Property address"}
                />
            </>
        );
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="text-xl font-bold">
                    {type === "/create/vehicle" ? "About this vehicle" : "Required"}
                </div>
                <div className="max-w-[290px]">
                    {type === "/create/vehicle"
                        ? "Help buyers know more about the vehicle that you're listing"
                        : "Be as descriptive as possible"}
                </div>
                {inputForm}
            </div>
        </>
    );
}

export default RequiredContainer;
