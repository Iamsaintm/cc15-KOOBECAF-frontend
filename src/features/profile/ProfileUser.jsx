import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaEdit } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { fetchDataUser } from "../../stores/slices/authSlice";

import Avatar from "../../components/Avatar";
import InputDropdown from "../../components/InputDropdown";
import Search from "../../features/filter/Search";
import CoverImage from "../../components/CoverImage";
import ProductCardUser from "../../features/profile/ProductCardUser";
import Loading from "../../components/Loading";

export default function ProfileUser({ onClose, setEditUser }) {
    const { authUserData } = useSelector((state) => state.auth);
    const [isOpen, setIsOpen] = useState(false);
    const { productData, loading, searchProduct, productByUserId } = useSelector((state) => state.product);

    const { state } = useLocation();

    const dispatch = useDispatch();

    const handleOnClick = () => {
        onClose();
        setEditUser(true);
    };

    // if (searchProduct.length !== 0) {
    //     product = productData?.filter((el) =>
    //         el.productName.toLowerCase().includes(searchProduct.toLowerCase().trim()) ? el : null,
    //     );
    // }

    const productStatus = [
        { id: 1, status: "AVAILABLE" },
        { id: 2, status: "SOLD" },
        { id: 3, status: "NOT_AVAILABLE" },
    ];

    const sortBy = [
        { id: 1, status: "AVAILABLE" },
        { id: 2, status: "SOLD" },
        { id: 3, status: "NOT_AVAILABLE" },
    ];

    return (
        <>
            <div className="bg-white rounded-lg">
                <div className="relative">
                    <CoverImage className="rounded-t-lg bg-cover w-full h-[200px] " src={authUserData?.coverImage} />

                    <div
                        className="absolute text-2xl top-[3px] left-[95%] hover:text-[#959595] text-white cursor-pointer"
                        onClick={onClose}
                    >
                        X
                    </div>
                    <div className="flex flex-col p-4">
                        <div className="flex justify-end">
                            <FaEdit className="w-6 h-6 cursor-pointer hover:text-[#959595]" onClick={handleOnClick} />
                        </div>
                        <div className="flex justify-center text-xl font-bold pt-10 border-b pb-3">
                            {authUserData?.firstName} {authUserData?.lastName}
                        </div>
                    </div>

                    <div className="absolute top-[37%] left-[39%]">
                        <Avatar className="w-36" src={authUserData?.profileImage} />
                    </div>
                </div>

                <div>
                    <div className="flex items-center px-4 pb-4 gap-4">
                        {/* <Search className="" nameTagSearch="" div="" placeholder="Search" /> */}
                        <InputDropdown
                            name={"status"}
                            data={productStatus}
                            className={"bg-second hover:bg-second-dark"}
                        />
                        <InputDropdown
                            name={"status"}
                            data={sortBy}
                            className={
                                " bg-second hover:bg-second-dark focus:border-1 border-second focus:ring-2 focus:ring-second-dark"
                            }
                        />
                    </div>
                    <div className="grid grid-cols-3 justify-between px-4 pb-4 gap-2 overflow-y-auto h-[268px]">
                        {productByUserId && productByUserId.length > 0 ? (
                            productByUserId?.map((data) => (
                                <Link key={data.id} to={`/product/${data.id}`} state={{ productDetail: data }}>
                                    <ProductCardUser
                                        src={data.image[0]?.image}
                                        productPrice={data.productPrice}
                                        productName={data.productName}
                                    />
                                </Link>
                            ))
                        ) : (
                            <div>Product not Found</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}
