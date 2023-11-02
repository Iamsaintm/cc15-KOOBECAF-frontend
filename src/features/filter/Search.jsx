import { useState } from "react";
import SearchInput from "./SearchInput";

function Search({ nameTagSearch = "Marketplace" }) {
    const [input, setInput] = useState("");

    const onChangeInput = (e) => setInput(e.target.value);

    return (
        <>
            <div className="pt-10 pb-2 px-4">
                <div className="flex justify-between">
                    <div className="text-2xl font-bold pl-2">{nameTagSearch}</div>
                </div>
                <SearchInput placeholder={"ค้นหา Marketplace"} />
            </div>
        </>
    );
}

export default Search;
