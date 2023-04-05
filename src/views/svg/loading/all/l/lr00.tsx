import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const LR00 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 1.7, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } }
    const getExclusiveId = setExclusiveId()

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="34 34 32 32" ref={svgRef}>
        <g id={getExclusiveId("l")} fill="none" stroke={color} strokeWidth={stroke}>
            <path id={getExclusiveId("p1")} d="M 54.33 47.5,a 5 5 0 0 1 0 5" />
            <path id={getExclusiveId("p2")} d="M 56.06 46.5,a 7 7 0 0 1 0 7" />
            <path id={getExclusiveId("p3")} d="M 57.8 45.5,a 9 9 0 0 1 0 9" />
            <path id={getExclusiveId("p4")} d="M 59.53 44.5,a 11 11 0 0 1 0 11" />
            <path id={getExclusiveId("p5")} d="M 61.26 43.5,a 13 13 0 0 1 0 13" />
            <path id={getExclusiveId("p6")} d="M 45.67 47.5,a 5 5 0 0 0 0 5" />
            <path id={getExclusiveId("p7")} d="M 43.94 46.5,a 7 7 0 0 0 0 7" />
            <path id={getExclusiveId("p8")} d="M 42.2 45.5,a 9 9 0 0 0 0 9" />
            <path id={getExclusiveId("p9")} d="M 40.47 44.5,a 11 11 0 0 0 0 11" />
            <path id={getExclusiveId("p10")} d="M 38.74 43.5,a 13 13 0 0 0 0 13" />
            <animateTransform href={getExclusiveId("#p1")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;-180 50 50;-180 50 50;0 50 50" keyTimes="0;0.1;0.5;0.6;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#p2")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;-180 50 50;-180 50 50;0 50 50" keyTimes="0;0.1;0.5;0.6;1" dur={dur} begin={8 * dur / 170}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#p3")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;-180 50 50;-180 50 50;0 50 50" keyTimes="0;0.1;0.5;0.6;1" dur={dur} begin={16 * dur / 170}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#p4")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;-180 50 50;-180 50 50;0 50 50" keyTimes="0;0.1;0.5;0.6;1" dur={dur} begin={24 * dur / 170}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#p5")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;-180 50 50;-180 50 50;0 50 50" keyTimes="0;0.1;0.5;0.6;1" dur={dur} begin={32 * dur / 170}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#p6")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;-180 50 50;-180 50 50;0 50 50" keyTimes="0;0.1;0.5;0.6;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#p7")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;-180 50 50;-180 50 50;0 50 50" keyTimes="0;0.1;0.5;0.6;1" dur={dur} begin={8 * dur / 170}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#p8")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;-180 50 50;-180 50 50;0 50 50" keyTimes="0;0.1;0.5;0.6;1" dur={dur} begin={16 * dur / 170}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#p9")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;-180 50 50;-180 50 50;0 50 50" keyTimes="0;0.1;0.5;0.6;1" dur={dur} begin={24 * dur / 170}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#p10")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;0 50 50;-180 50 50;-180 50 50;0 50 50" keyTimes="0;0.1;0.5;0.6;1" dur={dur} begin={32 * dur / 170}
                repeatCount="indefinite" />
        </g>
    </svg>
}

export default LR00;
