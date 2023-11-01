import { Link } from "react-router-dom";

function CreateProductCard({ src, header, content, to }) {
    return (
        <>
            <Link
                to={to}
                className="flex flex-col justify-center items-center gap-2 bg-white shadow-md shadow-main rounded-lg"
            >
                <div className="w-16 bg-blue-200 aspect-square rounded-full">
                    <img src={src} />
                </div>
                <div className="text-center text-base font-bold">{header}</div>
                <div className="text-center text-xs">{content}</div>
            </Link>
        </>
    );
}

export default CreateProductCard;
