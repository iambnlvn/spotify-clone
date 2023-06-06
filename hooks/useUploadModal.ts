import { create } from "zustand";

interface uploadModalStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const uploadhModal = create<uploadModalStore>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default uploadhModal;
