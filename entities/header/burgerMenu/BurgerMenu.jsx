import st from './BurgerMenu.module.scss';

export default function BurgerMenu({ isBurgerOpen, setBurgerOpen }) {
    return (
        <div
            onClick={() => setBurgerOpen(!isBurgerOpen)}
            className={`${st.burgerContainer} ${isBurgerOpen ? st.open : ''}`}>
            <div className={st.burgerButton} />
        </div>
    );
}
