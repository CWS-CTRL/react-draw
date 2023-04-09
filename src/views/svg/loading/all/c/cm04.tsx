import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const CM04 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 1, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="42 42 16 16" ref={svgRef}>
        <g id={getExclusiveId("l")} fill="none" stroke={color} strokeWidth={stroke}>
            <circle id={getExclusiveId("c1")} cx="50" cy="50" r="3" strokeDasharray="18.84" strokeDashoffset="18.84" />
            <circle id={getExclusiveId("c2")} cx="50" cy="50" r="5" strokeDasharray="31.4" strokeDashoffset="31.4" />
            <animate href={getExclusiveId("#c1")} attributeType="XML" attributeName="stroke-dashoffset" values="18.84;9.42" dur={dur}
                repeatCount="1" fill="freeze" />
            <animateTransform href={getExclusiveId("#c1")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;360 50 50" dur={dur} begin={dur} repeatCount="indefinite" />
            <animate href={getExclusiveId("#c2")} attributeType="XML" attributeName="stroke-dashoffset" values="32;-15.7" dur={dur}
                repeatCount="1" fill="freeze" />
            <animate href={getExclusiveId("#c2")} attributeType="XML" attributeName="stroke-dasharray" values="31.4;15.7" dur={dur}
                repeatCount="1" fill="freeze" />
            <animateTransform href={getExclusiveId("#c2")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;360 50 50" dur={dur} begin={dur} repeatCount="indefinite" />
        </g>
    </svg>
}

export default CM04;
