import { TSetState } from '@/shared/types/common.types';
import st from './BurgerMenu.module.scss';

type BurgerMenuProps = {
    isBurgerOpen: boolean;
    setBurgerOpen: TSetState<boolean>;
};

export default function BurgerMenu({ isBurgerOpen, setBurgerOpen }: BurgerMenuProps) {
    return (
        <div
            onClick={() => setBurgerOpen(!isBurgerOpen)}
            className={`${st.burgerContainer} ${isBurgerOpen ? st.open : ''}`}>
            <div className={st.burgerButton} />
        </div>
    );
}
