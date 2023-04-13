import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const Co03 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 2, dur = 3, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="44 44 12 12" ref={svgRef}>
        <g id={getExclusiveId("l")} transform="rotate(-45 50 50)" fill="none" stroke={color} strokeWidth={stroke}>
            <path id={getExclusiveId("p1")} d="m 50 47,a 3 3 0 0 1 3 3" />
            <path id={getExclusiveId("p2")} d="m 53 50,a 3 3 0 0 1 -3 3" opacity="0" />
            <path id={getExclusiveId("p3")} d="m 50 53,a 3 3 0 0 1 -3 -3" opacity="0" />
            <path id={getExclusiveId("p4")} d="m 47 50,a 3 3 0 0 1 3 -3" opacity="0" />
            <animate href={getExclusiveId("#p2")} attributeType="XML" attributeName="opacity" values="0;1;1;1;1;1;0" dur={dur}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#p3")} attributeType="XML" attributeName="opacity" values="0;0;1;1;1;0;0" dur={dur}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#p4")} attributeType="XML" attributeName="opacity" values="0;0;0;1;0;0;0" dur={dur}
                repeatCount="indefinite" />
        </g>

    </svg>
}

export default Co03;
