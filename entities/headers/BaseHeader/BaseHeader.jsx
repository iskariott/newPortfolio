import Link from 'next/link';
import st from './BaseHeader.module.scss';

const menuItems = Array.from({ length: 4 }, (_, index) => ({
    title: `Item ${index + 1}`,
    depth: 0,
    submenu: Array.from({ length: 2 }, (_, subIndex) => ({
        title: `Subitem ${subIndex + 1}`,
        depth: 1,
        submenu: Array.from({ length: 3 }, (_, subSubIndex) => ({
            title: `Subsubitem ${subSubIndex + 1}`,
            depth: 2,
            link: '#',
        })),
    })),
}));

function RenderMenuList(item) {
    const hasSubmenu = Array.isArray(item.submenu) && item.submenu.length;
    const RenderTitle = (item) =>
        item.link ? <Link href={item.link}>{item.title}</Link> : <span>{item.title}</span>;
    return (
        <li className={st[`depth-${item.depth}`]}>
            <RenderTitle {...item} />
            {hasSubmenu && (
                <ul className={st.subList}>
                    {item.submenu.map((subItem, i) => (
                        <RenderMenuList key={i} {...subItem} />
                    ))}
                </ul>
            )}
        </li>
    );
}

export default function BaseHeader() {
    return (
        <header className={st.header}>
            <nav className={st.menu}>
                <ul className={st.list}>
                    {menuItems.map((item, i) => (
                        <RenderMenuList key={i} {...item} />
                    ))}
                </ul>
            </nav>
        </header>
    );
}
