/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-11-07 10:11:10
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-11-07 13:53:04
 * @FilePath: /react-base/src/components/catchError/index.tsx
 * @Description: 错误捕获
 */
import React from "react";
import { Button } from 'antd'
import { NavLink } from "react-router-dom";
export default class ErrorBoundaryPage extends React.Component {
    state = {
        hasError: false,
        error: null,
    }

    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error: error.toString()
        }
    }
    goBack() {
        window.open('/', '_self')
    }
    render() {
        if (this.state.hasError) {
            return (<>
                <span>{this?.props?.fallback}</span>
                <span>{this.state.error}</span>
                <Button type="primary" danger onClick={() => {
                    this.goBack()
                }}>
                    返回
                </Button>
            </>)
        }
        return this.props.children
    }
}