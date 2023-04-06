# svgloading

## 简介

可配置化 svgloading
目前支持 color,size,strokeWidth,dur 参数修改

## 搜索

### 关键字

1. 搜索的关键词使用形状加状态 如`lt`
2. 不区分大小写
3. 形状必需 状态非必需
4. 多个关键词之间使用空格分开 `lt cr`
5. 使用 `all` 将展示所有的 loading

### 形状

|  l   |   c    |  r   |   m   |
| :--: | :----: | :--: | :---: |
| line | circle | rect | merge |
|  线  |   圆   | 方块 | 合并  |

### 状态

|    o     |     t     |   r    |     d      |   m   |
| :------: | :-------: | :----: | :--------: | :---: |
| opactiy  | translate | rotate | dashoffset | merge |
| 不透明度 |   平移    |  旋转  |    偏移    | 合并  |

### 例子

1. 不输入时展示默认设置的 loading
2. 一 个参数只有形状时 如`l`
   将展示所有只有线条的 loading
3. 一 个参数有形状加状态时 如`lt`
   将展示所有只有线条且状态只为平移的 loading
4. 两 个参数 如`lt c`
   将展示所有只有线条且状态只为平移加只有圆形的 loading
5. 两 个参数 如 `lt cr`
   将展示所有只有线条且状态只为平移加
   只有圆形且状态只为旋转的 loading

### 特殊关键字

1. `all` 展示所有的 loading
<!-- 2. `new` 展示最近开发的十个 loading -->
