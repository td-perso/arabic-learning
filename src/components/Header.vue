<template>
  <div>
    <v-navigation-drawer v-model="drawer" app>
      <v-list flat>
        <v-subheader>MENU</v-subheader>
        <v-list-item-group v-model="selectedItem" color="primary">
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" link>
            <v-list-item-icon>
              <v-icon v-text="item.icon"></v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text"></v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <template v-slot:append>
        <div class="pa-2">
          <v-btn dark color="red" block @click="logout"><v-icon>mdi-logout</v-icon> Logout
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>

    <v-app-bar app>
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>
        <h1>App-Name</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-img max-height="50" max-width="50" src="@/assets/app-logo.png"></v-img>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  computed: {
  },
  data: () => ({
    drawer: false,
    selectedItem: 1,
    items: [
      { text: "Home", icon: "mdi-home", to: "index" },
      { text: "Page1", icon: "mdi-arrow-right-box", to: "page1" },
      { text: "Page2", icon: "mdi-arrow-right-box", to: "page2" },
      { text: "Page3", icon: "mdi-arrow-right-box", to: "page3" },
      { text: "AppPinia", icon: "mdi-arrow-right-box", to: "appPinia" },
    ],
  }),
  methods: {
    logout() {
      this.$router.push("connexion");
    },
  },
};
</script>

<style scoped>
.disable-events {
  pointer-events: none;
}
</style>