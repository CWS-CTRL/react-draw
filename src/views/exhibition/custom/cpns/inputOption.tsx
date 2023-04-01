import React from "react";

import { Box, Slider, } from "@mui/material"

import { optionValueType } from "../data/optionsValue";

interface propsType {
    option: optionValueType;
    setOption: Function;
}

const InputOption = (props: propsType) => {
    const { option: { type, value, min, max, step }, setOption } = props;

    return <Box className="grid grid-cols-2">
        <Slider value={value} min={min} max={max} step={step} onChange={(e, newVal) => { setOption(type, newVal) }} />
        <span className="text-center leading-7">{type}:{value}</span>
    </Box>
}

export default InputOption;