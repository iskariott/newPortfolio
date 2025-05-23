import Image from 'next/image';
import st from './CardItem.module.scss';

export default function CardItem({ card }) {
    return (
        <>
            <li key={card.title} className={st.card}>
                <h1>{card.title}</h1>
                <div className={st.img_container}>
                    <Image
                        src={card.image}
                        alt={card.title}
                        width={300}
                        height={300}
                        sizes="(max-width: 768px) 100vw, 350px"
                        style={{ borderRadius: '8px' }}
                        // priority={page === 1}
                    />
                </div>
                <p>{card.article}</p>
            </li>
        </>
    );
}
