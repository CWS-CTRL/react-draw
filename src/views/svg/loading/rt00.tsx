import React from "react";

import { setExclusiveId } from "../../../utils";

import type { SVGProps } from "./type";


const RT00 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", strokeWidth = 2, dur = 12, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, strokeWidth, dur } }
    const getExclusiveId = setExclusiveId()

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" ref={svgRef}>
        <g id={getExclusiveId("l")} fill="none" stroke={color} strokeWidth={strokeWidth} strokeOpacity="0.3">
            <rect x="10" y="10" width="18" height="18" rx="5" ry="5" />
            <rect x="36" y="10" width="18" height="18" rx="5" ry="5" />
            <rect x="61" y="10" width="18" height="18" rx="5" ry="5" />
            <rect x="10" y="36" width="18" height="18" rx="5" ry="5" />
            <rect x="36" y="36" width="18" height="18" rx="5" ry="5" />
            <rect x="61" y="36" width="18" height="18" rx="5" ry="5" />
            <rect x="10" y="61" width="18" height="18" rx="5" ry="5" />
            <rect x="36" y="61" width="18" height="18" rx="5" ry="5" />
            <rect x="61" y="61" width="18" height="18" rx="5" ry="5" />
            <path id={getExclusiveId("path")} d="M 19 19,l 51 0 0 26 -51 0 0 26 51 0 0 -51 -26 0 0 51 -26 0 0 -51" strokeOpacity="0" />
            <rect id={getExclusiveId("move")} x="-9" y="-9" width="18" height="18" rx="5" ry="5" strokeOpacity="1" />
            <animateMotion href={getExclusiveId("#move")} dur={dur} rotate="auto" repeatCount="indefinite">
                <mpath href={getExclusiveId("#path")} />
            </animateMotion>
        </g>
    </svg>
}

export default RT00;