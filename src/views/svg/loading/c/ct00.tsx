import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const CT00 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 2, dur = 1, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="30 30 40 40" ref={svgRef}>
        <g id={getExclusiveId("l")} fill={color} stroke={color} strokeWidth="0.1">
            <circle id={getExclusiveId("c1")} cx="35" cy="50" r={stroke} />
            <circle id={getExclusiveId("c2")} cx="50" cy="50" r={stroke} />
            <circle id={getExclusiveId("c3")} cx="55" cy="50" r={stroke} />
            <animateTransform href={getExclusiveId("#c1")} attributeName="transform" attributeType="XML" type="translate"
                values="0;10;10;10;0;" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c3")} attributeName="transform" attributeType="XML" type="translate" values="0;0;10;0;0"
                dur={dur} repeatCount="indefinite" />
        </g>
    </svg>
}

export default CT00;
