import Avatar from "../../components/Avatar";
import userImage from "../../assets/Images/user.jpg";
import Button from "../../components/Button";
import GoogleMapInput from "../../features/product/GoogleMap";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { setInputProductCategory } from "../../stores/slices/productSlice";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

function ProductPreview() {
    const dispatch = useDispatch();
    const { authUserData } = useSelector((state) => state.auth);
    const [currentSlide, setCurrentSlide] = useState(0);
    const { inputProduct } = useSelector((state) => state.product);
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/create/rental" || pathname.includes("/update/rental")) {
            const id = 2;
            const fieldValue = "PROPERTY_FOR_RENT";
            dispatch(setInputProductCategory({ id, fieldValue }));
        }
        if (pathname === "/create/vehicle" || pathname.includes("/update/vehicle")) {
            const id = 1;
            const fieldValue = "VEHICLES";
            dispatch(setInputProductCategory({ id, fieldValue }));
        }
    }, [authUserData]);

    let newFile = [];

    if (inputProduct.productImage) {
        newFile = [...newFile, ...Array.from(inputProduct.productImage)];
    }
    if (inputProduct.image) {
        newFile = [...newFile, ...inputProduct.image];
    }

    function NextArrow(props) {
        const { onClick } = props;
        return (
            <>
                <div
                    onClick={onClick}
                    className="hover:bg-white/20 transition duration-150 text-white absolute flex p-4 h-full items-center top-1/2 transform -translate-y-1/2 right-0 text-3xl"
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
                className="hover:bg-white/20 transition duration-150  text-white absolute flex p-4 h-full items-center top-1/2 transform -translate-y-1/2 left-0 text-3xl z-10"
            >
                <FaArrowLeft />
            </div>
        );
    }

    const settings = {
        customPaging: function (i) {
            let binaryData = [];
            binaryData.push(inputProduct.productImage[i]);
            return (
                <div>
                    <img
                        className={`rounded-md ${i === currentSlide ? "border border-gray-100" : "opacity-50"}`}
                        id={i}
                        src={
                            newFile[i]?.image || URL.createObjectURL(new Blob(binaryData, { type: "application/zip" }))
                        }
                    />
                </div>
            );
        },
        beforeChange: function (current, next) {
            setCurrentSlide(next);
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <>
            <div className="flex w-full justify-center mr-6 ml-[375px] bg-main-light">
                <div className="flex flex-col p-4 w-full mx-4 place-self-center bg-white shadow-lg rounded-lg">
                    <div className="flex-1 ">
                        <div className="flex pb-3 text-xl font-bold">Preview</div>
                    </div>
                    <div className="grid grid-cols-2 border rounded-lg ">
                        <div className="flex items-center justify-center w-full overflow-clip drop-shadow-md bg-cover rounded-lg">
                            {newFile.length !== 0 ? (
                                <>
                                    <div className="relative w-full -z-20">
                                        <Slider {...settings}>
                                            {newFile.map((file, idx) => (
                                                <div key={idx} className="!flex justify-center bg-black/80">
                                                    <img
                                                        className="w-[400px] aspect-square object-contain rounded-md"
                                                        src={file?.image || URL.createObjectURL(file)}
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                        <div className="absolute -top-1/2 -left-1/4 blur-md -z-10 w-[150%] aspect-square">
                                            <img
                                                className="w-full aspect-square object-cover"
                                                id={currentSlide}
                                                src={
                                                    newFile[index]?.image ||
                                                    URL.createObjectURL(
                                                        new Blob([inputProduct.productImage[currentSlide]], {
                                                            type: "application/zip",
                                                        }),
                                                    )
                                                }
                                            />
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <div className="bg-empty h-full w-full">
                                    <div className="flex h-full flex-col justify-center items-center">
                                        <div className="text-2xl font-semibold">Your Listing Preview</div>
                                        <div>As you create your listing, your can preview</div>
                                        <div>how it will appear to others on Marketplace.</div>
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="flex flex-1 flex-col gap-y-2 w-full p-3 ">
                            <div>
                                <p className="truncate text-lg mb-2">
                                    {inputProduct.productName ? inputProduct.productName : "Title"}
                                </p>
                                <p className="font-thin">
                                    ฿ {inputProduct.productPrice ? inputProduct.productPrice : "0"}
                                </p>
                            </div>

                            <div className="border-b pb-2">
                                <p className="text-lg mb-2">Description</p>
                                <p className="break-all font-thin">
                                    {inputProduct.description
                                        ? inputProduct.description
                                        : "Description will appear here."}
                                </p>
                                <GoogleMapInput className="py-2" />
                                {/* <p className="truncate font-thin">
                                    กรุงเทพมหานคร อมรรัฒนโกสินธ์ มหิมนราทิเบท อเนกประสงค์ อนงค์ สวัสดี
                                </p> */}
                            </div>

                            <div>
                                <p className="text-lg mb-2">Seller Information</p>
                                <div className="flex gap-x-2 items-center">
                                    <Avatar src={authUserData?.profileImage} />
                                    <p>
                                        {authUserData?.firstName} {authUserData?.lastName}
                                    </p>
                                </div>
                            </div>
                            <div className="flex px-8">
                                <Button type={"submit"} text={"Message"} className="my-4" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPreview;
