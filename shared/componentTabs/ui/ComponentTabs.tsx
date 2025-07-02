import StButton from '@/shared/button';
import st from './ComponentTabs.module.scss';

export default function ComponentTabs() {
    return (
        <div className={st.container}>
            <nav className={st.nav}>
                <ul className={st.list}>
                    <li className={st.listItem}>
                        <StButton hoverEffect={'opacity'} className={st.btn}>
                            asdasd
                        </StButton>
                    </li>
                    <li className={st.listItem}>
                        <StButton hoverEffect={'opacity'} className={st.btn}>
                            asdasd
                        </StButton>
                    </li>
                    <li className={st.listItem}>
                        <StButton hoverEffect={'opacity'} className={st.btn}>
                            asdas
                        </StButton>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
