import { Link } from "react-router-dom";
import Button from "../../components/Button";

function DeleteProductCard({ src, productPrice, productName }) {
    return (
        <div className="flex flex-col gap-2">
            <div className="flex">
                <div className="aspect-square rounded-md p-3">
                    <img className="h-20 w-20 object-cover rounded-md" src={src} alt="productImage" />
                </div>
                <div className="flex flex-col justify-center">
                    <div className="text-md font-semibold">{productName}</div>
                    <div className="text-sm">&#3647; {productPrice}</div>
                </div>
            </div>
            <hr className="border" />
            <div className="flex justify-end">
                <div className="flex ">
                    <Link className=" px-2" to="/selling">
                        <button className="w-full text-lg rounded-full border-2 p-2 bg-main-light hover:bg-main-dark">
                            Cancel
                        </button>
                    </Link>
                </div>
                <div className="flex">
                    <Link className="px-2">
                        <Button text={"Delete"} type={"submit"} />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default DeleteProductCard;
