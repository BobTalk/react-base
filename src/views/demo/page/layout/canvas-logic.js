import { useEffect, useRef, useState } from "react";

export default function (props, options = {}) {
    let [dragArea, setDragArea] = useState(null);
    let [isDragDisabled, setDragDisabled] = useState(false);
    let [dragBoxW, setDragBoxW] = useState(200);
    let [dragBoxH, setDragBoxH] = useState(200);
    const onResize = (event, { element, size, handle }) => {
        console.log('handle: ', handle);
        console.log('size: ', size);
        console.log('element: ', element);
        console.log('event: ', event);
        let { width, height } = size
        setDragBoxW(() => width)
        setDragBoxH(() => height)
    }

    return {
        dragArea,
        onResize,
        isDragDisabled,
        dragBoxW,
        dragBoxH
    }
}