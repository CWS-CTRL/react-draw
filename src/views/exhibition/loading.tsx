import React, { useState } from "react";
import { useParams } from "react-router-dom";
import LoadList from "./list/loadList";
import Magnify from "./custom/magnify";

import { requireSVGComponents } from "@utils/index";

import type { iconInfoType } from "@utils/us/requireSVGComponents";


const Loading = () => {
    console.log("loading");

    const { keyword } = useParams();
    console.log(keyword);


    const iconsInfo = requireSVGComponents.getSpecifyLoading(keyword || "all");

    const [iconDetailInfo, setIconDetailInfo] = useState<iconInfoType | null>(null);

    return <div>
        {!!iconsInfo?.length && <LoadList iconsInfo={iconsInfo} setData={setIconDetailInfo} />}
        {iconDetailInfo && <Magnify iconDetailInfo={iconDetailInfo!} setData={setIconDetailInfo} />}
    </div>
}

export default Loading;