import Image from 'next/image';
import styles from './page.module.css';
import BaseHeader from '@/entities/headers/BaseHeader/BaseHeader';
export default function Home() {
    return (
        <div>
            <BaseHeader />
            <main>
                <h1>Hello World</h1>
            </main>
        </div>
    );
}
