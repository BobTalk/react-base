/*
 * @Author: your name
 * @Date: 2022-05-04 19:42:00
 * @LastEditTime: 2022-05-04 20:43:10
 * @LastEditors: Please set LastEditors
 * @Description: 导航组件
 * @FilePath: /react-demo/src/views/layout/sider.tsx
 */

import { forwardRef, useImperativeHandle } from "react";
import { Menu, Button, MenuProps } from "antd";
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
    getItem("上下文", "sub2",null, <AppstoreOutlined />, [
      getItem("父组件数据", "1",'/layout/contextIndex'),
      getItem("子组件默认数据", "2",'/layout/contextIndex/colorChild'),
    ]),
  ];
  const menuItemClick: MenuProps["onClick"] = ({ item }) => {
    let { path, name } = item.props;
    document.title = name;
    navigate(path, { state: {}, replace: false });
  };
  return (
    <Menu
      onClick={menuItemClick}
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      mode="inline"
      theme="dark"
      items={items}
    />
  );
});
export default SideComp;
