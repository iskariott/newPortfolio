import { TProductList } from '@/entities/card/model/product-list';
import st from './CardList.module.scss';
import CardContent from '@/entities/card/ui/card-content/CardContent';
import { CARD_IMAGE_VARIANT } from '@/entities/card/model/card-image-variant';

type CardListProps = {
    card_list: TProductList;
    image_variant: CARD_IMAGE_VARIANT;
};

export default function CardList({ card_list, image_variant }: CardListProps) {
    return (
        <>
            <ul className={st.list}>
                {card_list.map((card) => (
                    <li key={card.title} className={st.card}>
                        <h1>{card.title}</h1>
                        <CardContent card={card} image_variant={image_variant} />
                        <p>{card.article}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
