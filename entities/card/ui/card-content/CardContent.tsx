import st from './CardContent.module.scss';
import { Slider } from '@/shared/slider';
import { TCARD_LOADING_VARIANT } from '@/entities/card/model/card-loading-variant';
import { TProductItem } from '@/entities/card/model/product-list';
import { createSliderImage } from '@/shared/slider/ui/image/Image';

type CardContentProps = {
    card: TProductItem;
    card_loading: TCARD_LOADING_VARIANT;
};

export default function CardContent({ card, card_loading }: CardContentProps) {}
