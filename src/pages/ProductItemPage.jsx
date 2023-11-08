import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BsFillChatDotsFill, BsFillBookmarkFill } from "react-icons/bs";
import { fetchProductByProductId, wishListProduct } from "../stores/slices/productSlice";
import GoogleMap from "../features/product/GoogleMap";
import Avatar from "../components/Avatar";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import formatTimeAgo from "../utils/time-ago";
import { FaArrowLeft, FaArrowRight, FaClock, FaHouse, FaWarehouse } from "react-icons/fa6";
import { HiMiniBuildingOffice2 } from "react-icons/hi2";
import { BiSolidBuildingHouse } from "react-icons/bi";
import Slider from "react-slick";

function ProductItemPage() {
    const dispatch = useDispatch();
    const { isWishList } = useSelector((state) => state.product);
    const { state } = useLocation();
    const [isActive, setIsActive] = useState(false);
    const category = state.productDetail.categoryId;
    const [images, setImages] = useState([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        setIsActive(isWishList);
    }, [isWishList]);

    useEffect(() => {
        dispatch(fetchProductByProductId(state.productDetail.id));
    }, []);

    useEffect(() => {
        const imgs = state.productDetail.image.map((el) => el.image);
        setImages(imgs);
    }, [state.productDetail]);

    const handleClick = () => {
        dispatch(wishListProduct(state.productDetail.id));
        setIsActive(!isActive);
    };

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <>
                <div
                    onClick={onClick}
                    className="hover:bg-white/20 transition duration-150 text-white absolute flex p-6 h-full items-center top-1/2 transform -translate-y-1/2 right-0 text-3xl"
                >
                    <FaArrowRight />
                </div>
            </>
        );
    }

    function PrevArrow(props) {
        const { onClick } = props;
        return (
            <div
                onClick={onClick}
                className="hover:bg-white/20 transition duration-150 text-white absolute flex p-6 h-full items-center top-1/2 transform -translate-y-1/2 left-0 text-3xl z-10"
            >
                <FaArrowLeft />
            </div>
        );
    }

    const settings = {
        customPaging: function (i) {
            return (
                <img
                    src={images[i]}
                    alt={`Image ${i}`}
                    className={`rounded-md ${i === currentSlide ? "border border-gray-100" : "opacity-50"}`}
                />
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <div className="flex w-full h-screen overflow-clip pt-16">
                <div className="relative flex items-center w-2/3">
                    <div className="w-full">
                        <Slider {...settings}>
                            {images.map((image, index) => (
                                <div key={index} className="!flex justify-center bg-black/80">
                                    <img
                                        src={image}
                                        alt={`Image ${index}`}
                                        className="w-[450px] aspect-square object-contain"
                                    />
                                </div>
                            ))}
                        </Slider>
                    </div>
                    <div className="absolute blur-md -z-10 w-[100%] aspect-square">
                        <img
                            className="w-full aspect-square object-cover"
                            id={currentSlide}
                            src={images[currentSlide]}
                        />
                    </div>
                </div>
                <div className="flex flex-col p-4 w-1/3 bg-second-light overflow-auto">
                    {category == 1 ? (
                        <div className="font-bold text-2xl">
                            <div>
                                {state.productDetail?.vehicleYears} {state.productDetail?.vehicleBrand}{" "}
                                {state.productDetail?.vehicleModel}
                            </div>
                        </div>
                    ) : (
                        <div className="font-bold text-2xl">{state.productDetail?.productName}</div>
                    )}
                    <div className="text-lg">&#3647; {state.productDetail?.productPrice}</div>
                    {category == 2 ? (
                        <div className="text-sm text-slate-500">Property For {state.productDetail?.homeProperty}</div>
                    ) : (
                        <div className="hidden"></div>
                    )}
                    <div className="flex gap-2 items-center text-slate-500 py-2">
                        <FaClock />
                        Listed {formatTimeAgo(state.productDetail?.createdAt)}
                    </div>
                    <div className="inline-flex gap-4 py-2" role="group">
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
                                isActive ? "bg-sky-400 hover:bg-sky-700" : "bg-white"
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
                            <div className="text-slate-500 flex gap-2 items-center">
                                {state.productDetail?.homeType === "HOUSE" && <FaHouse />}
                                {state.productDetail?.homeType === "FLAT" && <HiMiniBuildingOffice2 />}
                                {state.productDetail?.homeType === "TOWNHOME" && <BiSolidBuildingHouse />}
                                <div className="pt-1">{state.productDetail?.homeType}</div>
                            </div>
                            <div className="text-slate-500 flex gap-2">
                                <div className="pt-[2px]">
                                    <FaWarehouse />
                                </div>
                                <div className="flex gap-2 items-center">
                                    {state.productDetail?.bedroomQuantity} beds {state.productDetail?.bathroomQuantity}{" "}
                                    baths
                                </div>
                            </div>
                        </div>
                    ) : (
                        <div className="hidden"></div>
                    )}
                    <div className="my-4 pt-4 border-t">
                        <div className="font-bold text-xl">Description</div>
                        <div className="w-full">{state.productDetail.description}</div>
                    </div>
                    <GoogleMap />
                    <div className="flex flex-col py-4 gap-3 border-t mt-4">
                        <div className="font-bold text-xl">Seller information</div>
                        <div className="flex gap-3 items-center ">
                            <Avatar src={state.productDetail.usersId?.profileImage} />
                            <div>
                                {state.productDetail.usersId?.firstName} {state.productDetail.usersId?.lastName}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductItemPage;
