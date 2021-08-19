import { useCallback, useLayoutEffect, useRef, useState } from "react";

export default function useDimensions() {
    const ref = useRef();
    const [dimensions, setDimensions] = useState({});

    const updateDimensions = useCallback(
        () => {
            if(ref && ref.current) {
                setDimensions(ref.current.getBoundingClientRect().toJSON());
            }
        },
        [ref],
    );

    useLayoutEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);

        return () => {
            window.removeEventListener("resize", updateDimensions);
        }
    }, [updateDimensions])

    return [ref, dimensions];
}