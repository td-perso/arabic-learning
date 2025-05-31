<template>
  <v-app>
    <v-toolbar max-height="60">
      <v-row>
        <v-col cols="2"> </v-col>
        <v-col class="d-flex justify-space-around">
          <v-toolbar-title>
            <h1>App-name</h1>
          </v-toolbar-title>
        </v-col>
        <v-col cols="2" class="d-flex justify-end">
          <v-img max-height="50" max-width="50" src="@/assets/app-logo.png"></v-img>
        </v-col>
      </v-row>
    </v-toolbar>

    <v-container fill-height fluid>
      <v-row align="center" justify="center">
        <v-col>
          <v-card class="mx-auto my-12" max-width="500" flat>
            <v-form ref="form" v-model="valid" lazy-validation>
              <v-text-field v-model="username" :rules="usernameRules" label="Username" required></v-text-field>
              <v-text-field v-model="password" :rules="passwordRules" label="Password"
                :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" :type="show1 ? 'text' : 'password'"
                @click:append="show1 = !show1" @keydown.enter="connexion"></v-text-field>
              <v-card-actions class="justify-center">
                <v-btn color="success" @click="connexion">Connexion</v-btn>
              </v-card-actions>
            </v-form>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
    <v-snackbar centered color="red" :timeout="timeout" v-model="snackbar">
      <div class="text-center">
        {{ text }}
      </div>
    </v-snackbar>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/Footer";
export default {
  name: "Connexion",
  components: {
    Footer,
  },
  data: () => ({
    snackbar: false,
    text: "",
    timeout: 3000,
    show1: false,
    username: "",
    password: "",
    valid: true,
    usernameRules: [(v) => !!v || "Username is required"],
    passwordRules: [(v) => !!v || "Password is required"],
  }),

  computed: {
  },

  methods: {
    async connexion() {
      this.$refs.form.validate();
      if (this.username == "" || this.password == "") {
        this.text = "Error : Username or Password is empty";
        this.snackbar = true;
        this.resetUsername();
        this.resetPassword();
      } else {
        this.$router.push("/Index");
      }
    },
    setUsername() {
      this.$store.commit("setUsername", this.username);
    },
    setPassword() {
      this.$store.commit("setPassword", this.password);
    },
    resetUsername() {
      this.username = "";
      this.$store.commit("setUsername", "");
    },
    resetPassword() {
      this.password = "";
      this.$store.commit("setPassword", "");
    },
  },
};
</script>
