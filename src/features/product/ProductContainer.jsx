function ProductContainer() {
    let arr = [];

    for(let i = 1; i <= 60; i++){
      arr = [...arr, {id: i, name: i}]
    };

  return (
    <>
      {arr.map(x => <div key={x.id} className="w-full h-[244px] bg-yellow-700 rounded-md">{x.name}</div>)} 
    </>
  )
}

export default ProductContainer