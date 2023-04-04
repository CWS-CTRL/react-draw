import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "./type";


const CO01 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 2, dur = 1, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="35 35 30 30" ref={svgRef}>
        <g id={getExclusiveId("l")} fill={color} stroke={color} strokeWidth="0.1">
            <circle id={getExclusiveId("c1")} cx="40" cy="50" r={stroke} />
            <circle id={getExclusiveId("c2")} cx="50" cy="50" r={stroke} />
            <circle id={getExclusiveId("c3")} cx="60" cy="50" r={stroke} />
            <animate href={getExclusiveId("#c1")} attributeType="XML" attributeName="opacity" values="1;0;1" dur={dur}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c2")} attributeType="XML" attributeName="opacity" values="1;0;1" dur={dur} begin={1 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c3")} attributeType="XML" attributeName="opacity" values="1;0;1" dur={dur} begin={2 * dur / 10}
                repeatCount="indefinite" />
        </g>
    </svg>
}

export default CO01;
