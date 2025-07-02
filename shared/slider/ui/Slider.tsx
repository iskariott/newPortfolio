'use client';
import { useRef, useState } from 'react';
import st from './Slider.module.scss';
import Navigation from './navigation/Navigation';
import type { ImageProps } from 'next/image';
import type { FC } from 'react';
import { TProductImageList } from '@/entities/card/model/product-list';

type SliderProps = {
    images: TProductImageList;
    ImageComponent: FC<ImageProps>;
};

export default function Slider({ images, ImageComponent }: SliderProps) {
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const sliderRef = useRef(null);

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
        sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % images.length;
        goToSlide(next);
    };

    const prevSlide = () => {
        const prev = (currentSlide - 1 + images.length) % images.length;
        goToSlide(prev);
    };

    return (
        <div className={st.sliderContainer}>
            <div className={st.slider} ref={sliderRef}>
                {images.map((slide, index) => (
                    <div
                        key={index}
                        className={st.slide}
                        role="group"
                        aria-label={`Slide ${index + 1} of ${images.length}`}>
                        <ImageComponent src={slide.path} alt={slide.alt} />
                    </div>
                ))}
            </div>
            <Navigation
                prevSlide={prevSlide}
                nextSlide={nextSlide}
                goToSlide={goToSlide}
                currentSlide={currentSlide}
                totalPages={images.length}
            />
        </div>
    );
}
