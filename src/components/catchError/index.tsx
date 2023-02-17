/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-11-07 10:11:10
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-17 18:33:01
 * @FilePath: /react-base/src/components/catchError/index.tsx
 * @Description: 错误捕获
 */
import React from "react";
export default class ErrorBoundaryPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hasError: false,
        }
    }


    // static getDerivedStateFromError(error) {
    //     return {
    //         hasError: true,
    //         error: error.toString()
    //     }
    // }
    componentDidCatch(error, info) {
        let errorUrl = info.componentStack
        let Reg = /(?<=\()(.+?)(?=\))/g
        let splitRes = errorUrl.match(Reg)
        this.setState({
            hasError: true,
            error: error.toString(),
            errorSite: splitRes[0]
        })
    }
    render() {
        if (this.state.hasError) {
            return (<>
                <span>{this?.props?.fallback}</span>
                <span>{this.state.error}</span>
                <p>{this.state.errorSite}</p>
            </>)
        }
        return this.props.children
    }
}