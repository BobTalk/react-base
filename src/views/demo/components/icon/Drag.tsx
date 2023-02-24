/*
 * @Author: heyongqiang 1498833800@qq.com
 * @Date: 2022-10-18 18:40:27
 * @LastEditors: heyongqiang 1498833800@qq.com
 * @LastEditTime: 2023-02-24 11:43:15
 * @FilePath: /fe-cig-dvp-report/src/components/report/IconComp/Drag.tsx
 * @Description: 拖拽icon
 */
import Icon from "@ant-design/icons";
const DragComp = (props) => {
    let { width, height } = props;
    const Svg = () => (
        <svg
            t="1677210090813"
            class="icon"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            p-id="2455"
            width={width}
            height={height}
        >
            <path
                d="M64.1 194v89.6h896.1V194H64.1z m0 358.4h896.1v-89.6H64.1v89.6z m0 268.9h896.1v-89.6H64.1v89.6z"
                fill="#383838"
                p-id="2456"
            ></path>
        </svg>
    );
    return <Icon component={Svg} {...props} />;
};
DragComp.defaultProps = {
    with: 16,
    height: 16,
};
export default DragComp;
