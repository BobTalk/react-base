import mergeClass from "classnames";
import styleScope from "./index.module.less";
import 'react-resizable/css/styles.css';
import CanvasPage from "./canvas.tsx";
import ConfigPage from "./config.tsx";
const LayoutPage = (props) => {
    return (<main className={mergeClass('grid h-full', styleScope['grid-cols'], 'overflow-hidden')}>
        <div className='overflow-auto'>
            <CanvasPage  {...props} />
        </div>
        <div className='overflow-auto'>
            <ConfigPage {...props} />
        </div>
    </main>)
}
export default LayoutPage