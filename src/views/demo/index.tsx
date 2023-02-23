/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-21 09:38:26
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-23 16:37:54
 * @FilePath: /react-base/src/views/demo/index.tsx
 * @Description: DEMO入口文件
 */

import LayoutPage from "./page/layout";
import logic from "./logic.js";
const DemoProject = (props) => {
    let { contextData, store, reduxState } = logic(props)
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