import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { DropDownMenu } from "./header-style";

interface DropDownMenuPortalProps {
    openDropDownMenu: boolean;
    children: React.ReactNode;
}

const DropDownMenuPortal: React.FC<DropDownMenuPortalProps> = ({ openDropDownMenu, children }) => {
    const [position, setPosition] = useState({ top: 60, right: 45 });

    useEffect(() => {
        if (openDropDownMenu) {
            const updatePosition = () => {
                // Encontra o botão de perfil
                const profileButton = document.querySelector('[data-profile-button]') as HTMLElement;
                if (profileButton) {
                    const rect = profileButton.getBoundingClientRect();
                    const scrollY = window.scrollY;

                    // Calcula a posição do dropdown baseada na posição do botão
                    const top = rect.bottom + scrollY + 5; // 5px de espaçamento
                    const right = window.innerWidth - rect.right;

                    setPosition({ top, right });
                }
            };

            // Atualiza a posição quando o menu abre
            updatePosition();

            // Atualiza a posição durante o scroll
            const handleScroll = () => {
                updatePosition();
            };

            window.addEventListener('scroll', handleScroll);
            window.addEventListener('resize', updatePosition);

            return () => {
                window.removeEventListener('scroll', handleScroll);
                window.removeEventListener('resize', updatePosition);
            };
        }
    }, [openDropDownMenu]);

    if (!openDropDownMenu) return null;

    return ReactDOM.createPortal(
        <DropDownMenu
            openDropDownMenu={openDropDownMenu}
            data-dropdown-menu
            style={{
                top: `${position.top}px`,
                right: `${position.right}px`
            }}
        >
            {children}
        </DropDownMenu>,
        document.body
    );
};

export default DropDownMenuPortal;