import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch, shallowEqualApp } from "@/store";
import { changeSearchKeyWords } from "@/store/modules/keyWords";
import LoadList from "./list/loadList";
import Magnify from "./custom/magnify";

import type { iconInfoType } from "@utils/us/requireSVGComponents";


const Loading = () => {
    const action = useAppDispatch();
    const keyword = useParams().keyword?.trim().replaceAll(/\s+/g, " ") || "";

    useEffect(() => {
        action(changeSearchKeyWords(keyword))
    });

    const [iconDetailInfo, setIconDetailInfo] = useState<iconInfoType | null>(null);

    return <div>
        <LoadList keyword={keyword} setData={setIconDetailInfo} />
        {iconDetailInfo && <Magnify iconDetailInfo={iconDetailInfo!} setData={setIconDetailInfo} />}
    </div>
}

export default Loading;