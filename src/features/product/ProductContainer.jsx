import ProductCard from "./ProductCard";

function ProductContainer() {
    let arr = [];

    for (let i = 1; i <= 60; i++) {
        arr = [...arr, { id: i, name: i }];
    }

    return (
        <>
            {arr.map((x) => (
                <ProductCard key={x.id} />
            ))}
        </>
    );
}

export default ProductContainer;
