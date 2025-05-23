export const PRODUCT_LIST = Array.from({ length: 8 }, (_, idx) => ({
    title: `Product ${idx + 1}`,
    article: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, sapiente',
    image: `/images/product${idx + 1}/1.webp`,
}));
