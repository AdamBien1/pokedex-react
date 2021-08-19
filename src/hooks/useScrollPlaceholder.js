import { useEffect } from "react";

export default function useScrollPlaceholder(overflowWidth, setterFunction, dependencyArr) {
    useEffect(() => {
        if(overflowWidth < 10) {
            setterFunction(0);
        } else {
            setterFunction(Math.round(overflowWidth + 60))
        }
    }, dependencyArr)
}