import Link from 'next/link';
import { MENU_ITEMS } from '../model/menuItems';
import st from './Navigation.module.scss';

export default function Navigation({ isBurgerOpen, openSubmenuIndex, toggleSubmenu }) {
    return (
        <nav className={`${st.menu} ${isBurgerOpen ? st.open : ''}`}>
            <ul className={`${st.list} ${st['list-1']}`}>
                {MENU_ITEMS.map((item) => (
                    <li
                        key={item.index}
                        onClick={() => toggleSubmenu(item.title)}
                        className={`${st.listItem} ${st['listItem-1']}`}>
                        <span>{item.title}</span>
                        <ul
                            className={`${st.list} ${st['list-2']} ${
                                openSubmenuIndex === item.title ? st.open : ''
                            }`}>
                            {item.submenu.map((subItem) => (
                                <li
                                    key={subItem.index}
                                    className={`${st.listItem} ${st['listItem-2']}`}>
                                    <Link href={subItem.link}>{subItem.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
