import { BsFillPersonFill } from "react-icons/bs";
import SubscribeContainer from "../features/subscribe/SubscribeContainer";

function SubscribePage() {
    return (
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col justify-center items-center h-full mt-16">
                <div className="text-5xl font-fontHeader text-main-dark ">KOOBECAF Premium</div>
                <div className="text-2xl">Products will be at the top and able to use feature filter map by radius</div>
            </div>

            <div className="flex justify-center items-center w-1/3 mt-16">
                <div className="rounded-lg bg-white shadow-2xl border">
                    <div className="flex  items-center text-xl border-b px-8 py-4">
                        <div className="pr-3 text-[2rem]">
                            <BsFillPersonFill />
                        </div>
                        <div className="text-2xl">Individual</div>
                    </div>
                    <div className="px-8 py-4">
                        <div className="text-xl ">Monthly</div>
                        <div className="font-semibold text-2xl py-2">THB 159.00/month</div>
                        <div className="">
                            You’ll be automatically charged the price every month starting on the first billing date
                            until you cancel your subscription. Cancel anytime. No refunds or credits for partial
                            billing periods.
                        </div>
                    </div>
                    <SubscribeContainer />
                </div>
            </div>
        </div>
    );
}

export default SubscribePage;
