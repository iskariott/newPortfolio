'use client';

import { PRODUCT_LIST } from '@/entities/card/model/product-list';
import st from './Card.module.scss';
import { useState } from 'react';
import { CardList } from '@/entities/card';
import { Pagination } from '@/shared/pagination';
import ComponentTabs from '@/shared/componentTabs/ui/ComponentTabs';

export default function Card() {
    const itemsPerPage = 2;
    const [page, setPage] = useState(0);

    const totalPages = Math.ceil(PRODUCT_LIST.length / itemsPerPage);
    const paginated = PRODUCT_LIST.slice(page * itemsPerPage, (page + 1) * itemsPerPage);
    return (
        <section className={st.section}>
            <ComponentTabs />
            <CardList card_list={paginated} image_variant={'slider'} />
            <Pagination
                totalPages={totalPages}
                currentPage={page}
                setPage={setPage}
                pagination_variant={'number'}
            />
        </section>
    );
}
