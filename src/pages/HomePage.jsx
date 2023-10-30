import ProductContainer from "../features/product/ProductContainer"

function HomePage() {

  return (
    <>
      <div className="flex w-full">
      <div className="min-w-[300px]"></div>
      <div className="flex flex-col w-full">
        <div className="flex justify-between p-6">
          <div>สินค้ายอดนิยมของวันนี้</div>
          <div>location</div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-2 px-6">
          <ProductContainer />
        </div>
      </div>
      </div>
    </>
  )
}

export default HomePage