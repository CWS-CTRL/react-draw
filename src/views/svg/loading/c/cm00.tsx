import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const CM00 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 1.5, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="42 42 16 16" ref={svgRef}>
        <g id={getExclusiveId("l")} fill="none" stroke={color} strokeWidth={stroke}>
            <circle id={getExclusiveId("c1")} cx="50" cy="50" r="5" strokeDasharray="1 50" strokeDashoffset="0" />
            <animateTransform href={getExclusiveId("#l")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;360 50 50" dur={4 * dur / 3} repeatCount="indefinite" />
            <animate href={getExclusiveId("#c1")} attributeType="XML" attributeName="stroke-dasharray" values="1 50;23 50;45 50" dur={dur}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c1")} attributeType="XML" attributeName="stroke-dashoffset" values="0;-8;-31" dur={dur}
                repeatCount="indefinite" />
        </g>
    </svg>
}

export default CM00;