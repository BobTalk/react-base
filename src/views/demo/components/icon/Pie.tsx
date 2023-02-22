/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-18 18:40:27
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-22 10:00:27
 * @FilePath: /fe-cig-dvp-report/src/components/report/IconComp/copy.tsx
 * @Description: 饼图
 */
import Icon from "@ant-design/icons";
const PieIconComp = (props) => {
    let { width, height } = props;
    const Svg = () => (
        <svg
            t="1677031203948"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="3867"
            width={width}
            height={height}
        >
            <path
                d="M512 512m-384 0a384 384 0 1 0 768 0 384 384 0 1 0-768 0Z"
                fill="#3BD5B3"
                p-id="3868"
            ></path>
            <path
                d="M512 128v384l-271.68 271.68A384 384 0 1 0 512 128z"
                fill="#4A8BFE"
                p-id="3869"
            ></path>
        </svg>
    );
    return <Icon component={Svg} {...props} />;
};
PieIconComp.defaultProps = {
    with: 96,
    height: 72,
};
export default PieIconComp;
