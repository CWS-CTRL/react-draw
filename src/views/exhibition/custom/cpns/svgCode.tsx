import React, { memo, useState, useEffect } from "react";

import { CopyToClipboard } from 'react-copy-to-clipboard';


import { HighlightSvg } from "../../../../utils";

import type { svgRefType } from "../../../svg/loading/type";

const highlightSvg = new HighlightSvg();

interface propsType {
    svgRef: svgRefType
}

const SvgCode = ({ svgRef }: propsType) => {
    const [, setArr] = useState([]);

    //防止调整参数时频繁执行，干脆直接给与code每1.5s执行一次
    useEffect(() => {
        const t = setInterval(() => {
            setArr([])
        }, 1500);

        return () => {
            clearInterval(t)
        }
    })

    return <>
        <div className="mr-4 text-end text-lg">
            <CopyToClipboard text={svgRef.current?.outerHTML}>
                <button>Copy</button>
            </CopyToClipboard>
        </div>

        <div className="scroll h-full overflow-auto">
            <pre>
                <code className="overflow-auto" dangerouslySetInnerHTML={{ __html: highlightSvg.highlight(svgRef.current?.outerHTML as string) }}></code>
            </pre>
        </div>
    </>
}

export default memo(SvgCode);