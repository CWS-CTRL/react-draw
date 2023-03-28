import React, { useState, useEffect } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import hljs from "highlight.js";

import codeLoading from "../../svg/loading/19.svg";

import type { iconInfoType } from "../../../utils/svgImportControls";

interface propsType {
    iconDetailInfo: iconInfoType;
    setData: Function
}

const Magnify = (props: propsType) => {
    const { iconDetailInfo: { key, path }, setData } = props;
    const [code, setCode] = useState<null | string>(null);

    useEffect(() => {
        fetch(path).then(data => data.text()).then((res) => {
            setCode(res); hljs.highlightAll()
        });
    });

    return <div className="fixed inset-0  bg-slate-700 bg-opacity-20 z-50" onClick={({ target, currentTarget }) => target === currentTarget && setData(null)}>
        <div className="w-3/4 h-5/6 m-auto mt-5 p-0 sm:p-5 grid sm:grid-cos-2 md:grid-cols-2 bg-black border rounded-2xl animate-scale01">
            <div className="mt-0 sm:mt-4">
                <div className="text-lg font-bold">TITLE</div>
                <div className="h-5/6 grid place-content-center border"><img src={path} alt={key} className="w-5/6 aspect-square mx-auto" /></div>
            </div>
            <div className=" mt-0 sm:mt-4 overflow-hidden">
                <div className="grid grid-cols-2 text-lg font-bold">
                    <div >CODE</div>
                    <div className="text-end cursor-pointer">
                        <CopyToClipboard text={code}>
                            <div> COPY</div>
                        </CopyToClipboard>
                    </div>
                </div>
                <div className="h-full overflow-auto">
                    {code ?
                        <pre className="">
                            <code className="language-html text-sm">{code}</code>
                        </pre> :
                        <img src={codeLoading} alt="codeloading..." />
                    }
                </div>
            </div>
        </div>
    </div>
}

export default Magnify;