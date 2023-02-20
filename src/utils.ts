/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-04-27 16:27:52
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-20 14:38:52
 * @FilePath: /react-base/src/utils.ts
 * @Description: utils工具
 */

// 获取数据类型
function getDataType(data: any): string {
  return (Object.prototype.toString.call(data).match(/\s(\w+)\]/) as string[])[1].toLowerCase()
}

export {
  getDataType,
}
