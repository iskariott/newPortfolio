import { Card, Header } from '@/widgets';
import st from './page.module.css';
export default function Home() {
    return (
        <>
            <Header />
            <main className={st.main}>
                <Card />
            </main>
        </>
    );
}
