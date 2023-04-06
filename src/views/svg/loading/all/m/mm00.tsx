import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const MM00 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 1, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="37 42 26 26" ref={svgRef}>
        <g id={getExclusiveId("l")} stroke={color} strokeLinecap="round" strokeLinejoin="round">
            <g id={getExclusiveId("frame")} fill="none" strokeWidth={stroke}>
                <path id={getExclusiveId("p1")} d="M 45 45,l 5 5 5 -5" strokeDasharray="14" />
                <path id={getExclusiveId("p2")} d="M 50 50,l-10 0 0 15 20 0 0 -15 -10 0" strokeDasharray="70" />
                <animate href={getExclusiveId("#p1")} attributeType="XML" attributeName="stroke-dashoffset" values="14;7;7;0"
                    keyTimes="0;0.08;0.92;1" dur={24 * dur / 10} repeatCount="1" />
                <animate href={getExclusiveId("#p2")} attributeType="XML" attributeName="stroke-dashoffset" values="70;70;0"
                    keyTimes="0;0.084;1" dur={22 * dur / 10} repeatCount="1" />
            </g>
            <g id={getExclusiveId("c")} fill={color} strokeWidth={1 * stroke / 10}>
                <circle id={getExclusiveId("c1")} cx="50" cy="58" r="1" opacity="0" />
                <circle id={getExclusiveId("c2")} cx="45" cy="58" r="1" opacity="0" />
                <circle id={getExclusiveId("c3")} cx="55" cy="58" r="1" opacity="0" />
                <animate href={getExclusiveId("#c1")} attributeType="XML" attributeName="opacity" values="1;0;1" dur={dur} begin={25 * dur / 10}
                    repeatCount="indefinite" />
                <animate href={getExclusiveId("#c2")} attributeType="XML" attributeName="opacity" values="1;0;1" dur={dur} begin={26 * dur / 10}
                    repeatCount="indefinite" />
                <animate href={getExclusiveId("#c3")} attributeType="XML" attributeName="opacity" values="1;0;1" dur={dur} begin={27 * dur / 10}
                    repeatCount="indefinite" />
            </g>
        </g>
    </svg>
}

export default MM00;
