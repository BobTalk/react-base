/*
 * @Author: your name
 * @Date: 2022-05-04 19:42:00
 * @LastEditTime: 2022-05-05 19:27:06
 * @LastEditors: Please set LastEditors
 * @Description: 导航组件
 * @FilePath: /react-demo/src/views/layout/sider.tsx
 */

import { forwardRef, useImperativeHandle } from "react";
import { Menu, MenuProps } from "antd";
import {
  AppstoreOutlined,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
type MenuItem = Required<MenuProps>["items"][number];
function getItem(
  label: React.ReactNode,
  key: React.Key,
  path: React.ReactNode,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
    path,
    name: label,
  } as MenuItem;
}

const SideComp = forwardRef((props, ref) => {
  useImperativeHandle(ref, () => ({}));
  let navigate = useNavigate();
  const items: MenuItem[] = [
    getItem("上下文", "context", null, <AppstoreOutlined />, [
      getItem("父组件数据", "context_1", "/layout/contextIndex/colorChild"),
      getItem("子组件默认数据", "context_2", "/layout/colorChild"),
    ]),
    getItem("useEffect", "useEffect", null, <AppstoreOutlined />, [
      getItem("默认", "useEffect_1", "/layout/useEffect/default"),
      getItem("监听空数组", "useEffect_2", "/layout/useEffect/nodata"),
      getItem("监听数据", "useEffect_3", "/layout/useEffect/array"),
      getItem("销毁作用域", "useEffect_4", "/layout/useEffect/destroy"),
    ]),
  ];
  const menuItemClick: MenuProps["onClick"] = (e) => {
    let { item } = e;
    let { path, name } = item.props;
    document.title = name;
    navigate(path, { state: {}, replace: false });
  };
  return (
    <Menu
      onClick={menuItemClick}
      defaultSelectedKeys={["context_1"]}
      defaultOpenKeys={["context"]}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
});
export default SideComp;
