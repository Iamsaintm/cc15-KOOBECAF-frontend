import { useState } from "react";
import ListingInput from "./ListingInput";

function ListingSearch() {
    const [input, setInput] = useState("");

    const onChangeInput = (e) => setInput(e.target.value);

    return (
        <>
            <div className="">
                <ListingInput placeholder={"Search"} />
            </div>
        </>
    );
}

export default ListingSearch;
