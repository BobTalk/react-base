/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 18:10:31
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-22 10:12:07
 * @FilePath: /react-base/src/views/demo/page/icon/item.tsx
 * @Description: 根据类型渲染不同图标
 */

import { useState } from "react";

const ItemIconComp = ({ options = {}, ...props }) => {
    let { title, icon } = options;
    let [CompName, setCompName] = useState(null);
    const impComp = async () => {
        let IconComp = await import(`../../components/icon/${icon}.tsx`)
        setCompName(() => IconComp.default)
    };
    impComp()
    return <div className="grid w-[96px] h-[72px] place-items-center">{CompName ? <CompName /> : null}</div>
}
export default ItemIconComp