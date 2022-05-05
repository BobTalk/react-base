/*
 * @Author: your name
 * @Date: 2022-05-05 10:18:58
 * @LastEditTime: 2022-05-05 19:18:13
 * @LastEditors: Please set LastEditors
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: /react-demo/src/views/useEffect/destroy.tsx
 */
import { forwardRef, useImperativeHandle } from "react";
const EffectDestroy = forwardRef((props, ref ) => { 
    useImperativeHandle(ref, () => ({}))
    return (
        <div>ssssss</div>
    )
})

export default EffectDestroy