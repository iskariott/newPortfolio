import { CARD_LOADING_LABEL_REVERSED, TCARD_LOADING_VARIANT } from './card-loading-variant';
import { create } from 'zustand';
import { persist, PersistOptions } from 'zustand/middleware';

type CardLoadingState = {
    variant: TCARD_LOADING_VARIANT;
    setVariant: (label: string) => void;
};

type CardLoadingPersist = PersistOptions<CardLoadingState>;

export const useCardLoadingStore = create<CardLoadingState>()(
    persist<CardLoadingState, [], [], CardLoadingPersist>(
        (set) => ({
            variant: 'simple',
            setVariant: (label) => set({ variant: CARD_LOADING_LABEL_REVERSED[label] }),
        }),
        {
            name: 'card-loading-storage',
        },
    ),
);
