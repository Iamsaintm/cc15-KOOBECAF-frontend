import Avatar from "../../components/Avatar";
import userImage from "../../assets/Images/user.jpg";
import Button from "../../components/Button";
import GoogleMapInput from "../../features/product/GoogleMap";
import Slider from "react-slick";

function ProductPreview({ src, productPrice, productDetail }) {
    const settings = {
        customPaging: function (i) {
            return (
                <img
                    id={i}
                    src="https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg?w=100"
                ></img>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        
    };

    return (
        <>
            <div className="flex w-full justify-center ml-[375px] bg-main-light">
                <div className="flex flex-col p-4 w-full mx-4 place-self-center bg-white shadow-lg rounded-lg">
                    <div className="flex-1 ">
                        <div className="flex pb-3 text-xl font-bold">Preview</div>
                    </div>
                    <div className="flex flex-1 border rounded-lg ">
                        <div
                            className="flex flex-1 items-center justify-center w-[50%] bg-[url('https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg')] drop-shadow-md bg-cover p-10 rounded-l"
                            // style={{
                            //     backgroundImage:
                            //         "https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg",
                            // }}
                        >
                            <div className="w-[400px]">
                                <Slider {...settings} className="text-2xl text-main-dark">
                                    <img
                                        src="https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg"
                                    ></img>
                                    <img src="https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg"></img>
                                    <img src="https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg"></img>
                                    <img src="https://img.freepik.com/premium-photo/cute-pastel-pupy-dog-pastl-room_902994-1158.jpg"></img>
                                </Slider>
                            </div>
                        </div>

                        <div className="flex flex-1 flex-col gap-y-2 w-[50%] p-3 ">
                            <div>
                                <p className="truncate text-lg mb-2">Title</p>
                                <p className="font-thin">฿ 30,000 {productPrice}</p>
                            </div>

                            <div className="border-b pb-2">
                                <p className="text-lg mb-2">Description</p>
                                <p className="break-all font-thin">
                                    สวัสดีวันนี้วันอะไรkjnjknlksnfkfnknfgkenglkermngkjenejrkgbnbfejknfgjerอะไรครับเนี่ย
                                    {productDetail}
                                </p>
                                <GoogleMapInput className="py-2 " />
                                <p className="truncate font-thin">
                                    กรุงเทพมหานคร อมรรัฒนโกสินธ์ มหิมนราทิเบท อเนกประสงค์ อนงค์ สวัสดี
                                </p>
                            </div>

                            <div>
                                <p className="text-lg mb-2">Seller Information</p>
                                <div className="flex gap-x-2 items-center">
                                    <Avatar src={userImage} />
                                    <p>Beboy bbbb</p>
                                </div>
                            </div>

                            <Button type={"submit"} text={"Message"} className="my-4" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPreview;
