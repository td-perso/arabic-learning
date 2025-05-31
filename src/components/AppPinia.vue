<template>
	<v-app>
		<Header />
		<v-main>
			<v-container fluid>
				<h2>AppPinia</h2>
				<NavBar></NavBar>
				<ProductCard v-for="product in marketStore.products" :key="product.name" :product="product"></ProductCard>
			</v-container>
		</v-main>
		<Footer />
	</v-app>
</template>


<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from './ProductCard.vue'
import NavBar from './NavBar.vue'

import { mapStores } from 'pinia'
import { useMarketStore } from '../stores/marketStore.js'

export default {
	components: {
		ProductCard,
		NavBar
	},
	computed: {
		...mapStores(useMarketStore),
	}
}
</script>
