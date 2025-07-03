import { createContext, useState } from "react";

export const ComponentContext = createContext({} as any);

export const ComponentStorage = ({ children }: any) => {
    
    const [openMenu, setOpenMenu] = useState(false);
    const [openButton, setOpenButton] = useState(true);
    const [openShorts, setOpenShorts] = useState(true);
    const [openPosts, setOpenPosts] = useState(false);
    const [openBar, setOpenBar] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

return (
    <ComponentContext.Provider value={{
        openMenu, setOpenMenu,
        openButton, setOpenButton,
        openShorts, setOpenShorts,
        openPosts, setOpenPosts,
        openBar, setOpenBar,
        isFocused, setIsFocused
    }}>
    {children}
    </ComponentContext.Provider>
)
}