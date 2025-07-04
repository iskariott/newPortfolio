import { productImages } from '@/entities/card/model/image-imports';
import type { StaticImageData } from 'next/image';

export type TProductImage = {
    alt: string;
    path: StaticImageData;
};

export type TProductImageList = TProductImage[];

export type TProductItem = {
    index: number;
    title: string;
    article: string;
    images: { alt: string; path: StaticImageData }[];
};

export type TProductList = TProductItem[];

export const PRODUCT_LIST: TProductList = productImages.map((p, idx) => ({
    index: idx + 1,
    title: `Product ${idx + 1}`,
    article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sapiente',
    images: p.map((img, im_idx) => ({
        alt: `Product ${idx + 1} card image ${im_idx + 1}`,
        path: img,
    })),
}));
