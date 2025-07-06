import StButton from '@/shared/button';
import st from './ComponentTabs.module.scss';
import { useCardLoadingStore } from '@/entities/card/model/store';
import {
    CARD_LOADING_LABEL,
    CARD_LOADING_LABEL_REVERSED,
} from '@/entities/card/model/card-loading-variant';

type ComponentTabsProps = {
    tabs: string[];
    setTab: (label: string) => void;
};

export default function ComponentTabs({ tabs, setTab }: ComponentTabsProps) {
    const activeTab = useCardLoadingStore((state) => state.variant);
    function TabDescription() {
        switch (activeTab) {
            case 'simple':
                return (
                    <p className={st.description}>
                        <strong>Simple</strong> — усі зображення завантажуються одразу після рендеру
                        сторінки. Це найпростіша реалізація, однак вона не оптимізована: значно
                        збільшує час завантаження та використання трафіку, особливо при великій
                        кількості карток.
                    </p>
                );
            case 'paginated':
                return (
                    <p className={st.description}>
                        <strong>Paginated</strong> — завантажується обмежена кількість карток, решта
                        доступна через пагінацію. Це дозволяє зменшити навантаження на сторінку та
                        покращити продуктивність, особливо для великих списків.
                    </p>
                );
            case 'lazyload':
                return (
                    <p className={st.description}>
                        <strong>Lazy Load</strong> — зображення завантажуються лише тоді, коли
                        потрапляють у видиму область (viewport), завдяки вбудованому механізму
                        Next.js <code>&lt;Image loading="lazy" /&gt;</code>. Це найбільш ефективний
                        варіант, що мінімізує трафік і прискорює завантаження сторінки.
                    </p>
                );
            default:
                return <></>;
        }
    }

    return (
        <div className={st.container}>
            <nav className={st.nav}>
                <ul className={st.list}>
                    {tabs.map((t) => (
                        <li className={st.listItem} key={t}>
                            <StButton
                                hoverEffect={'opacity'}
                                className={[
                                    st.btn,
                                    t === CARD_LOADING_LABEL[activeTab] ? st.active : '',
                                ]
                                    .join(' ')
                                    .trim()}
                                onClick={() => setTab(t)}>
                                {t}
                            </StButton>
                        </li>
                    ))}
                </ul>
                <TabDescription />
            </nav>
        </div>
    );
}
