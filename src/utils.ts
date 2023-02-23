/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-04-27 16:27:52
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-23 17:07:33
 * @FilePath: /react-base/src/utils.ts
 * @Description: utils工具
 */

// 获取数据类型
function getDataType(data: any): string {
  return (Object.prototype.toString.call(data).match(/\s(\w+)\]/) as string[])[1].toLowerCase()
}
// px转rem
function pxToRem(px) {
  let rootEl = document.documentElement
  let rootFontSize = rootEl.style.fontSize
  return (parseFloat(px) / parseFloat(rootFontSize)) + 'rem'
}
// 唯一标识
function generateUUID() {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
    d += performance.now(); //use high-precision timer if available
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
  });
  return uuid;
}
export {
  getDataType,
  pxToRem,
  generateUUID
}
