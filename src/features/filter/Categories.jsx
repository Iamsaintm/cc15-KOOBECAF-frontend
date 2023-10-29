function Categories() {
    let arr = [];

    for(let i = 1; i <= 19; i++){
      arr = [...arr, {id: i, name: i}]
    };

  return (
    <>
        <div>Categories</div>
        {arr.map(x => <div className="bg-blue-400 p-2 rounded-md" key={x.id}>{x.name}</div>)}
    </>
  )
}

export default Categories