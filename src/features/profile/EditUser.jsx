import { useState } from "react";
import { useSelector } from "react-redux";
import Avatar from "../../components/Avatar";
import PictureForm from "../../features/profile/PictureFrom";
import CoverImage from "../../components/CoverImage";
import Button from "../../components/Button";

export default function EditUser({ onClose, setIsOpen }) {
    const { authUserData } = useSelector((state) => state.auth);
    const [loading, setLoading] = useState(false);

    const handleOnsave = () => {
        uploadProfileImage();
        uploadCoverImage();
    };

    const handleOnClose = () => {
        onClose();
        setIsOpen(true);
    };

    const uploadProfileImage = async (input) => {
        try {
            // Mapping API upload profile
            const formData = new FormData();
            formData.append("profileImage", input);
            setLoading(true);
            // await updateProfile(formData);
            onClose();
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const uploadCoverImage = async (input) => {
        try {
            const formData = new FormData();
            formData.append("coverImage", input);
            setLoading(true);
            // await updateProfile(formData);
            onClose();
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <div className="bg-white rounded-lg">
                <div className="flex flex-col items-center py-4 rounded-t-lg bg-dark-night ">
                    <div className="relative">
                        <p className="text-2xl font-bold text-white">Edit Profile</p>
                        <div
                            className="absolute bottom-1 left-[330px] text-2xl text-white hover:text-[#959595] cursor-pointer"
                            onClick={handleOnClose}
                        >
                            X
                        </div>
                    </div>
                </div>

                <div className="border border-empty w-full" />
                <div className="p-4">
                    <div className="flex gap-4 pb-2">
                        <p className="text-xl font-bold">Edit Name: </p>
                        <div className="text-lg">
                            {authUserData?.firstName} {authUserData?.lastName}
                        </div>
                    </div>

                    {loading && <div>Loading</div>}

                    <PictureForm
                        title="Profile Image"
                        initialSrc={authUserData?.profileImage} // bug image profile not show ka!!!
                    >
                        {(src, onClick) => (
                            <div onClick={onClick} className="flex justify-center">
                                <Avatar className="w-[150px]" src={src} />
                            </div>
                        )}
                    </PictureForm>

                    <div className="pb-4">
                        <PictureForm title="Cover Image" initialSrc={authUserData?.CoverImage}>
                            {(src, onClick) => (
                                <div onClick={onClick}>
                                    <CoverImage src={src} />
                                </div>
                            )}
                        </PictureForm>
                    </div>
                    <div className="flex justify-end">
                        <Button text={"Save"} onClick={handleOnsave} />
                    </div>
                </div>
            </div>
        </>
    );
}
