/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-09-09 10:18:30
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2022-09-09 10:19:00
 * @FilePath: /react-demo/src/views/forwardRef/Son.tsx
 * @Description: 孙子组件
 */
const Son = ({ sonRef }) => {
  return (
    <div>
      <p>孙组件</p>
      <p ref={sonRef}>大家好，我是小杜杜～</p>
    </div>
  );
};
export default Son;
