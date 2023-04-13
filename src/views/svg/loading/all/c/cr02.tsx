import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const CR02 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 1, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="44 44 12 12" ref={svgRef}>
        <g id={getExclusiveId("l")} fill="none" stroke={color} stroke-width={stroke}>
            <path id={getExclusiveId("p1")} d="m 50 47,a 3 3 0 0 1 3 3" opacity="0.2" />
            <path id={getExclusiveId("p2")} d="m 53 50,a 3 3 0 0 1 -3 3" opacity="0.4" />
            <path id={getExclusiveId("p3")} d="m 50 53,a 3 3 0 0 1 -3 -3" opacity="0.6" />
            <path id={getExclusiveId("p4")} d="m 47 50,a 3 3 0 0 1 3 -3" opacity="0.8" />
            <animateTransform href={getExclusiveId("#l")} attributeName="transform" attributeType="XML" type="rotate"
                values="0 50 50;360 50 50" dur={dur} repeatCount="indefinite" />
        </g>

    </svg>
}

export default CR02;
