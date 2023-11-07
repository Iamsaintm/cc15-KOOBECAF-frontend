import Avatar from "../../components/Avatar";
import userImage from "../../assets/Images/user.jpg";
import Button from "../../components/Button";
import GoogleMapInput from "../../features/product/GoogleMap";
import Slider from "react-slick";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { setInputProductCategory } from "../../stores/slices/productSlice";

function ProductPreview() {
    const dispatch = useDispatch();
    const { authUserData } = useSelector((state) => state.auth);
    const [index, setIndex] = useState(0);
    const { inputProduct } = useSelector((state) => state.product);
    const { pathname } = useLocation();

    useEffect(() => {
        if (pathname === "/create/rental") {
            const id = 2;
            const fieldValue = "PROPERTY_FOR_RENT";
            dispatch(setInputProductCategory({ id, fieldValue }));
        }
        if (pathname === "/create/vehicle") {
            const id = 1;
            const fieldValue = "VEHICLES";
            dispatch(setInputProductCategory({ id, fieldValue }));
        }
    }, []);

    let newFile = null;

    if (inputProduct.productImage) {
        newFile = Array.from(inputProduct.productImage);
    }

    const settings = {
        customPaging: function (i) {
            let binaryData = [];
            binaryData.push(inputProduct.productImage[i]);
            return (
                <div>
                    <img id={i} src={URL.createObjectURL(new Blob(binaryData, { type: "application/zip" }))} />
                </div>
            );
        },
        beforeChange: function (c, n) {
            setIndex(n);
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <>
            <div className="flex w-full justify-center mr-6 ml-[375px] bg-main-light">
                <div className="flex flex-col p-4 w-full mx-4 place-self-center bg-white shadow-lg rounded-lg">
                    <div className="flex-1 ">
                        <div className="flex pb-3 text-xl font-bold">Preview</div>
                    </div>
                    <div className="flex flex-1 border rounded-lg ">
                        <div className="relative flex flex-1 items-center justify-center w-[50%]  drop-shadow-md bg-cover rounded-l">
                            {inputProduct.productImage.length !== 0 ? (
                                <>
                                    <div className="w-[480px] -z-20">
                                        <Slider {...settings}>
                                            {newFile.map((x, idx) => (
                                                <div className="pl-[68px] mb-4 bg-black/75" key={idx}>
                                                    <img
                                                        className="w-10/12 aspect-square rounded-md"
                                                        src={URL.createObjectURL(inputProduct.productImage[idx])}
                                                    />
                                                </div>
                                            ))}
                                        </Slider>
                                        <div className="absolute top-3 left-12 blur-md -z-10 w-10/12 aspect-square">
                                            <img
                                                className="w-full h-full"
                                                id={index}
                                                src={URL.createObjectURL(
                                                    new Blob([inputProduct.productImage[index]], {
                                                        type: "application/zip",
                                                    }),
                                                )}
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

                        <div className="flex flex-1 flex-col gap-y-2 w-[50%] p-3 ">
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
