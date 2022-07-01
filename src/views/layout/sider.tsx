/*
 * @Author: your name
 * @Date: 2022-05-04 19:42:00
 * @LastEditTime: 2022-07-01 15:38:54
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @Description: 导航组件
 * @FilePath: /react-demo/src/views/layout/sider.tsx
 */

import { forwardRef, useImperativeHandle } from "react";
import { Menu, MenuProps } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
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
      getItem("useMount", "useEffect_2", "/layout/useEffect/nodata"),
      getItem("useUpdate", "useEffect_3", "/layout/useEffect/array"),
      getItem("useUnmount", "useEffect_4", "/layout/useEffect/destroy"),
    ]),
    getItem(
      "useLayoutEffect",
      "useLayoutEffect",
      "/layout/useLayoutEffect",
      <AppstoreOutlined />
    ),
    getItem("useMemo", "useMemo", "/layout/useMemo", <AppstoreOutlined />),
    getItem(
      "useReducer",
      "useReducer",
      "/layout/useReducer",
      <AppstoreOutlined />
    ),
    getItem(
      "缓存",
      "useCreationComp",
      "/layout/useCreation",
      <AppstoreOutlined />
    ),
    getItem(
      "callBack",
      "callBackComp",
      "/layout/useCallback",
      <AppstoreOutlined />
    ),
    getItem(
      "强制更新",
      "useUpdateComp",
      "/layout/useUpdate",
      <AppstoreOutlined />
    ),
    getItem(
      "响应式数据",
      "useReactiveComp",
      "/layout/useReactive",
      <AppstoreOutlined />
    ),
  ];
  const menuItemClick: MenuProps["onClick"] = ({ item }) => {
    let { path, name } = item.props;
    document.title = name;
    navigate(path, { state: {}, replace: false });
  };
  return (
    <Menu onClick={menuItemClick} mode="inline" theme="dark" items={items} />
  );
});
export default SideComp;
