<template>
  <v-footer padless>
    <v-col class="text-center" cols="12">
      {{ new Date().getFullYear() }} —
      <strong>{{ appVersion }}</strong>
    </v-col>
  </v-footer>
</template>
<script>
import { version } from "../../package";
export default {
  name: "Footer",
  data: () => ({
    appVersion: version,
  }),
};
</script>
