/*
 * @Author: your name
 * @Date: 2022-05-04 17:57:43
 * @LastEditTime: 2023-02-23 09:46:42
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description:项目整体布局
 * @FilePath: /react-demo/src/views/content/layout/index.tsx
 */
import { Layout } from "antd";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import SideComp from "./sider";
import mergeClassName from "classnames";
import scopeStyle from "./index.module.less";
function ProjectLayout() {
  const [theme, setTheme] = useState('dark')
  useEffect(() => {
    addLinkStyle()
    return () => {
      let H = document.querySelector('head')
      H?.removeChild(document.querySelector(`#${theme}Css`))
    }
  }, [theme])
  // 动态添加样式文件
  const addLinkStyle = () => {
    let H = document.querySelector('head')
    let crtTheme = theme == 'dark' ? 'light' : 'dark'
    let findStyle = document.querySelector(`#${crtTheme}Css`)
    if (findStyle) {
      H?.removeChild(findStyle)
    }
    let link = document.createElement('link')
    link.rel = 'stylesheet'
    link.id = theme + 'Css'
    link.href = `/public/theme/${theme}.css`
    H?.appendChild(link)
  }

  return (
    <>
      <Layout className={"h-full", theme}>
        <Layout.Header>
          <span className="text-white">Header</span>
        </Layout.Header>
        <Layout
          className={mergeClassName("overflow-hidden", scopeStyle['content-box'])}
        >
          <Layout.Sider>
            <div className="h-full overflow-y-auto">
              <SideComp></SideComp>
            </div>
          </Layout.Sider>
          <Layout style={{ width: "calc(100vw - 200px)" }}>
            <Layout.Content>
              <div className="h-full overflow-y-auto">
                <Outlet></Outlet>
              </div>
            </Layout.Content>
            <Layout.Footer>
              <span>Footer</span>
            </Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
export default ProjectLayout;
