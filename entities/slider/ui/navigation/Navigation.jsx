import st from './Navigation.module.scss';

export default function Navigation({ prevSlide, nextSlide, currentSlide, slides }) {
    return (
        <>
            <button
                className={`${st.navButton} ${st.prev}`}
                onClick={prevSlide}
                aria-label="Previous slide">
                ←
            </button>
            <button
                className={`${st.navButton} ${st.next}`}
                onClick={nextSlide}
                aria-label="Next slide">
                →
            </button>
            <div className={st.pagination}>
                {/* Щоб не передавати масив із слайдами використовую тільки його довжину */}
                {slides.map((_, index) => (
                    <button
                        key={index}
                        className={`${st.dot} ${index === currentSlide ? st.active : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </>
    );
}
