# tgg-utils

工作中会遇到很多计算的工具函数，方便以后工作，遂封装保存

## Install
    # with npm
    npm install tgg-utils
    # with yarn
    yarn add tgg-utils
    
## API

## sortFn(data, type, attribute)
对象数组的 `sortFn()` 排序方法，它接收三个参数。

 - data :  需要排序的数组
 - type : 需要排序的类型   0-升序 / 1-降序
 - attribute : 依据哪一个属性排序

##
    import { sortFn } from 'tgg-utils'
    const sortedData = sortFn(data, 0, 'number');

