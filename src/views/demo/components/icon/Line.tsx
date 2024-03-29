/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-18 18:40:27
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-22 09:49:30
 * @FilePath: /fe-cig-dvp-report/src/components/report/IconComp/copy.tsx
 * @Description: 柱状图icon
 */
import Icon from "@ant-design/icons";
const LineIconComp = (props) => {
    let { width, height } = props;
    const Svg = () => (
        <svg
            t="1677030513926"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2811"
            width={width}
            height={height}
        >
            <path d="M0 960h1024v64H0z" fill="#54C3F1" p-id="2812"></path>
            <path
                d="M96 640h64v352H96zM352 384h64v608h-64zM608 544h64v448h-64zM864 128h64v864h-64z"
                fill="#54C3F1"
                p-id="2813"
            ></path>
            <path
                d="M896 192a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m0-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM640 608a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m0-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM384 448a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m0-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32zM128 704a96 96 0 1 1 96-96 96 96 0 0 1-96 96z m0-128a32 32 0 1 0 32 32 32 32 0 0 0-32-32z"
                fill="#54C3F1"
                p-id="2814"
            ></path>
            <path
                d="M137.536 553.28l192.128-192.096 45.248 45.28-192.128 192.096zM441.76 425.76l33.92-54.304 106.368 66.496-33.92 54.272zM650.304 434.24l181.408-294.528 54.496 33.6-181.44 294.528z"
                fill="#54C3F1"
                p-id="2815"
            ></path>
        </svg>
    );
    return <Icon component={Svg} {...props} />;
};
LineIconComp.defaultProps = {
    with: 96,
    height: 72,
};
export default LineIconComp;
