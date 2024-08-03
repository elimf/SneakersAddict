<template>
  <div>
    <!-- Section des tendances -->
    <div v-if="showTrends" class="container-fluid py-5">
      <div class="text-center mb-5">
        <h2 class="section-heading text-uppercase">Tendances du moment</h2>
        <h3 class="section-subheading text-muted">
          Un aperçu des produits disponibles :
        </h3>
      </div>

      <div class="row justify-content-center">
        <div
          class="col-12 col-md-6 col-lg-4 col-xl-3 mb-4"
          v-for="sneaker in randomSneakers"
          :key="sneaker.id"
        >
          <div class="card h-100 shadow-sm">
            <img
              :src="sneaker.grid_picture_url"
              :alt="sneaker.name"
              class="card-img-top"
            />
            <div class="card-body text-center">
              <h5 class="card-title">{{ sneaker.name }}</h5>
              <p class="card-text text-muted">
                {{ (sneaker.retail_price_cents / 100).toFixed(2) }}$
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Section de filtrage et recherche -->
    <div v-else class="container-fluid py-5">
      <div class="row justify-content-center">
        <div class="text-center mb-5">
          <h2 class="section-heading text-uppercase">Nos Sneakers</h2>
          <h3 class="section-subheading text-muted">
            Voici une sélection qui pourra vous plaire 😍
          </h3>
        </div>
        <div class="col-12 col-lg-6 col-xl-10 mb-4">
          <input
            type="search"
            id="form1"
            class="form-control"
            aria-label="Search"
            placeholder="Rechercher un produit"
            v-model="textSearch"
            @input="searchProduct"
          />
        </div>
      </div>

      <div class="row justify-content-center mt-5">
        <div
          class="col-12 col-lg-6 col-xl-3 mb-4"
          v-for="sneaker in filteredProducts"
          :key="sneaker.id"
        >
          <div class="card h-100 shadow-sm">
            <img
              :src="sneaker.grid_picture_url"
              :alt="sneaker.name"
              class="card-img-top"
            />
            <div class="card-body text-center">
              <h5 class="card-title">{{ sneaker.name }}</h5>
              <p class="card-text text-muted">
                {{ (sneaker.retail_price_cents / 100).toFixed(2) }}$
              </p>
              <div class="size">
                <h6>Size :</h6>
                <select v-model="selectedSizes[sneaker.id]" class="form-select mb-2">
                  <option value="">Choisir une taille</option>
                  <option
                    v-for="(size, index2) in sneaker.size_range"
                    :key="index2"
                    :value="size"
                  >
                    {{ size }}
                  </option>
                </select>
              </div>
            </div>
            <div class="card-footer text-center">
              <button
                class="btn btn-primary"
                @click="addToCart(sneaker)"
                :disabled="!selectedSizes[sneaker.id]"
              >
                Ajouter au panier
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sneakersData from "../data/API.json";
import { useCartStore } from '../store/cart';
import { ref, reactive } from 'vue';

export default {
  props: {
    showTrends: {
      type: Boolean,
      default: true
    }
  },
  setup() {
    const cartStore = useCartStore();
    const selectedSizes = reactive({}); // Utilisez un objet réactif pour suivre les tailles sélectionnées

    const addToCart = (sneaker) => {
      const selectedSize = selectedSizes[sneaker.id];
      if (selectedSize) {
        cartStore.addItem({
          id: sneaker.id,
          name: sneaker.name,
          retail_price_cents: sneaker.retail_price_cents,
          size: selectedSize,
          grid_picture_url: sneaker.grid_picture_url
        });
      } else {
        alert("Veuillez sélectionner une taille.");
      }
    };

    return {
      selectedSizes,
      addToCart
    };
  },
  data() {
    return {
      sneakers: sneakersData.sneakers || [], // Assuming the JSON has a "sneakers" property
      textSearch: "",
      filteredProducts: [],
      randomSneakers: []
    };
  },
  methods: {
    searchProduct() {
      if (this.showTrends) return; // Ignore search if trends are shown

      this.filteredProducts = this.sneakers.filter(sneaker =>
        sneaker.name.toLowerCase().includes(this.textSearch.toLowerCase())
      );
    },
    getRandomSneakers() {
      // Shuffle the sneakers array and select the first 3
      let shuffled = this.sneakers.sort(() => 0.5 - Math.random());
      this.randomSneakers = shuffled.slice(0, 3);
    }
  },
  mounted() {
    if (this.showTrends) {
      this.getRandomSneakers();
    } else {
      this.filteredProducts = this.sneakers; // Initialize with all sneakers
    }
  },
  watch: {
    showTrends(newValue) {
      if (newValue) {
        this.getRandomSneakers();
      }
    },
    textSearch() {
      if (!this.showTrends) {
        this.searchProduct();
      }
    }
  }
};
</script>

<style scoped>
body {
  background: #413f42;
}
.section-heading {
  color: #fff;
}
.section-subheading {
  color: #bbb;
}
.card {
  background-color: #232323;
  color: #fff;
  border: none;
}
.card-title {
  font-size: 1.25rem;
  margin-bottom: 0.75rem;
}
.card-text {
  font-size: 1rem;
}
.card-footer {
  background-color: #232323;
  border-top: none;
}
.btn-primary {
  background-color: #eee3cb;
  border-color: #eee3cb;
}
.btn-primary:hover {
  background-color: #d9c2a6;
  border-color: #d9c2a6;
}
.size-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
}
.size-list span {
  background: #eee3cb;
  color: #232323;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 0.875rem;
  cursor: pointer;
}
.size-list span:hover {
  background-color: #d9c2a6;
}
</style>
