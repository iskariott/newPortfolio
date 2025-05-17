import { Slider, SliderArticle } from '@/entities/slider';
import st from './SliderSection.module.scss';

export default function SliderSection() {
    return (
        <div className={st.container}>
            <Slider />
            <SliderArticle />
        </div>
    );
}
