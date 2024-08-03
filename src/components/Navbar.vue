<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark" id="nav">
    <a class="navbar-brand">Sneakers Addict</a>
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <router-link to="/" class="nav-link" active-class="router-link-exact-active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/apropos" class="nav-link" active-class="router-link-exact-active">A Propos</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/store" class="nav-link" active-class="router-link-exact-active">Store</router-link>
        </li>
      </ul>
      <div class="d-flex align-items-center">
        <button class="btn btn-outline-light" @click="openCartModal">
          <i class="bi bi-cart"></i> Panier ({{ cartItemCount }})
        </button>
      </div>
    </div>

    <!-- Modale du panier -->
    <div class="modal fade" id="cartModal" tabindex="-1" aria-labelledby="cartModalLabel" aria-hidden="true">
      <div class="modal-dialog modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="cartModalLabel">Votre Panier</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div v-if="cartItems.length === 0" class="text-center">
              <p>Votre panier est vide.</p>
            </div>
            <div v-else>
              <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center" v-for="item in cartItems" :key="`${item.id}-${item.size}`">
                  <div class="d-flex align-items-center">
                    <img :src="item.grid_picture_url" :alt="item.name" class="card-img-top" style="width: 50px; height: auto; margin-right: 10px;" />
                    <div>
                      <h5 class="mb-1">{{ item.name }}</h5>
                      <p class="mb-1">Prix : {{ (item.retail_price_cents / 100).toFixed(2) }}$</p>
                      <p class="mb-1">Taille : {{ item.size }}</p>
                      <p class="mb-1">Quantité : {{ item.quantity }}</p>
                    </div>
                  </div>
                  <button class="btn btn-danger btn-sm" @click="removeItem(item.id, item.size)">Retirer</button>
                </li>
              </ul>
            </div>
          </div>
          <div class="modal-footer">
            <button class="btn btn-secondary" @click="clearCart">Vider le panier</button>
            <button 
              type="button" 
              class="btn btn-primary" 
              :disabled="cartItems.length === 0" 
              @click="checkout"
            >
              Passer à la caisse
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>



<script>
import { ref, computed } from 'vue';
import { useCartStore } from '../store/cart';
import { useRouter } from 'vue-router';

export default {
  name: 'Navbar',
  setup() {
    const cartStore = useCartStore();
    const router = useRouter();

    const cartItemCount = computed(() => cartStore.itemCount);
    const cartItems = computed(() => cartStore.items);

    const openCartModal = () => {
      const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
      cartModal.show();
    };

    const removeItem = (itemId, itemSize) => {
      cartStore.removeItem(itemId, itemSize);
    };

    const clearCart = () => {
      cartStore.clearCart();
    };

    const checkout = () => {
      if (cartItems.value.length === 0) {
        alert('Votre panier est vide. Ajoutez des articles avant de passer à la caisse.');
        return;
      }
      alert('Fonction de paiement à implémenter.');
      // Vous pouvez ajouter ici la logique pour passer à la caisse ou rediriger vers une page de paiement.
      // router.push('/checkout'); // Exemple pour redirection vers la page de paiement
    };

    return {
      cartItemCount,
      cartItems,
      openCartModal,
      removeItem,
      clearCart,
      checkout
    };
  }
};
</script>



<style scoped>
#nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10001;
}

#nav .navbar-brand {
  font-weight: bold;
  color: white;
  font-size: 30px;
}

#nav .nav-link {
  color: white;
  font-size: 18px;
}

#nav .nav-link.router-link-exact-active {
  color: rgb(233, 20, 20);
  font-weight: bold;
}

.btn-outline-light {
  color: white;
  border-color: white;
}
</style>
