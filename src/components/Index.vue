<template>
  <v-app>
    <Header />
    <v-main>
      <v-container fill-height fluid>
        <v-img height="90" contain src="../assets/app-logo.png"></v-img>
        <v-row align="center" justify="center">
          <v-col>
            <router-link to="page1">
              <v-card height="200">
                <v-card-title primary-title> Page 1 </v-card-title>
              </v-card>
            </router-link>
          </v-col>
          <v-col>
            <router-link to="page2">
              <v-card height="200">
                <v-card-title primary-title> Page 2 </v-card-title>
              </v-card>
            </router-link>
          </v-col>
          <v-col>
            <router-link to="page3">
              <v-card height="200">
                <v-card-title primary-title> Page 3 </v-card-title>
              </v-card>
            </router-link>
          </v-col>
          <v-col>
            <router-link to="guessflag">
              <v-card height="200">
                <v-card-title primary-title> Guess Flag</v-card-title>
              </v-card>
            </router-link>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default {
  name: "Index",
  components: {
    Header,
    Footer,
  },
  data: () => ({}),
};
</script>

<style scoped>
a:link {
  text-decoration: none;
}

a:visited {
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

a:active {
  text-decoration: none;
}
</style>
