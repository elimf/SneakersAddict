import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    items: []
  }),
  actions: {
    addItem(item) {
      const existingItem = this.items.find(i => i.id === item.id && i.size === item.size);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        this.items.push({ ...item, quantity: 1 });
      }
    },
    removeItem(itemId, itemSize) {
      const existingItem = this.items.find(i => i.id === itemId && i.size === itemSize);
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          this.items = this.items.filter(i => !(i.id === itemId && i.size === itemSize));
        }
      }
    },
    clearCart() {
      this.items = [];
    }
  },
  getters: {
    itemCount: (state) => state.items.reduce((acc, item) => acc + item.quantity, 0)
  }
});
