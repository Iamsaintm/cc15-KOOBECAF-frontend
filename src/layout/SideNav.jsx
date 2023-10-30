import Categories from "../features/filter/Categories";
import Search from "../features/filter/Search";

function SideNav() {

  return (
    <>
      <div className="sticky">
        <Search />
      </div>
      <div className="flex flex-col gap-2 overflow-auto h-screen pb-48 px-2">
        <Categories />
      </div>
    </>
  )
}

export default SideNav