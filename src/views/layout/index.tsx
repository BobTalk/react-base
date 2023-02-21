/*
 * @Author: your name
 * @Date: 2022-05-04 17:57:43
 * @LastEditTime: 2023-02-21 10:20:16
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description:项目整体布局
 * @FilePath: /react-demo/src/views/content/layout/index.tsx
 */
import { Layout } from "antd";
import { Outlet } from "react-router-dom";
import SideComp from "./sider";
function ProjectLayout() {
  return (
    <>
      <Layout className="h-full">
        <Layout.Header>
          <span className="text-white">Header</span>
        </Layout.Header>
        <Layout
          className="overflow-hidden"
          style={{ height: "calc(100vh - 60px)" }}
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
