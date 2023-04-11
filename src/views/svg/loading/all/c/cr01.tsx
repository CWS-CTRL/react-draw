import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const CR01 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 1.5, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50" ref={svgRef}>
        <g id={getExclusiveId("l")} fill={color} stroke={color} strokeWidth={stroke}>
            <circle id={getExclusiveId("c1")} cx="50" cy="30" r="3.2" />
            <circle id={getExclusiveId("c2")} cx="50" cy="30" r="2.8" />
            <circle id={getExclusiveId("c3")} cx="50" cy="30" r="2.4" />
            <circle id={getExclusiveId("c4")} cx="50" cy="30" r="2.0" />
            <circle id={getExclusiveId("c5")} cx="50" cy="30" r="1.6" />
            <circle id={getExclusiveId("c6")} cx="50" cy="30" r="1.2" />
            <circle id={getExclusiveId("c7")} cx="50" cy="30" r="0.8" />
            <circle id={getExclusiveId("c8")} cx="50" cy="30" r="0.4" />
            <animateTransform href={getExclusiveId("#c1")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;270 50 50;360 50 50" keyTimes="0;0.5;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c2")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;270 50 50;360 50 50" keyTimes="0;0.08;0.57;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c3")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;270 50 50;360 50 50" keyTimes="0;0.15;0.64;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c4")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;270 50 50;360 50 50" keyTimes="0;0.21;0.7;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c5")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;270 50 50;360 50 50" keyTimes="0;0.26;0.75;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c6")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;270 50 50;360 50 50" keyTimes="0;0.3;0.79;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c7")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;270 50 50;360 50 50" keyTimes="0;0.33;0.82;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#c8")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;270 50 50;360 50 50" keyTimes="0;0.35;0.84;1" dur={dur} repeatCount="indefinite" />
        </g>
    </svg>
}

export default CR01;
