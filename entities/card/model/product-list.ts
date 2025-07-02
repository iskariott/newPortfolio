export type TProductImage = {
    alt: string;
    path: string;
};

export type TProductImageList = TProductImage[];

export type TProductItem = {
    index: number;
    title: string;
    article: string;
    images: { alt: string; path: string }[];
};

export type TProductList = TProductItem[];

export const PRODUCT_LIST: TProductList = Array.from({ length: 8 }, (_, idx) => ({
    index: idx + 1,
    title: `Product ${idx + 1}`,
    article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sapiente',
    images: [
        { alt: `card image ${idx + 1}`, path: `/images/product${idx + 1}/1.webp` },
        { alt: `card image ${idx + 1}`, path: `/images/product${idx + 1}/2.webp` },
        { alt: `card image ${idx + 1}`, path: `/images/product${idx + 1}/3.webp` },
    ],
}));
