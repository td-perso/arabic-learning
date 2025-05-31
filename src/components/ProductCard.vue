<template>
  <article class="product">
    <h2 class="product-name">{{ product.emoji }} {{ product.name }}</h2>
    <span class="product-price">{{ product.price }}€</span>
    <button @click="marketStore.addToCart(product)">Ajouter au panier</button>
  </article>
</template>

<script>
import { mapStores } from 'pinia'
import { useMarketStore } from '../stores/marketStore.js'

export default {
  name: 'ProductCard',
  props: {
    product: Object
  },
  computed: {
    ...mapStores(useMarketStore),
  }
}
</script>
