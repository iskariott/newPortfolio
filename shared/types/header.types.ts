export type NavigationProps = {
    isBurgerOpen: boolean;
    openSubmenuIndex: number | null;
    toggleSubmenu: (index: number) => void;
};

export type BurgerMenuProps = {
    isBurgerOpen: boolean;
    setBurgerOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
