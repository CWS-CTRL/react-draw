import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const Co02 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 3, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="42 42 16 16" ref={svgRef}>
        <g id={getExclusiveId("l")} fill="none" stroke={color} strokeWidth={stroke}>
            <circle id={getExclusiveId("c1")} transform="rotate(17 50 50)" cx="50" cy="50" r="5" strokeDasharray="15.7" />
            <circle id={getExclusiveId("c2")} cx="50" cy="50" r="5" strokeDasharray="1.57" />
            <animateTransform href={getExclusiveId("#c1")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;-360 50 50" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c2")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;360 50 50" dur={dur} repeatCount="indefinite" />
        </g>
    </svg>
}

export default Co02;
