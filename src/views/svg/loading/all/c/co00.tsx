import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const CO00 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 0.9, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="35 35 30 30" ref={svgRef}>
        <g id={getExclusiveId("l")} fill={color} stroke={color} strokeWidth={stroke}>
            <circle id={getExclusiveId("c1")} transform="rotate(0 50 50) translate(0 -10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c2")} transform="rotate(40 50 50) translate(0 -10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c3")} transform="rotate(80 50 50) translate(0 -10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c4")} transform="rotate(120 50 50) translate(0 -10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c5")} transform="rotate(160 50 50) translate(0 -10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c6")} transform="rotate(200 50 50) translate(0 -10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c7")} transform="rotate(240 50 50) translate(0 -10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c8")} transform="rotate(280 50 50) translate(0 -10)" cx="50" cy="50" r="1" />
            <circle id={getExclusiveId("c9")} transform="rotate(320 50 50) translate(0 -10)" cx="50" cy="50" r="1" />
            <animate href={getExclusiveId("#c1")} attributeType="XML" attributeName="opacity" values="0;1;0" dur={dur}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c2")} attributeType="XML" attributeName="opacity" values="0;1;0" dur={dur} begin={1 * dur / 9}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c3")} attributeType="XML" attributeName="opacity" values="0;1;0" dur={dur} begin={2 * dur / 9}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c4")} attributeType="XML" attributeName="opacity" values="0;1;0" dur={dur} begin={3 * dur / 9}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c5")} attributeType="XML" attributeName="opacity" values="0;1;0" dur={dur} begin={4 * dur / 9}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c6")} attributeType="XML" attributeName="opacity" values="0;1;0" dur={dur} begin={5 * dur / 9}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c7")} attributeType="XML" attributeName="opacity" values="0;1;0" dur={dur} begin={6 * dur / 9}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c8")} attributeType="XML" attributeName="opacity" values="0;1;0" dur={dur} begin={7 * dur / 9}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#c9")} attributeType="XML" attributeName="opacity" values="0;1;0" dur={dur} begin={8 * dur / 9}
                repeatCount="indefinite" />
        </g>
    </svg>
}

export default CO00;