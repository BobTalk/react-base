import mergeClass from "classnames";
import styleScope from "./index.module.less";
import 'react-resizable/css/styles.css';
import CanvasPage from "./canvas.tsx";
import ConfigPage from "./config.tsx";
import jsInStyle from 'styled-components'
import { pxToRem } from "../../../../utils";
const MComp = jsInStyle.main`
    grid-template-columns:${() => 'auto ' + pxToRem(360)};
    column-gap: ${() => pxToRem('10px')};
`
const LayoutPage = (props) => {
    return (<MComp className={mergeClass('grid h-full', 'overflow-hidden')}>
        <div className='overflow-auto'>
            <CanvasPage  {...props} />
        </div>
        <div className={mergeClass('overflow-auto', styleScope['config-bg'])}>
            <ConfigPage {...props} />
        </div>
    </MComp>)
}
export default LayoutPage