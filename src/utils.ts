/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-04-27 16:27:52
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-23 12:48:55
 * @FilePath: /react-base/src/utils.ts
 * @Description: utils工具
 */

// 获取数据类型
function getDataType(data: any): string {
  return (Object.prototype.toString.call(data).match(/\s(\w+)\]/) as string[])[1].toLowerCase()
}

function pxToRem(px) {
  let rootEl = document.documentElement
  let rootFontSize = rootEl.style.fontSize
  return (parseFloat(px) / parseFloat(rootFontSize)) + 'rem'
}
export {
  getDataType,
  pxToRem
}
