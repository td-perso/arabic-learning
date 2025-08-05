<template>
  <div>
    <main>
      <v-container>
        <v-row>
          <v-col v-for="(card, index) in cards" :key="index" cols="12">
            <v-card class="mx-auto" max-width="500">
              <v-img class="align-end text-white" cover height="250" :src="card.image" />
              <v-card-title>{{ card.title }}</v-card-title>
              <v-card-text>
                <p>Content</p>
              </v-card-text>
              <v-card-actions>
                <router-link to="Circuit">
                  <v-btn color="green" text>
                    Détails
                  </v-btn>
                </router-link>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      cards: [
        // {
        //   title: 'Circuit 1 : Patrimoine et Histoire de Constantine',
        //   subtitle: 'Durée : Environ 4 heures - Difficulté : Facile',
        //   description: 'Ce circuit vous permettra de découvrir les sites historiques les plus emblématiques de Constantine, souvent surnommée la "Ville des Ponts Suspendus".',
        //   image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/1_Pont_de_Sidi_M%27Cid.JPG/1920px-1_Pont_de_Sidi_M%27Cid.JPG',
        // },
        // {
        //   title: 'Beautiful Beach',
        //   subtitle: 'Number 9',
        //   description: 'Bondi Beach, Sydney',
        //   image: 'https://cdn.vuetifyjs.com/images/cards/sunshine.jpg',
        // },
        // {
        //   title: 'Amazing Beach',
        //   subtitle: 'Number 8',
        //   description: 'Manly Beach, Sydney',
        //   image: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
        // },
        {
          title: 'Index',
          subtitle: 'Subtitle',
          description: 'Description',
          // image: new URL('@/assets/landscape2.jpg', import.meta.url).href,
        },
        // Ajoutez d'autres cartes ici
      ],
    }
  },
  methods: {
  },
}
</script>

<style scoped>
/* Add your styles here */
.card-border {
  border: 1px solid #ccc;
  /* Changez cette couleur et épaisseur selon vos besoins */
  border-radius: 8px;
  /* Ajoutez un rayon de bordure si nécessaire */
}

.card-background {
  background-color: white;
  /* Changez cette couleur selon vos besoins */
}
</style>
