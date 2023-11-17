import { Link } from "react-router-dom";

function ListChatCard({ src, productName, firstName, lastName, productId, userId, productDetail, productPrice }) {
    return (
        <Link to={`/messager/seller/${productId}/${userId}`} state={{ productDetail, userId }}>
            <div className="w-full h-[120px] bg-white rounded-md my-2 flex px-16">
                <div className="aspect-square rounded-md p-3">
                    <img className="h-full object-cover rounded-md" src={src} alt="productImage" />
                </div>
                {userId !== productDetail.userId ? (
                    <div className="absolute mt-4 right-16">สินค้าที่คุณขาย</div>
                ) : (
                    <div className="hidden"></div>
                )}

                <div className="p-4 w-full ">
                    <div className="flex flex-col gap-4">
                        <div className="flex flex-col gap-2">
                            <div className="text-xl">
                                {firstName} {lastName}
                            </div>
                            <div className="text-xl font-semibold">{productName}</div>
                            <div className="">&#3647; {productPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default ListChatCard;
