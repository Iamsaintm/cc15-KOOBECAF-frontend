import Avatar from "../components/Avatar";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PhotoUpload from "../features/product/PhotoUpload";
import RequiredContainer from "../features/product/RequiredContainer";
import Button from "../components/Button";
import DescriptionContainer from "../features/product/DescriptionContainer";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import validateSchema from "../utils/validate-schema";
import { itemSchema, vehicleSchema, homeSchema } from "../utils/product-validator";
import {
    createProduct,
    fetchProductById,
    resetInputProduct,
    updateInputProduct,
    updateProduct,
} from "../stores/slices/productSlice";

function SideNavItemCreate({ header, type }) {
    const { pathname } = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { productId } = useParams();
    const { authUserData } = useSelector((state) => state.auth);
    const [error, setError] = useState({});
    const { inputProduct, productData } = useSelector((state) => state.product);
    const { categoryData } = useSelector((state) => state.category);

    useEffect(() => {
        if (productId) {
            dispatch(fetchProductById(productId));
        }
    }, [productId]);

    useEffect(() => {
        if (inputProduct.id && productData && productId) {
            const { typeOfCategory } = categoryData?.find((x) => x.id === productData.categoryId);
            dispatch(updateInputProduct({ ...productData, typeOfCategory }));
        } else if (pathname.split("/")[1] === "update") {
            dispatch(updateInputProduct(productData));
        }
    }, [productData]);

    const onSubmit = async (e) => {
        e.preventDefault();
        let formData = new FormData();
        let newInputProduct = {};

        for (let key in inputProduct) {
            if (inputProduct[key] !== "" && inputProduct[key] !== 0 && inputProduct[key]) {
                newInputProduct[key] = inputProduct[key];
            }
        }

        for (let i = 0; i < inputProduct.productImage.length; i++) {
            formData.append("productImage", inputProduct.productImage[i]);
        }

        formData.append("product", JSON.stringify(newInputProduct));

        let result = {};
        if (pathname === "/create/item") {
            delete newInputProduct.idsToDelete;
            result = validateSchema(itemSchema, newInputProduct);
            if (result) return setError(result);
            await dispatch(createProduct({ formData }));
            dispatch(resetInputProduct());
            navigate("/selling");
        }

        if (pathname === "/create/vehicle") {
            delete newInputProduct.idsToDelete;
            delete newInputProduct.categoryId;
            delete newInputProduct.typeOfCategory;
            result = validateSchema(vehicleSchema, newInputProduct);
            if (result) return setError(result);
            await dispatch(createProduct({ formData }));
            dispatch(resetInputProduct());
            navigate("/selling");
        }

        if (pathname === "/create/rental") {
            delete newInputProduct.idsToDelete;
            delete newInputProduct.categoryId;
            delete newInputProduct.typeOfCategory;
            result = validateSchema(homeSchema, newInputProduct);
            if (result) return setError(result);
            await dispatch(createProduct({ formData }));
            dispatch(resetInputProduct());
            navigate("/selling");
        }

        if (pathname === `/update/item/${productId}`) {
            delete newInputProduct.idsToDelete;
            delete newInputProduct.userId;
            delete newInputProduct.usersId;
            delete newInputProduct.createdAt;
            delete newInputProduct.image;
            delete newInputProduct.id;
            delete newInputProduct.status;

            result = validateSchema(itemSchema, newInputProduct);
            if (result) return setError(result);
            await dispatch(updateProduct({ productId, formData }));

            dispatch(resetInputProduct());
            newInputProduct = {};
            navigate("/selling");
        }

        if (pathname === `/update/vehicle/${productId}`) {
            delete newInputProduct.categoryId;
            delete newInputProduct.id;
            delete newInputProduct.status;
            delete newInputProduct.typeOfCategory;
            delete newInputProduct.idsToDelete;
            delete newInputProduct.image;
            delete newInputProduct.userId;
            delete newInputProduct.usersId;
            delete newInputProduct.createdAt;

            result = validateSchema(vehicleSchema, newInputProduct);
            if (result) return setError(result);
            await dispatch(updateProduct({ productId, formData }));

            dispatch(resetInputProduct());
            newInputProduct = {};
            navigate("/selling");
        }

        if (pathname === `/update/rental/${productId}`) {
            delete newInputProduct.idsToDelete;
            delete newInputProduct.userId;
            delete newInputProduct.usersId;
            delete newInputProduct.createdAt;
            delete newInputProduct.image;
            delete newInputProduct.categoryId;
            delete newInputProduct.id;
            delete newInputProduct.status;
            delete newInputProduct.typeOfCategory;
            result = validateSchema(homeSchema, newInputProduct);
            if (result) return setError(result);
            await dispatch(updateProduct({ productId, formData }));
            dispatch(resetInputProduct());
            newInputProduct = {};
            navigate("/selling");
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
                    <RequiredContainer type={type} error={error} />
                    <div className="flex flex-col gap-4">
                        <DescriptionContainer error={error} />
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
