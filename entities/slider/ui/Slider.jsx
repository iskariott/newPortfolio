'use client';
import { useEffect, useRef, useState } from 'react';
import st from './Slider.module.scss';
import Image from 'next/image';
import { SLIDE_ITEMS } from '../model/slideItems';
import Navigation from './navigation/Navigation';

export default function Slider() {
    // Інтервал для автопрокрутки
    const autoSlideInterval = 3000;
    const [currentSlide, setCurrentSlide] = useState(0);
    const sliderRef = useRef(null);
    const autoSlideRef = useRef(null);

    const goToSlide = (index) => {
        setCurrentSlide(index);
        sliderRef.current.style.transform = `translateX(-${index * 100}%)`;
    };

    const nextSlide = () => {
        const next = (currentSlide + 1) % SLIDE_ITEMS.length;
        goToSlide(next);
    };

    const prevSlide = () => {
        const prev = (currentSlide - 1 + SLIDE_ITEMS.length) % SLIDE_ITEMS.length;
        goToSlide(prev);
    };

    // Автопрокрутка;
    // useEffect(() => {
    //     if (autoSlideInterval) {
    //         autoSlideRef.current = setInterval(nextSlide, autoSlideInterval);
    //     }
    //     return () => clearInterval(autoSlideRef.current);
    // }, [currentSlide]);

    return (
        <div className={st.sliderContainer}>
            <div className={st.slider} ref={sliderRef}>
                {SLIDE_ITEMS.map((slide, index) => (
                    <div
                        key={index}
                        className={st.slide}
                        role="group"
                        aria-label={`Slide ${index + 1} of ${SLIDE_ITEMS.length}`}>
                        <Image src={slide.image} width={400} height={300} alt={slide.alt} />
                    </div>
                ))}
            </div>
            <Navigation
                prevSlide={prevSlide}
                nextSlide={nextSlide}
                currentSlide={currentSlide}
                slides={SLIDE_ITEMS}
            />
        </div>
    );
}
