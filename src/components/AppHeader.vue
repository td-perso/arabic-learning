<template>
  <div>
    <v-navigation-drawer v-model="drawer" temporary>
      <v-list-item link prepend-icon="mdi-close" title="Fermer" @click="drawer = false" />
      <v-divider />
      <v-list v-model="selectedItem" color="primary" flat>
        <v-list-item v-for="(item, i) in items" :key="i" link :to="item.to">
          <template #prepend>
            <v-icon size="24">
              <iconify-icon :icon="item.icon" />
            </v-icon>
          </template>
          {{ item.text }}
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar color="white">
      <v-app-bar-nav-icon @click="drawer = !drawer" />
      <v-toolbar-title>
        <h1 class="title d-flex justify-center text-h5 text-md-h4 text-lg-h4 text-xl-h4">
          <router-link class="title-link" to="Index">
            Arabic Learning
          </router-link>
        </h1>
      </v-toolbar-title>
      <!-- <v-img max-height="50" max-width="50" src="@/assets/logo.png" /> -->
    </v-app-bar>
  </div>
</template>

<script>
// import { Icon } from "@iconify/vue";
export default {
  name: 'AppHeader',
  data: () => ({
    drawer: false,
    selectedItem: 1,
    items: [
      { text: 'Accueil', icon: 'mdi-home', to: 'index' },
      { text: 'Alphabet', icon: 'mdi:book-alphabet', to: 'alphabet' },
      { text: 'Lexique', icon: 'mdi:book-search', to: 'lexique' },
    ],
  }),
  methods: {
    logout() {
      this.$router.push('connexion')
    },
  },
}
</script>

<style scoped>
.title-link {
  text-decoration: none;
  color: inherit;
  margin-right: 48px;
}

.title {
  font-family: "Aref Ruqaa", serif;
  font-weight: bold;
  font-style: normal;
  padding-bottom: 4px;
  color: #176535;
}
</style>
