import { create } from "zustand";
import { persist } from "zustand/middleware";
import { LikedListState } from "../types/likedList";


export const useLikedListStore = create<LikedListState>()(
    persist(
        (set, get) => ({
            likedList: [],
            addItem: (filmData) => set((state) => {
                    if (!get().hasId(filmData.imdbID)) {
                        return { likedList: [...state.likedList, filmData] };
                    }
                return state;
            }),
            removeItem: (id: string) =>
                set((state) => ({ likedList: state.likedList.filter((item) => item.imdbID !== id) })),
            hasId: (id: string) => get().likedList.some((item) => item.imdbID === id),
        }),
        {
            name: "liked-list-storage",
        }
    )
);

export const useLikedList = () => {
    const likedList = useLikedListStore((state) => state.likedList);
    const addItem = useLikedListStore((state) => state.addItem);
    const removeItem = useLikedListStore((state) => state.removeItem);
    const hasId = useLikedListStore((state) => state.hasId);

    return { likedList, addItem, removeItem, hasId };
};
