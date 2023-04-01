import React from "react";
import type { ReactElement } from "react";
import type { SVGProps } from "../views/svg/loading/type";

interface propsType {
    Children: (props: SVGProps) => ReactElement;
}

const MergeProps = ({ Children }: propsType) => {

    return Children({})
}

export default MergeProps;