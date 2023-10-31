import { Link } from "react-router-dom";

function CategorieItem({ icons, title, to = "/", isActive }) {
    return (
        <>
            <Link to={to}>
                <div className={`flex gap-4 hover:bg-second/40 rounded-lg p-2 group ${isActive && "bg-second/40"}`}>
                    <div
                        className={`flex justify-center items-center text-xl w-10 aspect-square rounded-full group-hover:bg-main bg-[#d9d9d9] group-hover:border-[3px] ${
                            isActive && "bg-error-light/50 border-[3px] border-[#d9d9d9] group-hover:bg-error-light/50"
                        }`}
                    >
                        {icons}
                    </div>
                    <div className="self-center font-medium">{title}</div>
                </div>
            </Link>
        </>
    );
}

export default CategorieItem;
