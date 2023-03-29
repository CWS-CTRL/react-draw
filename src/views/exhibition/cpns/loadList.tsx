import React, { memo, useState } from "react";

import type { iconsInfoType } from "../../../utils/svgImportControls";

interface propsType {
    iconsInfo: iconsInfoType;
    setData: Function;
}

const LoadList = (prosp: propsType) => {
    const { iconsInfo, setData } = prosp;
    
    return <div className="w-3/5 mx-auto my-5 grid grid-cols-2 gap-4 sm:w-1/2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">{
        iconsInfo.map(({ key, path }) =>
            <div
                className="grid aspect-square box-border border rounded cursor-pointer shadow-sm shadow-white"
                key={path}
                onClick={() => { setData({ key, path }) }}
            >
                <img src={path} alt={key} className="m-auto w-1/2 aspect-square" />
            </div>)
    }
    </div>
}

export default memo(LoadList);