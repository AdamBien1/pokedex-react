import { useRef, useCallback } from "react";

export default function useInfiniteScroll(hasMore, getMore, isLoading, dependencyArr = []) {
    const observer = useRef();
    const lastElementRef = useCallback(node => {
         if(isLoading) return;
         if(observer.current) {
             observer.current.disconnect();
         }

         observer.current = new IntersectionObserver(entries => {
             if(entries[0].isIntersecting && hasMore) {
                getMore();
             }
         })

         if(node) observer.current.observe(node);
    }, dependencyArr)

    return lastElementRef;
}