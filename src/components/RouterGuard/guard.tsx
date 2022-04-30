/*
 * @Author: your name
 * @Date: 2022-04-27 16:27:52
 * @LastEditTime: 2022-04-28 17:31:33
 * @LastEditors: Please set LastEditors
 * @Description: 页面路由容器组件
 * @FilePath: /react-demo/src/components/RouterGuard/guard.tsx
 */
import React from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'
import { ReactElementType, MetaType, OnRouteBeforeType, OnRouteBeforeResType } from '@/types'
import utils from '@/utils'
let temp: ReactElementType | null = null
function Guard ({ element, meta, onRouteBefore }: {element: ReactElementType; meta: MetaType; onRouteBefore?: OnRouteBeforeType}) {
  meta = meta || {}
  const location = useLocation()
  const { pathname } = location
  const navigate = useNavigate()
  const pathRes = onRouteBefore({ pathname, meta })
  if (onRouteBefore) {
    if (temp === element) {
      return element
    }
    if (utils.getDataType(pathRes) === 'Promise') {
      (pathRes as Promise<OnRouteBeforeResType>).then((res: OnRouteBeforeResType) => {
        if (res && res !== pathname) {
          navigate(res, { replace: true })
        }
      })
    } else {
      if (pathRes && pathRes !== pathname) {
        element = <Navigate to={pathRes as string} replace={true} />
      }
    }
  }
  temp = element
  return element
}

export default Guard
