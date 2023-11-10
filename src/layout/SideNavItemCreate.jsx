import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import {
    createProduct,
    fetchProductById,
    resetInputProduct,
    updateInputProduct,
    updateProduct,
} from "../stores/slices/productSlice";

import Avatar from "../components/Avatar";
import PhotoUpload from "../features/product/PhotoUpload";
import RequiredContainer from "../features/product/RequiredContainer";
import Button from "../components/Button";
import DescriptionContainer from "../features/product/DescriptionContainer";

function SideNavItemCreate({ header, type }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productId } = useParams();
    const { authUserData } = useSelector((state) => state.auth);
    const { inputProduct, productData } = useSelector((state) => state.product);
    const { categoryData } = useSelector((state) => state.category);

    useEffect(() => {
        if (productId) {
            dispatch(fetchProductById(productId));
        }
    }, [productId]);

    useEffect(() => {
        if (inputProduct.id) {
            const { typeOfCategory } = categoryData?.find((x) => x.id === productData.categoryId);
            dispatch(updateInputProduct({ ...productData, typeOfCategory }));
        } else {
            dispatch(updateInputProduct(productData));
        }
    }, [productData]);

    const onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        const newInputProduct = {};

        for (let key in inputProduct) {
            if (inputProduct[key] !== "" && inputProduct[key] !== 0 && inputProduct[key]) {
                newInputProduct[key] = inputProduct[key];
            }
        }

        for (let i = 0; i < inputProduct.productImage.length; i++) {
            formData.append("productImage", inputProduct.productImage[i]);
        }

        formData.append("product", JSON.stringify(newInputProduct));
        try {
            if (inputProduct.id) {
                const productId = inputProduct.id;
                await dispatch(updateProduct({ productId, formData }));
            } else {
                await dispatch(createProduct({ formData }));
            }
            dispatch(resetInputProduct());
            navigate("/selling");
        } catch (error) {
            console.error("Error dispatching createProduct:", error);
        }
    };
    return (
        <>
            <form onSubmit={onSubmit} className="flex flex-col gap-2 h-screen">
                <div className="sticky h-6"></div>
                <div className="flex flex-col gap-2 px-4">
                    <div className="text-2xl font-bold">{header}</div>
                    <div className="flex gap-3 items-center">
                        <Avatar src={authUserData?.profileImage} />
                        <div>
                            {authUserData?.firstName} {authUserData?.lastName}
                        </div>
                    </div>
                </div>
                <div className="border-b-2 mb-2 pb-2"></div>
                <div className="flex flex-col gap-4 overflow-auto h-screen pb-16 px-4">
                    <PhotoUpload />
                    <RequiredContainer type={type} />
                    <div className="flex flex-col gap-4">
                        <DescriptionContainer />
                        {inputProduct.id ? (
                            <Button type={"submit"} text={"Update"} />
                        ) : (
                            <Button type={"submit"} text={"Create"} />
                        )}
                    </div>
                </div>
            </form>
        </>
    );
}

export default SideNavItemCreate;
