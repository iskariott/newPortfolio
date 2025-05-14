'use client';

import Link from 'next/link';
import st from './BaseHeader.module.scss';
import cuid from 'cuid';
import { useState } from 'react';

const menuItems = Array.from({ length: 4 }, (_, index) => ({
    title: `Item ${index + 1}`,
    submenu: Array.from({ length: 4 }, (_, subIndex) => ({
        title: `Subitem ${subIndex + 1}`,
        link: '#',
    })),
}));

export default function BaseHeader() {
    const [isBurgerOpen, setBurgerOpen] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
    const toggleSubmenu = (index) => {
        setOpenSubmenuIndex((prev) => (prev === index ? null : index));
    };

    return (
        <header className={st.header}>
            <Link href="#" className={st.logo} />
            <nav className={`${st.menu} ${isBurgerOpen ? st.open : ''}`}>
                <ul className={`${st.list} ${st['list-1']}`}>
                    {menuItems.map((item) => (
                        <li
                            key={cuid()}
                            onClick={() => toggleSubmenu(item.title)}
                            className={`${st.listItem} ${st['listItem-1']}`}>
                            <span>{item.title}</span>
                            <ul
                                className={`${st.list} ${st['list-2']} ${
                                    openSubmenuIndex === item.title ? st.open : ''
                                }`}>
                                {item.submenu.map((subItem) => (
                                    <li
                                        key={cuid()}
                                        className={`${st.listItem} ${st['listItem-2']}`}>
                                        <Link href={subItem.link}>{subItem.title}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </nav>
            <div
                onClick={() => setBurgerOpen(!isBurgerOpen)}
                className={`${st.burgerContainer} ${isBurgerOpen ? st.open : ''}`}>
                <div className={st.burgerButton} />
            </div>
        </header>
    );
}
