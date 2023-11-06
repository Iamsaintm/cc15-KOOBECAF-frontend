import { FaSistrix, FaMarker, FaCamera } from "react-icons/fa6";
import Avatar from "../../components/Avatar";
import userImage from "../../assets/Images/user.jpg";
import Button from "../../components/Button";
export default function ProfileUser() {
    return (
        <>
            <div className="">
                <div className="relative">
                    <div className="rounded-t-lg bg-cover w-full h-[250px] bg-[url('https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg')]" />
                    <div className="flex flex-col p-4">
                        <div className="flex justify-end">
                            <FaMarker />
                        </div>
                        <div className="flex justify-center text-xl font-bold pt-16">BUN2 BEESONGAHSUIHUDANDUAD</div>
                    </div>

                    <div className="absolute top-[50%] left-[39%]">
                        <Avatar src={userImage} className="w-36" />
                    </div>
                </div>
                <div className="">
                    <div className="flex">
                        <input className="text-lg font-light w-full rounded-full outline-none border-2 pl-3 py-2 focus:border-1 border-main focus:ring-2 focus:ring-main-dark"></input>
                        <Button text={"Available in stock"}></Button>
                        <Button text={"Sort by"}></Button>
                    </div>
                    <div>
                        <div>7</div>
                        <div>8</div>
                    </div>
                </div>
            </div>
        </>
    );
}

// profileImage: true,
// coverImage: true,
