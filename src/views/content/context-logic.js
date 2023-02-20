import { createContext2 } from "@/components/context";
import { getDataType } from "@/utils.ts";
export default function (initData) {
    console.log('getDataType(initData): ', getDataType(initData) != 'object');
    if (getDataType(initData) !== 'object') {
        throw new Error("IS NOT JSON OBJECT!")
    }
    let ColorContext = createContext2(initData)
    return {
        ColorContext
    }
}
