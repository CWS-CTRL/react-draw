import React, { useState, useEffect, useRef } from "react";
import type { iconInfoType } from "../../../utils/requireSVGComponents";
import type { svgRefType, styleTypesKeys, optionsType } from "../../svg/loading/type";

interface propsType {
    iconDetailInfo: iconInfoType;
    setData: Function
}

const Magnify = (props: propsType) => {
    const { iconDetailInfo: { key, Component, }, setData } = props;
    const svgRef: svgRefType = useRef(null)
    const [options, setOptions] = useState<optionsType>({ svgRef });

    const collectOptios = (key: string, val: string) => {
        options[key] = val;
        setOptions({ ...options })
    }

    const getDefaultValue = (key: styleTypesKeys) => {
        return svgRef.defaultProps![key]
    };

    return <div className="fixed inset-0  bg-slate-700 bg-opacity-20 z-50" onClick={({ target, currentTarget }) => target === currentTarget && setData(null)}>
        <div className="w-3/4 h-5/6 overflow-hidden m-auto mt-5 p-0 sm:p-5 grid  md:grid-cols-2 bg-black border rounded-2xl animate-scale01">
            <div className="mt-0 sm:mt-4">
                <div className="text-lg font-bold">TITLE</div>
                <div className="h-80 grid place-content-center "
                >{Component({
                    options: { ...Object.assign({ size: 200 }, options) }
                })}</div>
                <div className="w-full p-10">
                    <div>
                        <input id="size" type="range" defaultValue={getDefaultValue("size") || 200} min={1} max={250} step={1} onInput={({ currentTarget: { value } }) => { collectOptios("size", value) }} />
                    </div>
                    <div>
                        <input id="color" type="color" defaultValue={getDefaultValue("color") || "#ffffff"} onInput={({ currentTarget: { value } }) => { collectOptios("color", value) }} />
                    </div>
                    <div>
                        <input id="strokeWidth" defaultValue={getDefaultValue("strokeWidth") || 1} type="range" min={0.1} max={10} step={0.1} onInput={({ currentTarget: { value } }) => { collectOptios("strokeWidth", value) }} />
                    </div>
                    <div>
                        <input id="dur" type="range" defaultValue={getDefaultValue("dur") || 1} min={0.1} max={20} step={0.1} onInput={({ currentTarget: { value } }) => { collectOptios("dur", value) }} />
                    </div>
                </div>
            </div>
            <div className=" mt-0 sm:mt-4 overflow-hidden">
                {/* <div className="grid grid-cols-2 text-lg font-bold">
                    <div >CODE</div>
                    <div className="text-end cursor-pointer">
                    </div>
                </div> */}
            </div>
        </div>
    </div>
}

export default Magnify;