/*
 * @Author: your name
 * @Date: 2022-05-04 17:57:43
 * @LastEditTime: 2022-10-14 11:17:43
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
        <Layout>
          <Layout.Sider className="overflow-y-auto">
            <SideComp></SideComp>
          </Layout.Sider>
          <Layout>
            <Layout.Content className="overflow-y-auto">
              <Outlet></Outlet>
            </Layout.Content>
            <Layout.Footer>
              <span className="text-white">Footer</span>
            </Layout.Footer>
          </Layout>
        </Layout>
      </Layout>
    </>
  );
}
export default ProjectLayout;
