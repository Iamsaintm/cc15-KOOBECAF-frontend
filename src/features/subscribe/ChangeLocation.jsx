import InputForm from "../../components/InputForm";
import Autocomplete from "../../components/Autocomplete";
import SubscriptGoogleMap from "../../features/subscribe/SubscribeGoogleMap";
import Button from "../../components/Button";

export default function ChangeLocation({ onClose }) {
    const handleOnClick = () => {
        onClose();
    };
    
    return (
        <>
            <div className="bg-white rounded-lg">
                <div className="flex flex-col items-center py-4 rounded-t-lg ">
                    <div className="relative">
                        <p className="text-2xl font-bold">Change Location</p>
                        <div
                            className="absolute bottom-1 left-[370px] text-2xl hover:text-[#959595] cursor-pointer"
                            onClick={handleOnClick}
                        >
                            X
                        </div>
                    </div>
                    <div className="border w-full" />
                </div>

                <div className=" px-4 pb-4 gap-y-4">
                    <div className="gap-y-4">
                        <p>Search by city</p>
                        <Autocomplete placeholder={"Location"} className={"rounded-md"} />
                        <InputForm placeholder="Radius" />
                        <div className="py-4">
                            <SubscriptGoogleMap />
                        </div>
                    </div>
                    <div className="border w-full" />
                    <div className="flex justify-end">
                        <div className="w-20 pt-4">
                            <Button
                                text="Apply"
                                className="rounded-md text-white bg-main hover:bg-main-dark text-sm font-semibold"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
