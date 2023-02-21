/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-18 18:40:27
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-01-09 13:50:54
 * @FilePath: /fe-cig-dvp-report/src/components/report/IconComp/copy.tsx
 * @Description: 漏斗icon
 */
import Icon from "@ant-design/icons";
const TableComp = (props) => {
  const Svg = () => (
    <svg version="1.1" width={props.width} height={props.height} viewBox="0 0 44.0 40.0"><defs><clipPath id="i0"><path d="M360,0 L360,1778 L0,1778 L0,0 L360,0 Z"></path></clipPath><clipPath id="i1"><path d="M12.2819194,0 L12.2819194,9.97886317 L0,9.97886317 L0,0 L12.2819194,0 Z"></path></clipPath><clipPath id="i2"><path d="M12.7280777,0 L12.7280777,10.996858 L0,10.996858 L0,0 L12.7280777,0 Z"></path></clipPath><clipPath id="i3"><path d="M12.7280777,0 L12.7280777,9.97886317 L0,9.97886317 L0,0 L12.7280777,0 Z"></path></clipPath><clipPath id="i4"><path d="M12.2944873,0 L12.2944873,10.996858 L0.0125678158,10.996858 L0,0 L12.2944873,0 Z"></path></clipPath><clipPath id="i5"><path d="M12.2819195,0 L12.2819195,10.996858 L0.0125678545,10.996858 L0,0 L12.2819195,0 Z"></path></clipPath><clipPath id="i6"><path d="M43.9874321,0 L43.9874321,11.8923165 L0,11.8923165 L0,0 L43.9874321,0 Z"></path></clipPath><clipPath id="i7"><path d="M12.2819195,0 L12.2819195,9.97886317 L0,9.97886317 L0,0 L12.2819195,0 Z"></path></clipPath></defs><g transform="translate(-46.0 -1621.0)"><g clipPath="url(#i0)"><g transform="translate(20.0 1548.0)"><g transform="translate(26.000000000000004 73.0)"><g transform="translate(0.012567854491862818 15.23536132847494)"><g clipPath="url(#i1)"><polygon points="0,0 12.2819194,0 12.2819194,9.97886317 0,9.97886317 0,0" stroke="none" fill="#04A8F5"></polygon></g></g><g transform="translate(15.62810625938118 28.56983719754953)"><g clipPath="url(#i2)"><polygon points="0,0 12.7280777,0 12.7280777,10.996858 0,10.996858 0,0" stroke="none" fill="#50E3C2"></polygon></g></g><g transform="translate(15.62810625938118 15.24164525572087)"><g clipPath="url(#i3)"><polygon points="0,0 12.7280777,0 12.7280777,9.97886317 0,9.97886317 0,0" stroke="none" fill="#50E3C2"></polygon></g></g><g transform="translate(31.70551271755357 28.56983719754953)"><g clipPath="url(#i4)"><polygon points="0,0 12.2944873,0 12.2944873,10.996858 0,10.996858 0,0" stroke="none" fill="#50E3C2"></polygon></g></g><g transform="translate(0.0 28.56983719754953)"><g clipPath="url(#i5)"><polygon points="0,0 12.2819195,0 12.2819195,10.996858 0,10.996858 0,0" stroke="none" fill="#04A8F5"></polygon></g></g><g clipPath="url(#i6)"><polygon points="0,0 43.9874321,0 43.9874321,11.8923165 0,11.8923165 0,0" stroke="none" fill="#1ACEDB"></polygon></g><g transform="translate(31.718080533381453 15.23536132847494)"><g clipPath="url(#i7)"><polygon points="0,0 12.2819195,0 12.2819195,9.97886317 0,9.97886317 0,0" stroke="none" fill="#50E3C2"></polygon></g></g></g></g></g></g></svg>

  );
  return <Icon component={Svg} {...props} />;
};
TableComp.defaultProps = {
  with: 44,
  height: 40
}
export default TableComp;
