import st from './SliderArticle.module.scss';

export default function SliderArticle() {
    return (
        <div className={st.container}>
            <h1 className={st.title}>Слайдер</h1>
            <p className={st.text}>
                Цей слайдер виконаний без допомоги сторонніх бібліотек для показу навичок
                використання <span>React Hooks</span> та <span>JS</span>.
            </p>
        </div>
    );
}
