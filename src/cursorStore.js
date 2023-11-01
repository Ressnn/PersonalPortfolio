import create from 'zustand';

const useCursorStore = create(set => ({
  mouseX: 0,
  mouseY: 0,
  setMousePosition: (x, y) => set({ mouseX: x, mouseY: y })
}));

export default useCursorStore;
