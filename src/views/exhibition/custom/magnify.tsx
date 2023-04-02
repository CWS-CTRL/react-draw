import React, { useState, useEffect, useRef } from "react";

import InputOption from "./cpns/inputOption";

import optionsValue from "./data/optionsValue";

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

    useEffect(() => {
        setOptions({ ...options })
    }, [svgRef])

    const collectOptios = (key: string, val: string) => {
        options[key] = val;
        setOptions({ ...options })
    }

    const getValue = (key: styleTypesKeys) => {
        return svgRef.defaultProps![key]
    };
    //@ts-ignore
    console.log("<h1 a=1 b=2 />".replaceAll(/(<)(\w+)\s.*\s(\/?\s*>)/g, function () { console.log(arguments) }));

    return <div className="fixed inset-0  bg-slate-700 bg-opacity-20 z-50" onClick={({ target, currentTarget }) => target === currentTarget && setData(null)}>
        <div className="w-3/4 h-5/6 overflow-hidden m-auto mt-5 p-0 sm:p-5 grid  md:grid-cols-2 bg-black border rounded-2xl animate-scale01">
            <div className="mt-0 sm:mt-4 md:border-r">
                {/* <div className="text-lg font-bold"></div> */}
                <div className="h-80 grid place-content-center "
                >{Component({
                    options: { ...Object.assign({ size: 200 }, options) }
                })}</div>
                <div className="w-full p-10">
                    <div><input type="color" value={getValue("color") || "#ffffff"} onChange={({ target: { value } }) => collectOptios("color", value)} /> <span>color:{getValue("color") || "#ffffff"}</span> </div>
                    {
                        optionsValue.map((option, index) => <div key={index}><InputOption option={{ ...Object.assign(option, { value: getValue(option.type) }) }} setOption={collectOptios} /></div>)
                    }
                </div>
            </div>
            <div className=" mt-0 sm:mt-4 overflow-hidden opacity-0 md:opacity-100">
                {/* <div className=" text-lg font-bold"> */}
                {/* <div >CODE</div> */}
                <div className="overflow-auto cursor-pointer">
                    {/* 代码展示区，高亮待开发中 */}
                    <pre>
                        <div >{svgRef.current?.outerHTML}</div>
                    </pre>
                </div>
                {/* </div> */}
            </div>
        </div>
    </div>
}

export default Magnify;