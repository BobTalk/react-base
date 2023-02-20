import { createContext2 } from "@/components/context";
export default function (props, options = {}) {
    let ColorContext = createContext2({
        childColor: ["blue", "yellow"],
        parentColor: [
            "#50e3c2",
            "#05a9f5",
            "#f2a821",
            "#b7e985",
            "#4fcee3",
            "#a389d4",
            "#23dde6",
            "#ebbe16",
            "#55b2f1",
            "#3a95ec",
        ]
    })
    return {
        ColorContext
    }
}
