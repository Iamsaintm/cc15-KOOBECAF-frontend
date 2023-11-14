import React from "react";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";

export default function ChangeLocation({ onClose, setIsOpen }) {
    const handleOnClose = () => {
        onClose();
        setIsOpen(true);
    };
    return (
        <>
            <div className="bg-white rounded-lg">
                <div className="flex flex-col items-center py-4 rounded-t-lg ">
                    <div className="relative">
                        <p className="text-2xl font-bold">Change Location</p>
                        <div
                            className="absolute bottom-1 left-[330px] text-2xl hover:text-[#959595] cursor-pointer"
                            onClick={handleOnClose}
                        >
                            X
                        </div>
                    </div>
                    <div className="border w-full" />
                </div>
                <div>
                    <InputForm placeholder="location" className="rounded-sm" />
                    <InputForm placeholder="Radius" />
                </div>
            </div>
        </>
    );
}
