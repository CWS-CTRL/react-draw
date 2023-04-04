import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "./type";


const PR00 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 3, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50" ref={svgRef}>
        <g id={getExclusiveId("l")} fill={color} stroke={color} strokeWidth="0.1">
            <circle id={getExclusiveId("c1")} cx="30" cy="50" r={stroke} />
            <circle id={getExclusiveId("c2")} cx="40" cy="50" r={stroke} />
            <circle id={getExclusiveId("c3")} cx="50" cy="50" r={stroke} />
            <circle id={getExclusiveId("c4")} cx="60" cy="50" r={stroke} />
            <circle id={getExclusiveId("c5")} cx="70" cy="50" r={stroke} />
            <animateTransform href={getExclusiveId("#c1")} attributeName="transform" attributeType="XML" type="translateX" values="0;40;0"
                dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c2")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 35 50;-180 35 50;-180 35 50;0 35 50" keyTimes="0;0.1;0.9;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c3")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 45 50;0 45 50;-180 45 50;-180 45 50;0 45 50;0 45 50" keyTimes="0;0.125;0.225;0.775;0.875;1"
                dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c4")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 55 50;0 55 50;-180 55 50;-180 55 50;0 55 50;0 55 50" keyTimes="0;0.25;0.35;0.65;0.75;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c5")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 65 50;0 65 50;-180 65 50;0 65 50;0 65 50" keyTimes="0;0.375;0.5;0.625;1" dur={dur}
                repeatCount="indefinite" />
        </g>
    </svg>
}

export default PR00;
