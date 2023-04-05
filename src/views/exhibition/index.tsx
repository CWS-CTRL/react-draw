import React, { useState, Suspense } from "react";
import { useRoutes } from "react-router-dom";
import routes from "@/router";

import Reminder from "./header/reminder";
import Search from "./header/search";
import LoadList from "./list/loadList";
import Magnify from "./custom/magnify";

import { requireSVGComponents } from "../../utils";

import type { iconInfoType } from "@utils/us/requireSVGComponents";

const iconsInfo = requireSVGComponents.batchImportLoading();


const Exhibitions = () => {

    console.log("index");

    // const [iconDetailInfo, setIconDetailInfo] = useState<iconInfoType | null>(null);

    return <div>
        <Reminder />
        <Search />
        <Suspense fallback="">
            <div>{useRoutes(routes)}</div>
        </Suspense>
        {/* { <LoadList iconsInfo={iconsInfo} setData={setIconDetailInfo} />}
        { <Magnify iconDetailInfo={iconDetailInfo!} setData={setIconDetailInfo} />} */}
    </div>
}

export default Exhibitions;