import { FaSistrix, FaEdit, FaCamera } from "react-icons/fa";
import { useSelector } from "react-redux";
import userImage from "../../assets/Images/user.jpg";
import Avatar from "../../components/Avatar";
import InputDropdown from "../../components/InputDropdown";
import SearchInput from "../../features/filter/SearchInput";
import ProductCard from "../../features/product/ProductCard";

export default function EditUser({ onClose }) {
    const { authUserData, loading } = useSelector((state) => state.auth);
    const firstName = authUserData?.firstName;
    const lastName = authUserData?.lastName;

    const handleOnClose = () => {
        onClose();
        setIsOpen(true);
    };

    return (
        <>
            <div className="p-4 bg-white rounded-lg ">
                <div className="flex flex-col items-center pb-4 rounded-lg">
                    <div className="relative">
                        <p className="text-xl font-bold ">Edit Profile</p>
                        <div
                            className="absolute bottom-1 left-[330px] text-2xl hover:text-[#959595] cursor-pointer"
                            onClick={handleOnClose}
                        >
                            X
                        </div>
                    </div>
                </div>
                <div className="px-4 font-semibold" />
                <div className="border border-empty w-full" />
                <div className="flex gap-4 py-4">
                    <p className="text-lg font-semibold">Edit Name: </p>
                    <div className="text-lg">
                        {firstName} {lastName}
                    </div>
                </div>
                <div className="flex justify-between">
                    <p className="text-lg font-semibold">Profile Image </p>
                    <FaEdit className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="flex justify-center ">
                    <Avatar src={userImage} className="w-[200px]" />
                </div>
                <div className="flex justify-between">
                    <p className="text-lg font-semibold">Cover Image</p>
                    <FaEdit className="w-6 h-6 cursor-pointer" />
                </div>
                <div className="rounded-lg bg-cover w-full h-[250px] bg-[url('https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg')]" />
            </div>
            {/* <div className="bg-white rounded-lg">
                <div className="flex flex-col items-center bg-white p-4">
                    <div className="relative">
                        <div className="text-xl font-bold ">Edit Profile</div>
                        <div
                            className="absolute bottom-1 left-[340px] text-2xl hover:text-[#959595] cursor-pointer"
                            onClick={handleOnClose}
                        >
                            X
                        </div>
                        <div className="absolute top-[300px] left-[108px] z-10">
                            <FaCamera className="w-10 h-6 cursor-pointer flex justify-center items-center text-xl aspect-square rounded-full" />
                        </div>
                    </div>
                </div>

                <div className="bg-cover w-full h-[250px] bg-[url('https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg')]" />

                <div className="flex flex-col bg-white rounded-lg px-4 ">
                    <div className="flex justify-end">
                        <div className="">
                            <FaCamera className="w-6 h-6 cursor-pointer" />
                        </div>
                    </div>
                    <div className="flex justify-center text-xl font-bold pt-16 pb-3">
                        <FaEdit className="w-6 h-6 cursor-pointer" />
                        <div>BUBEEEBUUU JANJKNKJNJK</div>
                    </div>

                    <div className="absolute top-[45%] left-[43%]">
                        <Avatar src={userImage} className="w-48" />
                    </div>
                </div>
            </div> */}
        </>
    );
}
