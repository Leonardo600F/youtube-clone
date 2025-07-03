import React from "react";
import ReactDOM from "react-dom";
import { DropDownMenu } from "./header-style";

interface DropDownMenuPortalProps {
    openDropDownMenu: boolean;
    children: React.ReactNode;
}

const DropDownMenuPortal: React.FC<DropDownMenuPortalProps> = ({ openDropDownMenu, children }) => {
    if (!openDropDownMenu) return null;
    return ReactDOM.createPortal(
        <DropDownMenu openDropDownMenu={openDropDownMenu}>
            {children}
        </DropDownMenu>,
        document.body
    );
};

export default DropDownMenuPortal; 