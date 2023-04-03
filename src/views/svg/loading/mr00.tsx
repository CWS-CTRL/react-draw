import React from "react";

import { setExclusiveId } from "../../../utils";

import type { SVGProps } from "./type";


const MR00 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", strokeWidth = 0.1, dur = 2, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, strokeWidth, dur } }
    const getExclusiveId = setExclusiveId()

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="13 18 75 75" ref={svgRef}>
        <g id={getExclusiveId("bicycle")} fill="none" stroke={color}>
            <g id={getExclusiveId("whell")} strokeWidth={5 * strokeWidth}>
                <g id={getExclusiveId("left-whell")}>
                    <circle cx="30" cy="60" r="10" />
                    <circle cx="30" cy="60" r="0.5" />
                    <g id={getExclusiveId("spoke")} strokeWidth={1 * strokeWidth}>
                        <line transform="rotate(0 30 60)" x1="30" y1="50" x2="30" y2="70" />
                        <line transform="rotate(30 30 60)" x1="30" y1="50" x2="30" y2="70" />
                        <line transform="rotate(60 30 60)" x1="30" y1="50" x2="30" y2="70" />
                        <line transform="rotate(90 30 60)" x1="30" y1="50" x2="30" y2="70" />
                        <line transform="rotate(120 30 60)" x1="30" y1="50" x2="30" y2="70" />
                        <line transform="rotate(150 30 60)" x1="30" y1="50" x2="30" y2="70" />
                    </g>
                </g>
                <g id={getExclusiveId("right-whell")}>
                    <circle cx="70" cy="60" r="10" />
                    <circle cx="70" cy="60" r="0.5" />
                    <g id={getExclusiveId("spoke")} strokeWidth={1 * strokeWidth}>
                        <line transform="rotate(0 70 60)" x1="70" y1="50" x2="70" y2="70" />
                        <line transform="rotate(30 70 60)" x1="70" y1="50" x2="70" y2="70" />
                        <line transform="rotate(60 70 60)" x1="70" y1="50" x2="70" y2="70" />
                        <line transform="rotate(90 70 60)" x1="70" y1="50" x2="70" y2="70" />
                        <line transform="rotate(120 70 60)" x1="70" y1="50" x2="70" y2="70" />
                        <line transform="rotate(150 70 60)" x1="70" y1="50" x2="70" y2="70" />
                    </g>
                </g>
                <g id={getExclusiveId("protection")}>
                    <path d="M 30 48,a 12 12 0 0 1 10.4 6" />
                    <path d="M 64 49.4 ,a 12 12 0 0 1 12 0" />
                </g>
                <animateTransform href={getExclusiveId("#left-whell")} attributeName="transform" attributeType="XML" type="rotate"
                    values="0 30 60;360 30 60" dur={dur} repeatCount="indefinite" />
                <animateTransform href={getExclusiveId("#right-whell")} attributeName="transform" attributeType="XML" type="rotate"
                    values="0 70 60;360 70 60" dur={dur} repeatCount="indefinite" />
            </g>
            <g id={getExclusiveId("drive")} strokeWidth={3 * strokeWidth}>
                <g id={getExclusiveId("disc")}>
                    <circle cx="30" cy="60" r="1.5" />
                </g>
                <g id={getExclusiveId("chain")}>
                    <line x1="30" y1="58.5" x2="46" y2="57" />
                    <line x1="30" y1="61.5" x2="46" y2="63" />
                </g>
                <g id={getExclusiveId("pedal")}>
                    <circle cx="46" cy="60" r="3" />
                    <g id={getExclusiveId("before")}>
                        <line x1="46" y1="60" x2="46" y2="65" />
                        <line id={getExclusiveId("p1")} x1="45" y1="65" x2="47" y2="65" strokeWidth={10 * strokeWidth} strokeLinecap="round" />
                    </g>
                    <g id={getExclusiveId("after")}>
                        <line x1="46" y1="57" x2="46" y2="55" />
                        <line id={getExclusiveId("p2")} x1="45" y1="55" x2="47" y2="55" strokeWidth={10 * strokeWidth} strokeLinecap="round" />
                    </g>
                    <animateTransform href={getExclusiveId("#pedal")} attributeName="transform" attributeType="XML" type="rotate"
                        from="0 46 60" to="360 46 60" dur={dur} repeatCount="indefinite" />
                    <animateTransform href={getExclusiveId("#p1")} attributeName="transform" attributeType="XML" type="rotate" from="0 46 65"
                        to="-360 46 65" dur={dur} repeatCount="indefinite" />
                    <animateTransform href={getExclusiveId("#p2")} attributeName="transform" attributeType="XML" type="rotate" from="0 46 55"
                        to="-360 46 55" dur={dur} repeatCount="indefinite" />
                </g>
            </g>
            <g id={getExclusiveId("frame")} strokeWidth={3 * strokeWidth}>
                <line x1="30" y1="60" x2="43" y2="47" />
                <line x1="46" y1="57" x2="42" y2="44" strokeWidth={4 * strokeWidth} />
                <line x1="48.1" y1="57.9" x2="66" y2="45" strokeWidth={4 * strokeWidth} />
                <line x1="70" y1="60" x2="64" y2="38" />
                <line x1="43" y1="47" x2="65" y2="43" />
                <line x1="66" y1="46" x2="65" y2="42" strokeWidth={10 * strokeWidth} strokeLinecap="round" />
            </g>
            <g id={getExclusiveId("cushion")} fill={color} strokeWidth={3 * strokeWidth}>
                <path d="M 39 44,l 7 -1,a 1 1 0 0 0  0 -2,l -6 -0.1,a 1.5 1.5 0 0 0 -1 3" />
            </g>
            <g id={getExclusiveId("head")} strokeWidth={4 * strokeWidth}>
                <path d="M 64 38,q 2 0.5 4 0,q 5 -2 -4 -3" />
                <line x1="64" y1="35" x2="60" y2="34.5" strokeWidth={10 * strokeWidth} strokeLinecap="round" />
            </g>
        </g>
    </svg>
}

export default MR00;

