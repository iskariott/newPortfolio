'use client';

import { PRODUCT_LIST } from '@/entities/card/model/product-list';
import st from './Card.module.scss';
import { useState } from 'react';
import { CardList } from '@/entities/card';
import { Pagination } from '@/shared/pagination';
import ComponentTabs from '@/shared/componentTabs/ui/ComponentTabs';
import { CARD_LOADING_LABEL } from '@/entities/card/model/card-loading-variant';
import { useCardLoadingStore } from '@/entities/card/model/store';

export default function Card() {
    const cardLoadVariant = useCardLoadingStore((state) => state.variant);
    const setCardLoadVariant = useCardLoadingStore((state) => state.setVariant);
    const ITEMS_PER_PAGE = 2;
    const [page, setPage] = useState(0);
    let cardsToShow = PRODUCT_LIST;
    const totalPages = Math.ceil(PRODUCT_LIST.length / ITEMS_PER_PAGE);
    if (cardLoadVariant === 'paginated') {
        cardsToShow = PRODUCT_LIST.slice(page * ITEMS_PER_PAGE, (page + 1) * ITEMS_PER_PAGE);
    }
    return (
        <section className={st.section}>
            <ComponentTabs tabs={Object.values(CARD_LOADING_LABEL)} setTab={setCardLoadVariant} />
            <CardList card_list={cardsToShow} card_loading={cardLoadVariant} />
            {cardLoadVariant === 'paginated' && (
                <Pagination
                    totalPages={totalPages}
                    currentPage={page}
                    setPage={setPage}
                    pagination_variant={'number'}
                />
            )}
        </section>
    );
}
