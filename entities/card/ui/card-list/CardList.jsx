import st from './CardList.module.scss';
import CardItem from '../card-item/CardItem';

export default function CardList({ card_list }) {
    return (
        <>
            <ul className={st.list}>
                {card_list.map((card) => (
                    <CardItem key={card.title} card={card} />
                ))}
            </ul>
        </>
    );
}
