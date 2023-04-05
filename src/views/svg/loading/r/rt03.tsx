
import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const RT03 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 2, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } }
    const getExclusiveId = setExclusiveId()

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="18 18 64 64" ref={svgRef}>
        <g id={getExclusiveId("l")} transform="rotate(45 50 50)" fill={color} stroke={color} strokeWidth={stroke}>
            <rect id={getExclusiveId("r1")} x="46" y="46" width="8" height="8" transform-origin="50 50" />
            <rect id={getExclusiveId("r2")} x="30" y="30" width="4" height="4" />
            <rect id={getExclusiveId("r3")} x="48" y="30" width="4" height="4" />
            <rect id={getExclusiveId("r4")} x="66" y="30" width="4" height="4" />
            <rect id={getExclusiveId("r5")} x="66" y="48" width="4" height="4" />
            <rect id={getExclusiveId("r6")} x="66" y="66" width="4" height="4" />
            <rect id={getExclusiveId("r7")} x="48" y="66" width="4" height="4" />
            <rect id={getExclusiveId("r8")} x="30" y="66" width="4" height="4" />
            <rect id={getExclusiveId("r9")} x="30" y="48" width="4" height="4" />
            <animateTransform href={getExclusiveId("#r1")} attributeName="transform" attributeType="XML" type="scale"
                values="1 1;1 1;1.2 1.2;1.2 1.2;1 1;1 1" keyTimes="0;0.2;0.433;0.533;0.733;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r2")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;18 18;18 18;0 0;0 0" keyTimes="0;0.2;0.5;0.7;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r3")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 0;0 18;0 18;0 0;0 0" keyTimes="0;0.033;0.233;0.533;0.733;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r4")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 0;-18 18;-18 18;0 0;0 0" keyTimes="0;0.067;0.267;0.567;0.767;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r5")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 0;-18 0;-18 0;0 0;0 0" keyTimes="0;0.1;0.3;0.6;0.8;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r6")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 0;-18 -18;-18 -18;0 0;0 0" keyTimes="0;0.133;0.333;0.633;0.833;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r7")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 0;0 -18;0 -18;0 0;0 0" keyTimes="0;0.167;0.367;0.667;0.867;1" dur={dur}
                repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r8")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 0;18 -18;18 -18;0 0;0 0" keyTimes="0;0.2;0.4;0.7;0.9;1" dur={dur} repeatCount="indefinite" />
            <animateTransform href={getExclusiveId("#r9")} attributeName="transform" attributeType="XML" type="translate"
                values="0 0;0 0;18 0;18 0;0 0;0 0" keyTimes="0;0.233;0.433;0.733;0.933;1" dur={dur}
                repeatCount="indefinite" />
        </g>
    </svg>
}

export default RT03;
