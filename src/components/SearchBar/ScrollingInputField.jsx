import React, { Fragment, useState } from 'react'
import useDimensions from '../../hooks/useDimensions';
import useScrollPlaceholder from '../../hooks/useScrollPlaceholder';
import useWindowDimensions from '../../hooks/useWindowDimentions';
import { SearchBarField, SearchBarPlaceholder } from './SearchBar.style'

const ScrollingInputField = ({ query, setQuery, handleReset, inputRef }) => {
    const [placeholderOverflow, setPlaceholderOverflow] = useState(0);
    const [placeholderRef, placeholderDimensions] = useDimensions();
    const { width } = useWindowDimensions();

    // ScrollPlaceholder vars
    const overflowWidth = placeholderRef.current?.scrollWidth - placeholderDimensions.width
    const placeholderScrollDependencyArr = [
        placeholderRef,
        placeholderRef.current?.scrollWidth,
        placeholderDimensions.width, width
    ];

    useScrollPlaceholder(
        overflowWidth, 
        setPlaceholderOverflow, 
        placeholderScrollDependencyArr
        );

    
    return (
        <Fragment>
            <SearchBarField
            ref={inputRef}
            value={query} 
            onChange={e => setQuery(e.target.value)}
            overflowX={`translateX(-${placeholderOverflow}px)`}
            onFocus={handleReset}
            />
            <SearchBarPlaceholder 
            ref={placeholderRef}
            style={
                {opacity: `${query !== "" ? 0 : 1}`}
                }
            >
            Search by name or ID...
            </SearchBarPlaceholder>
        </Fragment>
    )
}

export default ScrollingInputField
