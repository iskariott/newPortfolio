'use client';

import Link from 'next/link';
import st from './BaseHeader.module.scss';
import { useState } from 'react';
import { BurgerMenu, Navigation } from '@/entities/header';

export default function BaseHeader() {
    const [isBurgerOpen, setBurgerOpen] = useState(false);
    const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
    const toggleSubmenu = (index) => {
        setOpenSubmenuIndex((prev) => (prev === index ? null : index));
    };

    return (
        <header className={st.header}>
            <Link href="#" className={st.logo} />
            <Navigation
                isBurgerOpen={isBurgerOpen}
                openSubmenuIndex={openSubmenuIndex}
                toggleSubmenu={toggleSubmenu}
            />
            <BurgerMenu isBurgerOpen={isBurgerOpen} setBurgerOpen={setBurgerOpen} />
        </header>
    );
}
