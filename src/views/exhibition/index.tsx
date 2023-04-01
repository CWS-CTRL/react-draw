import React, { useState } from "react";

import Reminder from "./header/reminder";
import Search from "./header/search";
import LoadList from "./list/loadList";
import Magnify from "./custom/magnify";

import requireSVGComponents from "../../utils/requireSVGComponents";

import { iconInfoType } from "../../utils/requireSVGComponents";

const iconsInfo = requireSVGComponents.batchImportLoading();

const ss: any[] = [];
const svgs = require.context("../svg/loading", true, /\.tsx/)
svgs.keys().forEach(key => {
    ss.push(svgs(key).default)
})


const Exhibitions = () => {
    const [iconDetailInfo, setIconDetailInfo] = useState<iconInfoType | null>(null);


    return <div>
        <Reminder />
        <Search />
        {iconsInfo.length && <LoadList iconsInfo={iconsInfo} setData={setIconDetailInfo} />}
        {iconDetailInfo && <Magnify iconDetailInfo={iconDetailInfo!} setData={setIconDetailInfo} />}
    </div>
}

export default Exhibitions;