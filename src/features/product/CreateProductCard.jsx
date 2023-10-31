function CreateProductCard({ src, header, content }) {
    return (
        <>
            <div className="flex flex-col justify-center items-center gap-2 bg-white rounded-lg">
                <div className="w-16 bg-blue-200 aspect-square rounded-full">
                    <img src={src} />
                </div>
                <div className="text-center text-base font-bold">{header}</div>
                <div className="text-center text-xs">{content}</div>
            </div>
        </>
    );
}

export default CreateProductCard;
