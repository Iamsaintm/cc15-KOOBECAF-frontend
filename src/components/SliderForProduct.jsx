import Slider from "react-slick";
import { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function SliderForProduct({ images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const settings = {
        customPaging: function (i) {
            return (
                <a className="absolute w-10 ">
                    <img
                        src={images[i]}
                        alt={`Image ${i}`}
                        className={`rounded-md ${i === currentSlide ? "border border-gray-100" : "opacity-50"}`}
                    />
                </a>
            );
        },
        dots: true,
        dotsClass: "slick-dots slick-thumb",
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => setCurrentSlide(next),
    };

    return (
        <div className="relative w-full">
            <Slider {...settings}>
                {images.map((image, index) => (
                    <div key={index} className="">
                        <img src={image} alt={`Image ${index}`} className="w-full" />
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default SliderForProduct;
