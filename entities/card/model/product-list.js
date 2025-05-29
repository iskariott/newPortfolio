export const PRODUCT_LIST = Array.from({ length: 8 }, (_, idx) => ({
    index: idx + 1,
    title: `Product ${idx + 1}`,
    article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sapiente',
    images: [
        `/images/product${idx + 1}/1.webp`,
        `/images/product${idx + 1}/2.webp`,
        `/images/product${idx + 1}/3.webp`,
    ],
}));
