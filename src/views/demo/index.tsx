/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 09:38:26
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-21 09:58:54
 * @FilePath: /react-base/src/views/demo/index.tsx
 * @Description: DEMO入口文件
 */
import { createContext2 } from "@/components/context";
import { getDataType } from "@/utils.ts";
import store from "@/redux/index.ts";
import { useState } from "react";
import LayoutPage from "./page/layout";
const DemoProject = (props) => {
    let contextData = createContext2()
    let [reduxState, setReduxState] = useState(store.getState())
    store.subscribe(() => {
        setReduxState(() => store.getState())
    })
    return <contextData.Provider value={{
        ...(contextData['_currentValue'] ?? {}),
        ...reduxState,
        ...store
    }}>
        <contextData.Consumer>
            {
                (content) => <LayoutPage {...content} />
            }
        </contextData.Consumer>
    </contextData.Provider>
}

export default DemoProject