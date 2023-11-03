import React from "react";
import { FaCamera } from "react-icons/fa6";

function PhotoUpload() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <div className="text-xl font-bold">Photo Upload</div>
                <div className="flex flex-col">
                    <div>Photos - 0/5</div>
                    <label className="flex flex-col gap-2 justify-center items-center border-2 bg-white rounded-md h-48 cursor-pointer">
                        <div className="flex text-2xl justify-center items-center bg-[#d9d9d9] w-12 aspect-square rounded-full">
                            <FaCamera />
                        </div>
                        <div className="font-semibold">Add Photo</div>
                        <input type="file" className="hidden" />
                    </label>
                </div>
            </div>
        </>
    );
}

export default PhotoUpload;
