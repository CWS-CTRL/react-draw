export interface iconInfoType {
    key: string;
    path: string;
}
export type iconsInfoType = iconInfoType[];


class SvgImportControls { 
    public loadingModulesInfo: iconsInfoType=[];

    batchImportLoading(): iconsInfoType { 
        this.loadingModulesInfo = [];
        // require.context的参数不支持变量，只能写定值
        const res = require.context("../views/svg/loading", true, /\.svg$/);
        res.keys().forEach(key => { 
            this.loadingModulesInfo.push({
                key,
                path: res(key)
            })
        })
        return  this.loadingModulesInfo;
    }
}

export default new SvgImportControls();