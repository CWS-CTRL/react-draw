import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const LD00 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 1, dur = 1, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } }
    const getExclusiveId = setExclusiveId()

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="38 38 24 24" ref={svgRef}>
        <g id={getExclusiveId("l")} fill="none" stroke={color} strokeWidth={stroke}>
            <line id={getExclusiveId("l1")} x1="41" y1="50" x2="41" y2="45" strokeDasharray="5" />
            <line id={getExclusiveId("l2")} x1="41" y1="50" x2="41" y2="55" strokeDasharray="5" />
            <line id={getExclusiveId("l3")} x1="43" y1="50" x2="43" y2="45" strokeDasharray="5" />
            <line id={getExclusiveId("l4")} x1="43" y1="50" x2="43" y2="55" strokeDasharray="5" />
            <line id={getExclusiveId("l5")} x1="45" y1="50" x2="45" y2="45" strokeDasharray="5" />
            <line id={getExclusiveId("l6")} x1="45" y1="50" x2="45" y2="55" strokeDasharray="5" />
            <line id={getExclusiveId("l7")} x1="47" y1="50" x2="47" y2="45" strokeDasharray="5" />
            <line id={getExclusiveId("l8")} x1="47" y1="50" x2="47" y2="55" strokeDasharray="5" />
            <line id={getExclusiveId("l9")} x1="49" y1="50" x2="49" y2="45" strokeDasharray="5" />
            <line id={getExclusiveId("l10")} x1="49" y1="50" x2="49" y2="55" strokeDasharray="5" />
            <line id={getExclusiveId("l11")} x1="51" y1="50" x2="51" y2="45" strokeDasharray="5" />
            <line id={getExclusiveId("l12")} x1="51" y1="50" x2="51" y2="55" strokeDasharray="5" />
            <line id={getExclusiveId("l13")} x1="53" y1="50" x2="53" y2="45" strokeDasharray="5" />
            <line id={getExclusiveId("l14")} x1="53" y1="50" x2="53" y2="55" strokeDasharray="5" />
            <line id={getExclusiveId("l15")} x1="55" y1="50" x2="55" y2="45" strokeDasharray="5" />
            <line id={getExclusiveId("l16")} x1="55" y1="50" x2="55" y2="55" strokeDasharray="5" />
            <line id={getExclusiveId("l17")} x1="57" y1="50" x2="57" y2="45" strokeDasharray="5" />
            <line id={getExclusiveId("l18")} x1="57" y1="50" x2="57" y2="55" strokeDasharray="5" />
            <line id={getExclusiveId("l19")} x1="59" y1="50" x2="59" y2="45" strokeDasharray="5" />
            <line id={getExclusiveId("l20")} x1="59" y1="50" x2="59" y2="55" strokeDasharray="5" />
            <animate href={getExclusiveId("#l1")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l2")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l3")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={1 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l4")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={1 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l5")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={2 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l6")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={2 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l7")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={3 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l8")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={3 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l9")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={4 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l10")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={4 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l11")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={4 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l12")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={4 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l13")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={3 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l14")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={3 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l15")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={2 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l16")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={2 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l17")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={1 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l18")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur} begin={1 * dur / 10}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l19")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur}
                repeatCount="indefinite" />
            <animate href={getExclusiveId("#l20")} attributeType="XML" attributeName="stroke-dashoffset" values="0;5;0" dur={dur}
                repeatCount="indefinite" />
        </g>
    </svg>
}

export default LD00;
