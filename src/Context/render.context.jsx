import { createContext, useState } from "react";

export const RenderContext = createContext();

export const RenderProvider = ({children}) => {

    const [ renderElement, setRenderElement ] = useState("Tasks");
    const value = { renderElement, setRenderElement}

    return <RenderContext.Provider value={value}>{children}</RenderContext.Provider>
} 