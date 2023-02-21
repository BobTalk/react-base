/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-18 18:40:27
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-01-09 13:51:32
 * @FilePath: /fe-cig-dvp-report/src/components/report/IconComp/copy.tsx
 * @Description: 漏斗icon
 */
import Icon from "@ant-design/icons";
const TimeComp = (props) => {
  const Svg = () => (
    <svg version="1.1" width={props.width} height={props.height} viewBox="0 0 66.0 30.0"><defs><clipPath id="i0"><path d="M360,0 L360,1778 L0,1778 L0,0 L360,0 Z"></path></clipPath><clipPath id="i1"><path d="M63,0 C64.6568542,-3.04359188e-16 66,1.34314575 66,3 L66,27 C66,28.6568542 64.6568542,30 63,30 L3,30 C1.34314575,30 2.02906125e-16,28.6568542 0,27 L0,3 C-2.02906125e-16,1.34314575 1.34314575,3.04359188e-16 3,0 L63,0 Z"></path></clipPath><clipPath id="i2"><path d="M6,0 L2.93157956,4 L0,0 L6,0 Z"></path></clipPath></defs><g transform="translate(-259.0 -1347.0)"><g clipPath="url(#i0)"><g transform="translate(20.0 1269.0)"><g transform="translate(239.0 78.0)"><g clipPath="url(#i1)"><path d="M3,0 L63,0 C64.6568542,-3.04359188e-16 66,1.34314575 66,3 L66,27 C66,28.6568542 64.6568542,30 63,30 L3,30 C1.34314575,30 2.02906125e-16,28.6568542 0,27 L0,3 C-2.02906125e-16,1.34314575 1.34314575,3.04359188e-16 3,0 Z" stroke="#4ECAE6" strokeWidth="4" fill="none" strokeMiterlimit="5"></path></g><g transform="translate(52.0 13.0)"><g clipPath="url(#i2)"><polygon points="0,0 6,0 6,4 0,4 0,0" stroke="none" fill="#4ECAE6"></polygon></g></g><g transform="translate(9.0 5.0)"><g transform="translate(0.0 1.0)"><text transform="translate(0.0 15.0)" font-family="DINAlternate-Bold, DIN Alternate" font-size="16.0" font-weight="bold" fill="#858585" text-anchor="left" letter-spacing="0.8">00</text></g><g transform="translate(21.0 1.0)"><text transform="translate(0.0 15.0)" font-family="DINAlternate-Bold, DIN Alternate" font-size="16.0" font-weight="bold" fill="#858585" text-anchor="left" letter-spacing="0.8">00</text></g><g transform="translate(17.0 0.0)"><text transform="translate(0.0 13.0)" font-family="DINAlternate-Bold, DIN Alternate" font-size="14.0" font-weight="bold" fill="#858585" text-anchor="left" letter-spacing="0.7000000000000001">:</text></g></g></g></g></g></g></svg>
  );
  return <Icon component={Svg} {...props} />;
};
TimeComp.defaultProps = {
  with: 66,
  height: 30
}
export default TimeComp;
