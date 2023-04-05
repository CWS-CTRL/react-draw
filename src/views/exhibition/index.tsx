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
    return <div>
        <Reminder />
        <Search />
        <Suspense fallback="">
            <div>{useRoutes(routes)}</div>
        </Suspense>
    </div>
}

export default Exhibitions;