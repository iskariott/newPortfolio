import StButton from '@/shared/button';
import st from './ComponentTabs.module.scss';

type ComponentTabsProps = {
    tabs: string[];
    setTab: (label: string) => void;
};

export default function ComponentTabs({ tabs, setTab }: ComponentTabsProps) {
    return (
        <div className={st.container}>
            <nav className={st.nav}>
                <ul className={st.list}>
                    {tabs.map((t) => (
                        <li className={st.listItem} key={t}>
                            <StButton
                                hoverEffect={'opacity'}
                                className={st.btn}
                                onClick={() => setTab(t)}>
                                {t}
                            </StButton>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
}
