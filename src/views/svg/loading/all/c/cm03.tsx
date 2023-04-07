import React from "react";

import { setExclusiveId } from "@utils/index";

import type { SVGProps } from "../type";


const CM03 = ({ options = {} }: SVGProps) => {
    const { size = 60, color = "#ffffff", stroke = 0.1, dur = 1, svgRef } = options;
    if (svgRef) { svgRef.defaultProps = { size, color, stroke, dur } };
    const getExclusiveId = setExclusiveId();

    return <svg width={size} height={size} xmlns="http://www.w3.org/2000/svg" viewBox="25 25 50 50" ref={svgRef}>
        <g id={getExclusiveId("l")} fill={color} stroke={color}>
            <g id={getExclusiveId("Pac-Man")} strokeWidth={stroke}>
                <path id={getExclusiveId("p1")} d="M 30 50,a 10 10 0 0 1 20 0z" />
                <path id={getExclusiveId("p2")} d="M 30 50,a 10 10 0 0 0 20 0z" />
                <g id={getExclusiveId("beans")}>
                    <circle id={getExclusiveId("c1")} cx="56" cy="50" r="1" />
                    <circle id={getExclusiveId("c2")} cx="66" cy="50" r="1" />
                    <circle id={getExclusiveId("c3")} cx="76" cy="50" r="1" />
                </g>
                <animateTransform href={getExclusiveId("#p1")} attributeName="transform" attributeType="XML" type="rotate"
                    values="0 40 50;-60 40 50;0 40 50" dur={dur} repeatCount="indefinite" />
                <animateTransform href={getExclusiveId("#p2")} attributeName="transform" attributeType="XML" type="rotate"
                    values="0 40 50;60 40 50;0 40 50" dur={dur} repeatCount="indefinite" />
                <animateTransform href={getExclusiveId("#beans")} attributeName="transform" attributeType="XML" type="translate"
                    values="0 0;-10 0" dur={dur} repeatCount="indefinite" />
            </g>
        </g>
    </svg>
}

export default CM03;
