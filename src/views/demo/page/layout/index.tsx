// import logicModule from "./logic.js";
import mergeClass from "classnames";
import styleScope from "./index.module.less";
import CanvasPage from "./canvas.tsx";
import ConfigPage from "./config.tsx";
const LayoutPage = (props) => {
    return (<main className={mergeClass('grid', styleScope['grid-cols'])}>
        <CanvasPage {...props} />
        <ConfigPage {...props} />
    </main>)
}
export default LayoutPage