import React from "react";

import setExclusiveId from "../../../utils/setExclusiveId";

import type { SVGProps } from "./type";


const RT00 = ({ options = {} }: SVGProps) => {
    const { size = 48, color = "#ffffff", strokeWidth = 2, dur = 12, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, strokeWidth, dur } }
    const getExclusiveId = setExclusiveId()

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 70 70" ref={svgRef}>
        <g id={getExclusiveId("l")} fill="none" stroke={color} strokeWidth={strokeWidth} strokeOpacity="0.3">
            <rect x="1" y="1" width="18" height="18" rx="5" ry="5" />
            <rect x="26" y="1" width="18" height="18" rx="5" ry="5" />
            <rect x="51" y="1" width="18" height="18" rx="5" ry="5" />
            <rect x="1" y="26" width="18" height="18" rx="5" ry="5" />
            <rect x="26" y="26" width="18" height="18" rx="5" ry="5" />
            <rect x="51" y="26" width="18" height="18" rx="5" ry="5" />
            <rect x="1" y="51" width="18" height="18" rx="5" ry="5" />
            <rect x="26" y="51" width="18" height="18" rx="5" ry="5" />
            <rect x="51" y="51" width="18" height="18" rx="5" ry="5" />
            <path id={getExclusiveId("path")} d="M 10 10,l 50 0 0 25 -50 0 0 25 50 0 0 -50 -25 0 0 50 -25 0 0 -50" strokeOpacity="0" />
            <rect id={getExclusiveId("move")} x="-9" y="-9" width="18" height="18" rx="5" ry="5" strokeOpacity="1" />
            <animateMotion href={getExclusiveId("#move")} dur={dur} rotate="auto" repeatCount="indefinite">
                <mpath href={getExclusiveId("#path")} />
            </animateMotion>
        </g>
    </svg>
}

export default RT00;