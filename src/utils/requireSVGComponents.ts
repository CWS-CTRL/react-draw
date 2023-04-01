import type { ReactElement } from 'react';
import type { SVGProps } from './../views/svg/loading/type';

export interface iconInfoType {
    key: string;
    Component: (props: SVGProps) => ReactElement;
    code?:string|null
}
export type iconsInfoType = iconInfoType[];


class RequireSVGComponents { 
    public loadingComponents: iconsInfoType=[];

    batchImportLoading(): iconsInfoType { 
        this.loadingComponents = [];
        // require.context的参数不支持变量，只能写定值
        const res = require.context("../views/svg/loading", false, /\.tsx$/);
        res.keys().forEach(key => { 
            this.loadingComponents.push({
                key,
                Component: res(key).default
            })
        })
        return  this.loadingComponents;
    }
}

export default new RequireSVGComponents();