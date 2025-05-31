<template>
	<header class="navbar">
		Nombre de produits : {{ marketStore.cart }}
	</header>
</template>

<script>
import { mapStores } from 'pinia'
import { useMarketStore } from '../stores/marketStore.js'

export default {
	name: 'NavBar',
	computed: {
		...mapStores(useMarketStore),
	}
}
</script>
