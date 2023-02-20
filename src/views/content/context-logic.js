import { createContext2 } from "@/components/context";
import { getDataType } from "@/utils.ts";
export default function (initData) {
    if (getDataType(initData) !== 'object') {
        // throw new Error("IS NOT JSON OBJECT!")
        initData = { value: initData }
    }
    let ColorContext = createContext2(initData)
    return {
        ColorContext
    }
}
