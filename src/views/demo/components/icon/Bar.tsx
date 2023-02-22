/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-18 18:40:27
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-22 09:44:14
 * @FilePath: /fe-cig-dvp-report/src/components/report/IconComp/copy.tsx
 * @Description: 柱状图icon
 */
import Icon from "@ant-design/icons";
const BarIconComp = (props) => {
    let { width, height } = props;
    const Svg = () => (
        <svg
            t="1676972396328"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2813"
            width={width}
            height={height}
        >
            <path
                d="M211.176727 809.425455a34.909091 34.909091 0 0 1-34.909091-34.909091V367.522909a34.909091 34.909091 0 0 1 69.818182 0v406.993455a34.909091 34.909091 0 0 1-34.909091 34.909091z m329.821091-34.909091V90.298182a34.909091 34.909091 0 0 0-69.818182 0v684.218182a34.909091 34.909091 0 0 0 69.818182 0z m289.000727 0V367.522909a34.909091 34.909091 0 0 0-69.818181 0v406.993455a34.909091 34.909091 0 0 0 69.818181 0zM977.454545 933.701818a34.909091 34.909091 0 0 0-34.90909-34.909091H81.454545a34.909091 34.909091 0 0 0 0 69.818182h861.09091a34.909091 34.909091 0 0 0 34.90909-34.909091z"
                fill="#233df8"
                p-id="2814"
            ></path>
        </svg>
    );
    return <Icon component={Svg} {...props} />;
};
BarIconComp.defaultProps = {
    with: 96,
    height: 72,
};
export default BarIconComp;
