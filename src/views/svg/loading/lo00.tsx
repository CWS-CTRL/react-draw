import React from "react";

import { setExclusiveId } from "../../../utils";

import type { SVGProps } from "./type";


const LO00 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", strokeWidth = 1, dur = 0.75, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, strokeWidth, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="20 20 60 60" ref={svgRef}>
        <g id={getExclusiveId("l")} fill="none" stroke={color} strokeWidth={strokeWidth}>
            <line id={getExclusiveId("l1")} transform="rotate(0 50 50) translate(0 -15)" x1="50" y1="45" x2="50" y2="55" />
            <line id={getExclusiveId("l2")} transform="rotate(45 50 50) translate(0 -15)" x1="50" y1="45" x2="50" y2="55" />
            <line id={getExclusiveId("l3")} transform="rotate(90 50 50) translate(0 -15)" x1="50" y1="45" x2="50" y2="55" />
            <line id={getExclusiveId("l4")} transform="rotate(135 50 50) translate(0 -15)" x1="50" y1="45" x2="50" y2="55" />
            <line id={getExclusiveId("l5")} transform="rotate(180 50 50) translate(0 -15)" x1="50" y1="45" x2="50" y2="55" />
            <line id={getExclusiveId("l6")} transform="rotate(225 50 50) translate(0 -15)" x1="50" y1="45" x2="50" y2="55" />
            <line id={getExclusiveId("l7")} transform="rotate(270 50 50) translate(0 -15)" x1="50" y1="45" x2="50" y2="55" />
            <line id={getExclusiveId("l8")} transform="rotate(315 50 50) translate(0 -15)" x1="50" y1="45" x2="50" y2="55" />
            <animate href={getExclusiveId("#l1")} attributeType="XML" attributeName="stroke-opacity" values="0;1;0" dur={dur}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l2")} attributeType="XML" attributeName="stroke-opacity" values="0;1;0" dur={dur} begin={1 * dur / 15}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l3")} attributeType="XML" attributeName="stroke-opacity" values="0;1;0" dur={dur} begin={2 * dur / 15}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l4")} attributeType="XML" attributeName="stroke-opacity" values="0;1;0" dur={dur} begin={3 * dur / 15}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l5")} attributeType="XML" attributeName="stroke-opacity" values="0;1;0" dur={dur} begin={4 * dur / 15}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l6")} attributeType="XML" attributeName="stroke-opacity" values="0;1;0" dur={dur} begin={5 * dur / 15}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l7")} attributeType="XML" attributeName="stroke-opacity" values="0;1;0" dur={dur} begin={6 * dur / 15}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l8")} attributeType="XML" attributeName="stroke-opacity" values="0;1;0" dur={dur} begin={7 * dur / 15}
                repeatCount="indefinite" />
        </g>
    </svg>
}

export default LO00;