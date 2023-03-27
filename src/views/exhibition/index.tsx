import React, { useState } from "react";

import Magnify from "./cpns/magnify";

import { iconInfoType,iconsInfoType } from "../../utils/svgImportControls";

interface propsType {
    iconsInfo: iconsInfoType
}

const Exhibitions = (props: propsType) => {
    const { iconsInfo } = props;
    const [iconDetailInfo,setIconDetailInfo]=useState<null|iconInfoType>(null)
console.log(123);

    return <div>
        <div className="w-3/5 mx-auto grid grid-cols-2 gap-4 sm:w-1/2 sm:grid-cols-4">{
        iconsInfo.map(({ key, path }) =>
            <div
                className="grid aspect-square box-border border rounded cursor-pointer"
                key={path}
                onClick={() => { setIconDetailInfo({key,path}) }}
            >
            <img src={path} alt={key} className="m-auto w-1/2 aspect-square" />
        </div>)
        }</div>
        {iconDetailInfo && <Magnify iconDetailInfo={iconDetailInfo!} setData={ setIconDetailInfo} />}
    </div>
}

export default Exhibitions;