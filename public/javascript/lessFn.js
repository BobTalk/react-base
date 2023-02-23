/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2023-02-23 10:34:38
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-23 11:09:05
 * @FilePath: /react-base/public/javascript/plugin.js
 * @Description: less函数
 */
module.exports = {
    install: function (less, pluginManager, functions) {
        functions.add('pxToRem', function (param) {
            if (param.value) {
                return `${param.value} / var(--root-size))`
            }
        })
    }
}