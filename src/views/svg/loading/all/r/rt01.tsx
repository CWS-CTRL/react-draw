import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const RT01 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 0.1, dur = 3.5, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } }
    const getExclusiveId = setExclusiveId()

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="39 39 22 22" ref={svgRef}>
        <g id={getExclusiveId("l")} fill="none" stroke={color} strokeWidth={stroke}>
            <rect id={getExclusiveId("r1")} x="41" y="45" width="3" height="3" />
            <rect id={getExclusiveId("r2")} x="41" y="50" width="3" height="3" />
            <rect id={getExclusiveId("r3")} x="46" y="50" width="3" height="3" />
            <rect id={getExclusiveId("r4")} x="51" y="50" width="3" height="3" />
            <rect id={getExclusiveId("r5")} x="56" y="50" width="3" height="3" />
            <animateTransform href={getExclusiveId("#r1")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 5;0 5;" keyTimes="0;0.083;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r2")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 5;5 5;5 0;5 0;5 -5;0 -5" keyTimes="0;0.083;0.167;0.25;0.833;0.917;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r3")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 0;0 -5;5 -5;5 0;5 0;5 5;0 5;0 0;0 0"
                keyTimes="0;0.167;0.25;0.333;0.417;0.667;0.75;0.833;0.917;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r4")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 0;0 5;5 5;5 0;5 0" keyTimes="0;0.333;0.417;0.5;0.583;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r5")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 0;0 -5;-5 -5;-5 0;-5 0" keyTimes="0;0.5;0.583;0.667;0.75;1" dur={dur}
                repeatCount="indefinite" />
        </g>
    </svg>
}

export default RT01;
