import { Link } from "react-router-dom";

function CreateProductCard({ src, header, content, to }) {
    return (
        <>
            <Link
                to={to}
                className="flex flex-col justify-center items-center gap-2 bg-white shadow-md shadow-main rounded-lg"
            >
                <div className="w-16 bg-blue-200 aspect-square rounded-full">
                    <img src={src} className="h-full w-full object-cover object-center lg:h-full lg:w-full" />
                </div>
                <div className="mt-1 text-sm text-gray-500">{header}</div>
                <div className="mt-1 text-sm text-gray-500">{content}</div>
            </Link>
        </>
    );
}

export default CreateProductCard;
