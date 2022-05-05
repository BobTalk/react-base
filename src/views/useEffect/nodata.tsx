/*
 * @Author: your name
 * @Date: 2022-05-05 10:18:35
 * @LastEditTime: 2022-05-05 13:38:48
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react-demo/src/views/useEffect/nodata.tsx
 */
import { forwardRef, useImperativeHandle } from "react";
const EffectNoData = forwardRef((props, ref) => { 
    useImperativeHandle(ref, ()=>({}))
})

export default EffectNoData