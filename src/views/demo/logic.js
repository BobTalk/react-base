
import { createContext2 } from "@/components/context";
import { getDataType } from "@/utils.ts";
import store from "@/redux/index.ts";
import { useContext, useState } from "react";
let contextData = createContext2()
export default function () {
    let [reduxState, setReduxState] = useState(store.getState())
    store.subscribe(() => {
        setReduxState(() => store.getState())
    })
    return {
        reduxState,
        store,
        contextData
    }
}
export const getDemoContext2 = () => useContext(contextData)