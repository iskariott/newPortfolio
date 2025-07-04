export type TCARD_LOADING_VARIANT = 'simple' | 'paginated' | 'lazyload';
// export type TCARD_LOADING_LABEL = Record<TCARD_LOADING_VARIANT, string>;
export const CARD_LOADING_LABEL: Record<TCARD_LOADING_VARIANT, string> = {
    simple: 'Simple',
    paginated: 'Paginated',
    lazyload: 'Lazy Load',
} as const;

export const CARD_LOADING_LABEL_REVERSED = Object.fromEntries(
    Object.entries(CARD_LOADING_LABEL).map(([key, value]) => [value, key]),
) as Record<string, TCARD_LOADING_VARIANT>;
