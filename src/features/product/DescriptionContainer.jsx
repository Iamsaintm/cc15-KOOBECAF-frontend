import React from "react";

function DescriptionContainer() {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="text-xl font-bold">Description</div>
                <div className="h-24 bg-blue-200 rounded-md border-2">
                    <textarea className="resize-none w-full h-full rounded-md" />
                </div>
                <div className="w-[300px] break-all text-sm text-error self-center">
                    !! Items like animals, drugs, weapons, counterfeits, and other items that infringe intellectual
                    property aren't allowed on KOOBECAF.
                </div>
            </div>
        </>
    );
}

export default DescriptionContainer;
