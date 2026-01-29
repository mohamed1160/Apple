import { create } from "zustand";

export const loader = create((set) => ({
    // isLoading: false,
    // openLoader: () => set(() => ({ isLoading: true })),
    // closeLoader: () => set(() => ({ isLoading: false })),
    isLoading: false,
    welcomeName: "",

    openLoader: (name) =>
        set(() => ({
            isLoading: true,
            welcomeName: name || "",
        })),

    closeLoader: () =>
        set(() => ({
            isLoading: false,
            welcomeName: "",
        })),
}));

