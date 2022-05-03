import React from "react";
import { Navigate, Outlet, RouteObject, useLocation } from "react-router-dom";
import Guard from "./guard.tsx";
import { RouterWaiterPropsType, MetaType, FunctionalImportType } from "@/types";

export default class Fn {
  constructor(option: RouterWaiterPropsType) {
    this.routes = option.routes || [];
    this.onRouteBefore = option.onRouteBefore;
    this.loading = option.loading || <div></div>;
  }

  /**
   * @description: 路由配置列表数据转换
   * @param {string} redirect 要重定向的路由路径
   * @param {function} component 函数形式import懒加载组件
   * @param {object} meta 自定义字段
   */
  transformRoutes(routeList = this.routes) {
    const list: RouteObject[] = [];
    for (let routeIndex = 0; routeIndex < routeList.length; routeIndex++) {
      let obj = { ...routeList[routeIndex] }
      let location = useLocation()
      if (obj.path === undefined) return;
      if (obj.redirect) {
        let splitRoute =  obj.redirect.trim().split('/').filter(Boolean)
        this.routesFilter((currentRouter) => {
          if (currentRouter.path == splitRoute.at(-1)) {
            obj.element = <Outlet></Outlet>
            let resultRedirect = this.onRouteBefore(currentRouter, routeList[routeIndex], (redirectPath) => {
              obj.element = <Navigate to={redirectPath || obj.redirect} replace={true} />;
              return true
            })
          }
         }, routeList)
      } else if (obj.component) {
        obj.element = this.lazyLoad(obj.component, obj.meta || {});
      }
      delete obj.redirect;
      delete obj.component;
      // delete obj.meta;
      if (obj.children) {
        obj.children = this.transformRoutes(obj.children);
      }
      list.push(obj);
    }
    return list;
  }
  
  routesFilter(fn, routesList = [], children = 'children') {
    return routesList.map(node => ({ ...node })).filter(node => {
      node[children] = node[children] && this.routesFilter(fn, node[children])
      return fn(node) || (node[children] && node[children].length)
    })
  }
  /**
   * @description: 路由懒加载
   */
  lazyLoad(importFn: FunctionalImportType, meta: MetaType) {
    const Element = React.lazy(importFn);
    const lazyElement = (
      <React.Suspense fallback={this.loading}>
        <Element _meta={meta} />
      </React.Suspense>
    );
    return (
      <Guard
        element={lazyElement}
        meta={meta}
        onRouteBefore={this.onRouteBefore}
      />
    );
  }
}
