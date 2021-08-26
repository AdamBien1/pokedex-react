import { useEffect } from "react";

export default function useLockBodyScroll(trigger, dependencyArr = []) {
    useEffect(() => {
        const originalStyle = window.getComputedStyle(document.body).overflow;
        if(trigger) document.body.style.overflow = "hidden";

        return () => document.body.style.overflow = originalStyle;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencyArr)
}