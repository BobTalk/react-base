
/*
* @Author: your name
* @Date: 2022-05-05 10:18:18
 * @LastEditTime: 2022-05-05 19:38:32
 * @LastEditors: Please set LastEditors
* @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
* @FilePath: /react-demo/src/views/useEffect/default.tsx
*/
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
const EffectDefault = forwardRef((props, ref) => { 
    useImperativeHandle(ref, () => ({}))
    const [checked, setChecked] = useState(false)
    useEffect(() => {
        alert(`useEffect -> checked: ${checked.toString()}`)
    })
    return <>
        <input type="checkbox" value={checked} onChange={() => setChecked(checked => !checked)} />
        {checked ? 'checked': 'not checked'}
        </>
})

export default EffectDefault