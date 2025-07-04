import { CARD_LOADING_LABEL_REVERSED, TCARD_LOADING_VARIANT } from './card-loading-variant';
import { create } from 'zustand';

interface CardLoadingState {
    variant: TCARD_LOADING_VARIANT;
    setVariant: (label: string) => void;
}

export const useCardLoadingStore = create<CardLoadingState>((set) => ({
    variant: 'simple',
    setVariant: (label) => set({ variant: CARD_LOADING_LABEL_REVERSED[label] }),
}));
