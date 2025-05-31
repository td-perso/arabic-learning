<template>
  <v-app>
    <HeaderComponent />
    <v-main>
      <v-container fluid>
        <h2>AlphabetComponent</h2>
        <v-table>
          <thead>
            <tr>
              <th class="text-left">
                Nom FR
              </th>
              <th class="text-left">
                Nom AR
              </th>
              <th class="text-left">
                Lettre FR
              </th>
              <th class="text-left">
                Lettre AR
              </th>
              <th class="text-left">
                Finale
              </th>
              <th class="text-left">
                Mediane
              </th>
              <th class="text-left">
                Initiale
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in letters" :key="item.nameFr">
              <td>{{ item.nameFr }}
              </td>
              <td>
                {{ item.nameAr }}
              </td>
              <td>
                {{ item.letterFr }}
              </td>
              <td>
                {{ item.letterAr }}
              </td>
              <td>
                {{ item.formeFinale }}
              </td>
              <td>
                {{ item.formeMediane }}
              </td>
              <td>
                {{ item.formeInitiale }}
              </td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </v-main>
    <FooterComponent />
  </v-app>
</template>

<script>
import HeaderComponent from '@/components/HeaderComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import { mapGetters } from 'vuex';
export default {
  name: 'AlphabetComponent',
  components: {
    HeaderComponent,
    FooterComponent,
  },
  data: () => ({
    letters: [
      {
        nameFr: 'Alif',
        nameAr: 'الف',
        letterFr: 'A',
        letterAr: 'ا',
        formeInitiale: 'ا',
        formeMediane: 'ـا',
        formeFinale: 'ـا',
      },
      {
        nameFr: 'Bā',
        nameAr: 'باء',
        letterFr: 'B',
        letterAr: 'ب',
        formeInitiale: 'بـ',
        formeMediane: 'ـبـ',
        formeFinale: 'ـب',
      },
      {
        nameFr: 'Tā',
        nameAr: 'تاء',
        letterFr: 'T',
        letterAr: 'ت',
        formeInitiale: 'تـ',
        formeMediane: 'ـتـ',
        formeFinale: 'ـت',
      },
      {
        nameFr: 'Thā',
        nameAr: 'ثاء',
        letterFr: 'Th',
        letterAr: 'ث',
        formeInitiale: 'ثـ',
        formeMediane: 'ـثـ',
        formeFinale: 'ـث',
      },
      {
        nameFr: 'Jīm',
        nameAr: 'جيم',
        letterFr: 'J',
        letterAr: 'ج',
        formeInitiale: 'جـ',
        formeMediane: 'ـجـ',
        formeFinale: 'ـج',
      },
      {
        nameFr: 'Ḥā',
        nameAr: 'حاء',
        letterFr: 'Ḥ',
        letterAr: 'ح',
        formeInitiale: 'حـ',
        formeMediane: 'ـحـ',
        formeFinale: 'ـح',
      },
      {
        nameFr: 'Khā',
        nameAr: 'خاء',
        letterFr: 'Kh',
        letterAr: 'خ',
        formeInitiale: 'خـ',
        formeMediane: 'ـخـ',
        formeFinale: 'ـخ',
      },
      {
        nameFr: 'Dāl',
        nameAr: 'دال',
        letterFr: 'D',
        letterAr: 'د',
        formeInitiale: 'د',
        formeMediane: 'ـد',
        formeFinale: 'ـد',
      },
      {
        nameFr: 'Dhāl',
        nameAr: 'ذال',
        letterFr: 'Dh',
        letterAr: 'ذ',
        formeInitiale: 'ذ',
        formeMediane: 'ـذ',
        formeFinale: 'ـذ',
      },
      {
        nameFr: 'Rā',
        nameAr: 'راء',
        letterFr: 'R',
        letterAr: 'ر',
        formeInitiale: 'ر',
        formeMediane: 'ـر',
        formeFinale: 'ـر',
      },
      {
        nameFr: 'Zāy',
        nameAr: 'زاي',
        letterFr: 'Z',
        letterAr: 'ز',
        formeInitiale: 'ز',
        formeMediane: 'ـز',
        formeFinale: 'ـز',
      },
      {
        nameFr: 'Sīn',
        nameAr: 'سين',
        letterFr: 'S',
        letterAr: 'س',
        formeInitiale: 'سـ',
        formeMediane: 'ـسـ',
        formeFinale: 'ـس',
      },
      {
        nameFr: 'Shīn',
        nameAr: 'شين',
        letterFr: 'Sh',
        letterAr: 'ش',
        formeInitiale: 'شـ',
        formeMediane: 'ـشـ',
        formeFinale: 'ـش',
      },
      {
        nameFr: 'Ṣād',
        nameAr: 'صاد',
        letterFr: 'Ṣ',
        letterAr: 'ص',
        formeInitiale: 'صـ',
        formeMediane: 'ـصـ',
        formeFinale: 'ـص',
      },
      {
        nameFr: 'Ḍād',
        nameAr: 'ضاد',
        letterFr: 'Ḍ',
        letterAr: 'ض',
        formeInitiale: 'ضـ',
        formeMediane: 'ـضـ',
        formeFinale: 'ـض',
      },
      {
        nameFr: 'Ṭā',
        nameAr: 'طاء',
        letterFr: 'Ṭ',
        letterAr: 'ط',
        formeInitiale: 'طـ',
        formeMediane: 'ـطـ',
        formeFinale: 'ـط',
      },
      {
        nameFr: 'Ẓā',
        nameAr: 'ظاء',
        letterFr: 'Ẓ',
        letterAr: 'ظ',
        formeInitiale: 'ظـ',
        formeMediane: 'ـظـ',
        formeFinale: 'ـظ',
      },
      {
        nameFr: 'ʿAyn',
        nameAr: 'عين',
        letterFr: 'ʿ',
        letterAr: 'ع',
        formeInitiale: 'عـ',
        formeMediane: 'ـعـ',
        formeFinale: 'ـع',
      },
      {
        nameFr: 'Ghayn',
        nameAr: 'غين',
        letterFr: 'Gh',
        letterAr: 'غ',
        formeInitiale: 'غـ',
        formeMediane: 'ـغـ',
        formeFinale: 'ـغ',
      },
      {
        nameFr: 'Fā',
        nameAr: 'فاء',
        letterFr: 'F',
        letterAr: 'ف',
        formeInitiale: 'فـ',
        formeMediane: 'ـفـ',
        formeFinale: 'ـف',
      },
      {
        nameFr: 'Qāf',
        nameAr: 'قاف',
        letterFr: 'Q',
        letterAr: 'ق',
        formeInitiale: 'قـ',
        formeMediane: 'ـقـ',
        formeFinale: 'ـق',
      },
      {
        nameFr: 'Kāf',
        nameAr: 'كاف',
        letterFr: 'K',
        letterAr: 'ك',
        formeInitiale: 'كـ',
        formeMediane: 'ـكـ',
        formeFinale: 'ـك',
      },
      {
        nameFr: 'Lām',
        nameAr: 'لام',
        letterFr: 'L',
        letterAr: 'ل',
        formeInitiale: 'لـ',
        formeMediane: 'ـلـ',
        formeFinale: 'ـل',
      },
      {
        nameFr: 'Mīm',
        nameAr: 'ميم',
        letterFr: 'M',
        letterAr: 'م',
        formeInitiale: 'مـ',
        formeMediane: 'ـمـ',
        formeFinale: 'ـم',
      },
      {
        nameFr: 'Nūn',
        nameAr: 'نون',
        letterFr: 'N',
        letterAr: 'ن',
        formeInitiale: 'نـ',
        formeMediane: 'ـنـ',
        formeFinale: 'ـن',
      },
      {
        nameFr: 'Hā',
        nameAr: 'هاء',
        letterFr: 'H',
        letterAr: 'ه',
        formeInitiale: 'هـ',
        formeMediane: 'ـهـ',
        formeFinale: 'ـه',
      },
      {
        nameFr: 'Wāw',
        nameAr: 'واو',
        letterFr: 'W',
        letterAr: 'و',
        formeInitiale: 'و',
        formeMediane: 'ـو',
        formeFinale: 'ـو',
      },
      {
        nameFr: 'Yā',
        nameAr: 'ياء',
        letterFr: 'Y',
        letterAr: 'ي',
        formeInitiale: 'يـ',
        formeMediane: 'ـيـ',
        formeFinale: 'ـي',
      }
    ]
  }),

  mounted() { },

  computed: {
    ...mapGetters([]),
  },

  methods: {},
};
</script>