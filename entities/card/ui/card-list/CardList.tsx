import { TProductList } from '@/entities/card/model/product-list';
import st from './CardList.module.scss';
import { TCARD_LOADING_VARIANT } from '@/entities/card/model/card-loading-variant';
import { Slider } from '@/shared/slider';
import { createSliderImage } from '@/shared/slider/ui/image/Image';

type CardListProps = {
    card_list: TProductList;
    card_loading: TCARD_LOADING_VARIANT;
};

export default function CardList({ card_list, card_loading }: CardListProps) {
    const CardImage = createSliderImage({
        width: 300,
        height: 300,
        sizes: '(max-width: 768px) 100vw, 350px',
        loading: card_loading === 'simple' ? 'eager' : 'lazy',
    });
    return (
        <>
            <ul className={st.list}>
                {card_list.map((card) => (
                    <li key={card.title} className={st.card}>
                        <h1>{card.title}</h1>
                        <Slider images={card.images} ImageComponent={CardImage} />
                        <p>{card.article}</p>
                    </li>
                ))}
            </ul>
        </>
    );
}
