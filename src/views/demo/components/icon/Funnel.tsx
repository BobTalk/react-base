/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-18 18:40:27
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-24 11:44:11
 * @FilePath: /fe-cig-dvp-report/src/components/report/IconComp/copy.tsx
 * @Description: 漏斗icon
 */
import Icon from "@ant-design/icons";
const LouDouComp = (props) => {
  let { width, height } = props;
  const Svg = () => (
    <svg width={width} height={height} viewBox="0 0 58 40" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g id="&#230;&#188;&#143;&#230;&#150;&#151;&#229;&#155;&#190;">
        <path id="Fill 2" fill-rule="evenodd" clip-rule="evenodd" d="M21.7903 29.976L29.0791 40L36.3294 29.976H21.7903Z" fill="#04A9F5" />
        <path id="Fill 1" fill-rule="evenodd" clip-rule="evenodd" d="M21.7903 29.9759L36.3294 29.976L43.5738 19.953L14.5051 19.953L21.7903 29.9759Z" fill="#F2A821" />
        <path id="Fill 3" fill-rule="evenodd" clip-rule="evenodd" d="M7.22595 9.93018L14.5051 19.953L43.5738 19.9531L50.8121 9.93018H7.22595Z" fill="#B8E986" />
        <path id="Fill 4" fill-rule="evenodd" clip-rule="evenodd" d="M0 0L7.226 9.93004H50.8121L58 0H0Z" fill="#50E3C2" />
      </g>
    </svg>
  );
  return <Icon component={Svg} {...props} />;
};
LouDouComp.defaultProps = {
  with: 58,
  height: 40
}
export default LouDouComp;
