import Avatar from "../components/Avatar";
import { useDispatch, useSelector } from "react-redux";
import PhotoUpload from "../features/product/PhotoUpload";
import RequiredContainer from "../features/product/RequiredContainer";
import Button from "../components/Button";
import DescriptionContainer from "../features/product/DescriptionContainer";
import { createProduct, resetInputProduct } from "../stores/slices/productSlice";
import { useEffect, useState } from "react";
import { getAccessToken } from "../utils/local-storage";
import { fetchDataUser } from "../stores/slices/authSlice";

function SideNavItemCreate({ header, type }) {
    const [test, setTest] = useState("");
    const dispatch = useDispatch();
    const { inputProduct } = useSelector((state) => state.product);
    // const { firstName, lastName } = useSelector((state) => state.auth.authUserData);

    useEffect(() => {
        if (getAccessToken()) {
            dispatch(fetchDataUser())
                .unwrap()
                .then((res) => {
                    setTest(res.user);
                });
        }
    }, []);

    const onSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        const newInputProduct = {};

        for (let key in inputProduct) {
            if (inputProduct[key] !== "" && inputProduct[key] !== 0) {
                newInputProduct[key] = inputProduct[key];
            }
        }

        for (let i = 0; i < inputProduct.productImage.length; i++) {
            formData.append("productImage", inputProduct.productImage[i]);
        }

        formData.append("product", JSON.stringify(newInputProduct));
        dispatch(createProduct({ formData }));
        dispatch(resetInputProduct());
    };

    return (
        <>
            <form onSubmit={onSubmit} className="flex flex-col gap-2 h-screen">
                <div className="sticky h-6"></div>
                <div className="flex flex-col gap-2 px-4">
                    <div className="text-2xl font-bold">{header}</div>
                    <div className="flex gap-3 items-center">
                        <Avatar />
                        <div>
                            {test.firstName} {test.lastName}
                        </div>
                    </div>
                </div>
                <div className="border-b-2 mb-2 pb-2"></div>
                <div className="flex flex-col gap-4 overflow-auto h-screen pb-16 px-4">
                    <PhotoUpload />
                    <RequiredContainer type={type} />
                    <div className="flex flex-col gap-4">
                        <DescriptionContainer />
                        <Button type={"submit"} text={"Create"} />
                    </div>
                </div>
            </form>
        </>
    );
}

export default SideNavItemCreate;
