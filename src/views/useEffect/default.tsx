
/*
* @Author: your name
* @Date: 2022-05-05 10:18:18
 * @LastEditTime: 2023-02-20 10:14:37
 * @LastEditors: heyongqiang 1498833800@qq.com
* @Description: 
* @FilePath: /react-demo/src/views/useEffect/default.tsx
*/
import logic from "./default-logic.js";
import { forwardRef } from "react";
const EffectDefault = forwardRef((props, ref) => {
    let { checked, setChecked } = logic(props, { ref })
    return <>
        <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
        {checked ? 'checked' : 'not checked'}
    </>
})

export default EffectDefault