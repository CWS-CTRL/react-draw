import React, { memo } from "react";

import type { iconsInfoType } from "@utils/us/requireSVGComponents";

interface propsType {
    iconsInfo: iconsInfoType;
    setData: Function;
}

const LoadList = (prosp: propsType) => {
    console.log("loadlist");

    const { iconsInfo, setData } = prosp;

    return <div className="w-3/5 mx-auto my-5 grid grid-cols-2 gap-4 sm:w-1/2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">{
        iconsInfo.map(({ path, name, Component }) =>
            <div
                className="grid place-content-center  aspect-square box-border border rounded cursor-pointer shadow-sm shadow-white"
                key={path}
                onClick={(e) => { setData({ Component }) }}
            >
                {Component({})}
            </div>)
    }
    </div>
}

export default memo(LoadList);