import React, { memo, useState } from "react";

import type { iconsInfoType } from "../../../utils/requireSVGComponents";
import { SVGProps } from "../../svg/loading/type";

interface propsType {
    iconsInfo: iconsInfoType;
    setData: Function;
}

const LoadList = (prosp: propsType) => {
    const { iconsInfo, setData } = prosp;

    return <div className="w-3/5 mx-auto my-5 grid grid-cols-2 gap-4 sm:w-1/2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">{
        iconsInfo.map(({ key, Component }) =>
            <div
                className="grid place-content-center  aspect-square box-border border rounded cursor-pointer shadow-sm shadow-white"
                key={key}
                onClick={(e) => { setData({ key, Component,code:e.currentTarget.children[0].innerHTML }) }}
            >
                {Component({}) }
            </div>)
    }
    </div>
}

export default memo(LoadList);