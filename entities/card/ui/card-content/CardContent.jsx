import st from './CardContent.module.scss';
import { Slider } from '@/shared/slider';
import { CARD_IMAGE_VARIANT } from '@/entities/card/model/card-image-variant';
import Image from 'next/image';

function SliderImage(alt) {
    return (props) => (
        <Image
            {...props}
            alt={alt}
            width={300}
            height={300}
            sizes="(max-width: 768px) 100vw, 350px"
        />
    );
}

export default function CardContent({ card, image_variant }) {
    switch (image_variant) {
        case CARD_IMAGE_VARIANT.SIMPLE:
            return (
                <div className={st.img_container}>
                    <Image
                        src={card.images[0]}
                        alt={card.title}
                        width={300}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 350px"
                    />
                </div>
            );
        case CARD_IMAGE_VARIANT.SLIDER: {
            return <Slider images={card.images} ImageComponent={SliderImage(card.title)} />;
        }
        default:
            break;
    }
}
