import { defineStore } from 'pinia'

export const useMarketStore = defineStore('market', {
	state: () => ({
		products: [
			{
				name: 'ananas',
				emoji: '🍍',
				price: 2.2,
				discount: true
			},
			{
				name: 'pomme',
				emoji: '🍎',
				price: 0.6,
				discount: false,
			},
			{
				name: 'banane',
				emoji: '🍌',
				price: 0.35,
				discount: true
			}
		],
		cart: []
	}),
	actions: {
		addToCart(item) {
			this.cart.push(item)
		},
	},
	getters: {
		discounted: (state) => {
			return state.products.filter(product => product.discount)
		}
	}
})