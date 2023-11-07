import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsFillChatDotsFill, BsFillBookmarkFill } from "react-icons/bs";
import { fetchProductByProductId, wishListProduct } from "../stores/slices/productSlice";
import Avatar from "../components/Avatar";
import SliderForProduct from "../components/SliderForProduct";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formatTimeAgo from "../utils/time-ago";

function ProductItemPage({}) {
    const dispatch = useDispatch();
    const { isWishList } = useSelector((state) => state.product);
    const { state } = useLocation();

    // const [isActive, setIsActive] = useState(isWishList);
    const category = state.productDetail.categoryId;

    useEffect(() => {
        dispatch(fetchProductByProductId(state.productDetail.id));
    }, []);

    const [images, setImages] = useState([]);
    useEffect(() => {
        const imgs = state.productDetail.image.map((el) => el.image);
        setImages(imgs);
    }, [state.productDetail]);

    console.log(state.productDetail);

    const handleClick = () => {
        dispatch(wishListProduct(state.productDetail.id));
        // setIsActive(!isActive);
        window.location.reload();
    };
    return (
        <>
        
            <div className="flex flex-row h-full justify-between mt-16">
                <div className="w-2/3 flex justify-between">
                    <SliderForProduct images={images} />
                </div>
                <div className="w-1/3 p-2 overflow-auto bg-white">
                    {category == 1 ? (
                        <div className="flex flex-row font-bold text-3xl gap-1">
                            <div>{state.productDetail?.vehicleYears}</div>
                            <div>{state.productDetail?.vehicleBrand}</div>
                            <div>{state.productDetail?.vehicleModel}</div>
                        </div>
                    ) : (
                        <div className="flex flex-row font-bold text-3xl gap-1">
                            <div>{state.productDetail?.productName}</div>
                        </div>
                    )}
                    <div className="text-xl">&#3647;{state.productDetail?.productPrice}</div>
                    {category == 2 ? (
                        <div>Property For {state.productDetail?.homeProperty}</div>
                    ) : (
                        <div className="hidden"></div>
                    )}
                    <div className="py-2">Listed {formatTimeAgo(state.productDetail?.createdAt)}</div>
                    <div className="inline-flex py-2" role="group">
                        <button className="text-lg rounded-2xl border-2 py-2 px-8 bg-second hover:bg-second-dark">
                            <div className=" flex flex-row justify-center items-center">
                                <div>
                                    <BsFillChatDotsFill />
                                </div>
                                <div className="px-1">Message</div>
                            </div>
                        </button>
                        <button
                            className={`text-lg rounded-xl border-2 py-2 px-3 ${
                                isWishList ? "bg-sky-400 hover:bg-sky-700" : "bg-white"
                            } `}
                            onClick={handleClick}
                        >
                            <div className="flex justify-center">
                                <BsFillBookmarkFill />
                            </div>
                        </button>
                    </div>
                    {category == 2 ? (
                        <div>
                            <div className="font-semibold text-lg">Property details</div>
                            <div>{state.productDetail?.homeType}</div>
                            <div className="flex flex-row gap-2">
                                <div>{state.productDetail?.bedroomQuantity} beds</div>
                                <div>{state.productDetail?.bathroomQuantity} baths</div>
                            </div>
                        </div>
                    ) : (
                        <div className="hidden"></div>
                    )}
                    <div className="py-2 border-t-2">
                        <div className="font-semibold text-lg">Description</div>
                        <div className="w-full">{state.productDetail.description}</div>
                    </div>
                    <div className="border p-10">Location</div>
                    <div className="py-2">
                        <div className="font-semibold text-lg">Seller information</div>
                        <div className="flex flex-row justify-start items-center ">
                            <Avatar src={state.productDetail.usersId.profileImage} />
                            <div className="px-2">{state.productDetail.usersId.firstName}</div>
                            <div>{state.productDetail.usersId.lastName}</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItemPage;
