import st from './CardContent.module.scss';
import { Slider } from '@/shared/slider';
import { CARD_IMAGE_VARIANT } from '@/entities/card/model/card-image-variant';
import { TProductItem } from '@/entities/card/model/product-list';
import { createSliderImage } from '@/shared/slider/ui/image/Image';

type CardContentProps = {
    card: TProductItem;
    image_variant: CARD_IMAGE_VARIANT;
};

export default function CardContent({ card, image_variant }: CardContentProps) {
    console.log('card = ', card);
    const CardImage = createSliderImage({
        width: 300,
        height: 300,
        sizes: '(max-width: 768px) 100vw, 350px',
    });

    switch (image_variant) {
        case 'simple':
            return (
                <div className={st.img_container}>
                    <CardImage src={card.images[0].path} alt={card.images[0].alt} />
                </div>
            );
        case 'slider': {
            return <Slider images={card.images} ImageComponent={CardImage} />;
        }
        case 'paginated': {
            return <></>;
        }
        case 'lazyload': {
            return <></>;
        }
        default:
            break;
    }
}
