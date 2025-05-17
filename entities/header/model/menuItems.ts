import cuid from 'cuid';

export const MENU_ITEMS = Array.from({ length: 4 }, (_, index) => ({
    title: `Item ${index + 1}`,
    index: cuid(),
    submenu: Array.from({ length: 4 }, (_, subIndex) => ({
        title: `Subitem ${subIndex + 1}`,
        link: '#',
        index: cuid(),
    })),
}));
