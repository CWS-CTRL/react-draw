import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const RT02 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 0.1, dur = 1, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } }
    const getExclusiveId = setExclusiveId()

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="40 39 20 20" ref={svgRef}>
        <g id={getExclusiveId("l")} transform="rotate(45 50 50)" fill="none" stroke={color} strokeWidth={stroke}>
            <rect id={getExclusiveId("r1")} x="46" y="46" width="3" height="3" />
            <rect id={getExclusiveId("r2")} x="50" y="46" width="3" height="3" />
            <rect id={getExclusiveId("r3")} x="50" y="50" width="3" height="3" />
            <rect id={getExclusiveId("r4")} x="46" y="50" width="3" height="3" />
            <animateTransform href={getExclusiveId("#r1")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;2 0;2 0;4 0" keyTimes="0;0.333;0.667;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r2")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;2 0;2 4;0 4" keyTimes="0;0.333;0.667;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r3")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;-2 0;-2 0;-4 0" keyTimes="0;0.333;0.667;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r4")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;-2 0;-2 -4;0 -4" keyTimes="0;0.333;0.667;1" dur={dur} repeatCount="indefinite" />
        </g>
    </svg>
}

export default RT02;