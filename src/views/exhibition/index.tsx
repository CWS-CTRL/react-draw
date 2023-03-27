import React, { useState } from "react";

import LoadList from "./cpns/loadList";
import Magnify from "./cpns/magnify";

import svgImportControls from "../../utils/svgImportControls";

import { iconInfoType } from "../../utils/svgImportControls";

const iconsInfo = svgImportControls.batchImportLoading();

const Exhibitions = () => {
    const [iconDetailInfo, setIconDetailInfo] = useState<null | iconInfoType>(null);

    return <div>
        { iconsInfo.length&&<LoadList iconsInfo={iconsInfo} setData={setIconDetailInfo} />}
        {iconDetailInfo && <Magnify iconDetailInfo={iconDetailInfo!} setData={setIconDetailInfo} />}
    </div>
}

export default Exhibitions;