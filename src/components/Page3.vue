<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fluid>
        <h2>Page3</h2>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";
export default {
  name: "Page3",
  components: {
    Header,
    Footer,
  },
  data: () => ({}),

  mounted() {},

  computed: {
  },

  methods: {},
};
</script>