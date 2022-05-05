
/*
* @Author: your name
* @Date: 2022-05-05 10:18:47
 * @LastEditTime: 2022-05-05 13:38:43
 * @LastEditors: Please set LastEditors
* @Description: effect监听数组
* @FilePath: /react-demo/src/views/useEffect/array.tsx
*/
import { forwardRef, useImperativeHandle } from "react";
const EffectArray = forwardRef((props, ref) => { 
    useImperativeHandle(ref, ()=>({}))
})

export default EffectArray