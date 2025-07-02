import cuid from 'cuid';

type TSubMenuItem = {
    title: string;
    link: string;
    index: string;
};

export type TMenuItem = {
    title: string;
    index: string;
    submenu: TSubMenuItem[];
};

export type TMenuList = TMenuItem[];

export const MENU_LIST: TMenuList = Array.from({ length: 4 }, (_, index) => ({
    title: `Item ${index + 1}`,
    index: cuid(),
    submenu: Array.from({ length: 4 }, (_, subIndex) => ({
        title: `Subitem ${subIndex + 1}`,
        link: '#',
        index: `submenu ${cuid()}`,
    })),
}));
