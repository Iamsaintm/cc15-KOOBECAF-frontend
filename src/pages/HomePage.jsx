import ProductContainer from "../features/product/ProductContainer";

function HomePage() {
    return (
        <>
            <div className="flex w-full bg-second-light">
                <div className="min-w-[360px]"></div>
                <div className="flex flex-col w-full bg-white">
                    <div className="flex justify-between py-6 px-12">
                        <div className="text-xl font-semibold">สินค้ายอดนิยมของวันนี้</div>
                        <div>location</div>
                    </div>
                    <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-12 px-12 bg-white">
                        <ProductContainer />
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomePage;
