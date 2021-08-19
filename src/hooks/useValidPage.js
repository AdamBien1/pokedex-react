import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function useValidPage() {
    let [validPage, setValidPage] = useState(true);
    let { pathname } = useLocation();

    useEffect(() => {
        switch (pathname) {
            case "/":
            case "/home":
            case "/about":
                setValidPage(true)
                break;
            default:
                setValidPage(false)
                break;
        }
        return () => {
            // cleanup
        }
    }, [pathname])

    return validPage;
}