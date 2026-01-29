export const navLinks = [{ label: "Store" }, { label: "Mac" }, { label: "iPad" }, { label: "iPhone" }, { label: "Watch" }, { label: "AirPods" }, { label: "vision" }];
import { create } from "zustand";
const useMacbookStore = create((set) => ({
    color: "#2e2c2e",
    setColor: (color) => set({ color }),
    scal: 0.08,
    setScal: (scal) => set({ scal }),
    reset: () => set({ color: "#2e2c2e", scal: 0.08 }),
}));
export default useMacbookStore;