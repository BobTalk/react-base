/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-11-07 10:11:10
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-11-07 11:05:03
 * @FilePath: /react-base/src/components/catchError/index.tsx
 * @Description: 错误捕获
 */
import React from "react";

export default class ErrorBoundaryPage extends React.Component {
    state = {
        hasError: false,
        error: null
    }
    static getDerivedStateFromError(error) {
        console.log('error: ', error);
        return {
            hasError: true,
            error: error.toString()
        }
    }
    render() {
        if (this.state.hasError) {
            return (<>
                <span>{this?.props?.fallback}</span>
                <span>{this.state.error}</span>
            </>)
        }
        return this.props.children
    }
}