import Link from 'next/link';
import st from './BaseHeader.module.scss';
import { getRandom } from '@/services/getRandom';

const menuItems = Array.from({ length: 4 }, (_, index) => ({
    title: `Item ${index + 1}`,
    depth: 0,
    submenu: Array.from({ length: Math.random() + 4 }, (_, subIndex) => ({
        title: `Subitem ${subIndex + 1}`,
        depth: 1,
        submenu: Array.from({ length: 4 }, (_, subSubIndex) => ({
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
                <ul>
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
            <Link href="#" className={st.logo} />
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
