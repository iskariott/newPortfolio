import st from './CardList.module.scss';
import CardContent from '@/entities/card/ui/card-content/CardContent';

export default function CardList({ card_list, image_variant, page }) {
    return (
        <>
            <ul className={st.list}>
                {card_list.map((card) => (
                    <li key={card.title} className={st.card}>
                        <h1>{card.title}</h1>
                        <CardContent card={card} image_variant={image_variant} page={page} />
                        <p>{card.article}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
