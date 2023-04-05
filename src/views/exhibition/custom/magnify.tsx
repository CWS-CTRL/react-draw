import React, { memo, useState, useEffect, useRef } from "react";

import InputOption from "./cpns/inputOption";
import SvgCode from "./cpns/svgCode";

import { downloadSVG, getObjVal } from "@utils/index";
import optionsValue from "./data/optionsValue";

import type { iconInfoType } from "@utils/us/requireSVGComponents";
import type { svgRefType, optionsType } from "@views/svg/loading/type";


interface propsType {
    iconDetailInfo: iconInfoType;
    setData: Function
}

const Magnify = (props: propsType) => {
    const { iconDetailInfo: { Component, }, setData } = props;

    const svgRef: svgRefType = useRef(null)
    const [options, setOptions] = useState<optionsType>({ svgRef });

    useEffect(() => {
        setOptions({ ...options })
    }, []);

    const collectOptios = (key: string, val: string) => {
        options[key] = val;
        setOptions({ ...options })
    };



    return <div className="fixed inset-0  bg-slate-700 bg-opacity-20 z-50" onClick={({ target, currentTarget }) => target === currentTarget && setData(null)}>
        <div className="w-3/4 h-5/6 overflow-hidden mx-auto mt-10  p-0 grid  md:grid-cols-2 bg-black border rounded-2xl animate-scale01">
            <div className="mt-0 sm:mt-4 md:border-r">
                <div className="mr-4 text-end text-lg"><button onClick={() => downloadSVG(svgRef.current!)}>Download</button></div>
                <div className="h-80 grid place-content-center "
                >{Component({
                    options: { ...Object.assign({ size: 200 }, options) }
                })}</div>
                <div className="w-full pl-10">
                    <div><input type="color" value={getObjVal(svgRef.defaultProps!, "color") || "#ffffff"} onChange={({ target: { value } }) => collectOptios("color", value)} /> <span>color:{getObjVal(svgRef.defaultProps!, "color") || "#ffffff"}</span> </div>
                    {
                        optionsValue.map((option, index) => <div key={index}><InputOption option={{ ...Object.assign(option, { value: getObjVal(svgRef.defaultProps!, option.type) }) }} setOption={collectOptios} /></div>)
                    }
                </div>
            </div>
            <div className="mt-4 overflow-hidden hidden md:block">
                <SvgCode svgRef={svgRef} />
            </div>
        </div>
    </div>
}

export default memo(Magnify);