import { useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "../../components/Avatar";
import PictureForm from "../../features/profile/PictureFrom";
import CoverImage from "../../components/CoverImage";
import Button from "../../components/Button";

export default function EditUser({ onSuccess, onClose, setIsOpen }) {
    const { authUserData, loading } = useSelector((state) => state.auth);
    // const [loading, setLoading] = useState(false);

    const handleOnClose = () => {
        onClose();
        setIsOpen(true);
    };

    // const uploadProfileImage = async (input) => {
    //     try {
    //         const formData = new FormData();
    //         formData.append("profileImage", input); //อยากเพิ่มอะไรให้ใช้ append
    //         dispatch(true);
    //         await updateProfile(formData);
    //         onSuccess();
    //     } catch (err) {
    //         console.log(err);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // const uploadCoverImage = async (input) => {
    //     try {
    //         const formData = new FormData();
    //         formData.append("coverImage", input);
    //         setLoading(true);
    //         await updateProfile(formData);
    //         onSuccess();
    //     } catch (err) {
    //         console.log(err);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    return (
        <>
            <div className="p-4 bg-white rounded-lg">
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

                <div className="border border-empty w-full" />
                <div className="flex gap-4 py-4">
                    <p className="text-lg font-semibold">Edit Name: </p>
                    <div className="text-lg">
                        {authUserData?.firstName} {authUserData?.lastName}
                    </div>
                </div>

                {loading && <div>Loading</div>}

                <PictureForm title="Profile Image">
                    {(src, onClick) => (
                        <div onClick={onClick} className="flex justify-center">
                            <Avatar className="w-[150px]" src={src} />
                        </div>
                    )}
                </PictureForm>

                <div className="pb-4">
                    <PictureForm title="Cover Image">
                        {(src, onClick) => (
                            <div onClick={onClick}>
                                <CoverImage src={src} />
                            </div>
                        )}
                    </PictureForm>
                </div>
                <div className="flex justify-end">
                    <Button text={"Save"} />
                </div>
            </div>
        </>
    );
}
