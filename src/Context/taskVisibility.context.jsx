import { createContext, useState } from "react";

export const TaskVisibilityContext = createContext();

export const TaskVisibilityProvider = ({children}) => {

    const [ visibility, setVisibility ] = useState(true);
    const value = { visibility, setVisibility };

    return <TaskVisibilityContext.Provider value={value}>{children}</TaskVisibilityContext.Provider>
}