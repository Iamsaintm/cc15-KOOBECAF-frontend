import { Link } from "react-router-dom";
import Button from "../components/Button";
import Search from "../features/filter/Search";

function SideNavCreate() {
    let arr = [];

    for (let i = 1; i <= 2; i++) {
        arr = [...arr, { id: i, name: i }];
    }

    return (
        <>
            <div className="sticky h-16"></div>
            <div>สร้างรายการสินค้าใหม่</div>
            <div className="bg-blue-400 p-2 rounded-md">เลือกประเภทรายการสินค้า</div>
            <div className="border-b border-main-dark mb-2 pb-2"></div>
            <div className="flex flex-col gap-2">
                {arr.map((x) => (
                    <div className="bg-blue-400 p-2 rounded-md" key={x.id}>
                        {x.name}
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-2 overflow-auto h-screen pb-56 px-2"></div>
        </>
    );
}

export default SideNavCreate;
