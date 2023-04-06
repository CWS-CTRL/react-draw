import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const CT02 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 0.1, dur = 1.2, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="34 34 32 32" ref={svgRef}>
        <g id={getExclusiveId("l")} fill={color} stroke={color} strokeWidth={stroke}>
            <circle id={getExclusiveId("c1")} transform="rotate(-90 50 50) translate(10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c2")} transform="rotate(-30 50 50) translate(10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c3")} transform="rotate(30 50 50) translate(10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c4")} transform="rotate(90 50 50) translate(10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c5")} transform="rotate(150 50 50) translate(10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c6")} transform="rotate(210 50 50) translate(10)" cx="50" cy="50" r="1" />
            <animateTransform href={getExclusiveId("#c1")} attributeName="transform" attributeType="XML" type="translate"
                values="0 -10;0 -12;0 -10;0 -10" keyTimes="0;0.083;0.167;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c2")} attributeName="transform" attributeType="XML" type="translate"
                values="8.66 -5;8.66 -5;10.39 -6;8.66 -5;8.66 -5" keyTimes="0;0.167;0.25;0.333;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c3")} attributeName="transform" attributeType="XML" type="translate"
                values="8.66 5;8.66 5;10.39 6;8.66 5;8.66 5" keyTimes="0;0.333;0.417;0.5;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c4")} attributeName="transform" attributeType="XML" type="translate"
                values="0 10;0 10;0 12;0 10;0 10" keyTimes="0;0.5;0.583;0.667;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c5")} attributeName="transform" attributeType="XML" type="translate"
                values="-8.86 5;-8.86 5;-10.39 6;-8.86 5;-8.86 5" keyTimes="0;0.667;0.75;0.833;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c6")} attributeName="transform" attributeType="XML" type="translate"
                values="-8.86 -5;-8.86 -5;-10.39 -6;-8.86 -5" keyTimes="0;0.833;0.917;1" dur={dur}
                repeatCount="indefinite" />
        </g>
    </svg>
}

export default CT02;
