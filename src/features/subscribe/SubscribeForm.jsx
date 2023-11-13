import { DatePicker, ConfigProvider } from "antd";
import InputForm from "../../components/InputForm";
import Button from "../../components/Button";
// import { paymentSchema } from "../../utils/payment-validator";

function SubscribeForm() {
    return (
        <>
            <form>
                <div>
                    <div>Name on Card</div>
                    <InputForm className="pt-0" placeholder={"Card holder name"} />
                    <div className="pt-2">Card Number</div>
                    <InputForm className="pt-0" placeholder={"● ● ● ●  ● ● ● ●  ● ● ● ●  ● ● ● ●"} />
                </div>
                <div className="pt-2">
                    <div className="grid grid-cols-2 gap-6">
                        <div>
                            <div>Expiry Date</div>
                            <div className="w-full">
                                <ConfigProvider
                                    theme={{
                                        token: {
                                            colorTextPlaceholder: "#6b7280",
                                        },
                                    }}
                                >
                                    <DatePicker
                                        picker="month"
                                        className="w-full rounded-full outline-none border-2 px-4 py-[9px]  focus:border-1 border-main focus:ring-2 focus:ring-main-dark"
                                    />
                                </ConfigProvider>
                            </div>
                        </div>
                        <div>
                            <div>Security Code</div>
                            <InputForm className="pt-0" placeholder={"● ● ●"} />
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-4">
                    <div className="flex justify-center w-full">
                        <Button type={"submit"} text={"Confirm"} />
                    </div>
                </div>
            </form>
        </>
    );
}

export default SubscribeForm;
