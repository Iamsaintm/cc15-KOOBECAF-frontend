import React from "react";
import Avatar from "../../components/Avatar";
import userImage from "../../assets/Images/user.jpg";
import Button from "../../components/Button";
import Map from "../../components/Map";

function ProductPreview({ src, productPrice, productDetail }) {
    return (
        <>
            <div className="bg-main-light flex w-full justify-center items-center p-24">
                <div className="bg-white shadow-lg shadow-main flex flex-col w-full h-full rounded-lg p-5">
                    <div className="flex pb-3 text-lg">Preview</div>
                    <div className="flex h-full">
                        <div className=" w-3/5 rounded-l-lg border">
                            <div
                                className={`relative top-0 bg-[url("https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg?w=1060")] object-contain bg-center w-full blur-sm saturate-50`}
                            ></div>
                            <img src={src} className="relative h-full object-contain z-50 -top-[510px]" />
                        </div>

                        <div className="flex flex-col bg-white justify-between border w-2/5 rounded-r-lg gap-4 p-3 h-full ">
                            <div className="flex flex-col gap-3 overflow-auto">
                                <div className="break-all text-xl">Title</div>
                                <div className="font-thin">฿ 30,000 {productPrice}</div>

                                <div className="">
                                    <div className="text-xl">Detail</div>
                                    <div className="break-all font-thin">
                                        สวัสดีวันนี้วันอะไรkjnjknlksnfkfnknfgkenglkermngkjenejrkgbnbfejknfgjerอะไรครับเนี่ย
                                        {productDetail}
                                    </div>
                                </div>

                                {/* <img src={src} className="rounded-lg" /> */}
                                {/* <div className="">
                                    <div className="break-all font-thin">
                                        กรุงเทพมหานคร อมรรัฒนโกสินธ์ มหิมนราทิเบท อเนกประสงค์ อนงค์ สวัสดี
                                    </div>
                                </div> */}

                                <div className="border" />

                                <div>
                                    <div className="text-xl ">
                                        Seller Information
                                        <Avatar src={userImage} />
                                    </div>
                                </div>
                            </div>

                            <div className="border" />

                            <div className="px-20 flex items-end ">
                                <Button type={"submit"} text={"Message"} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPreview;
