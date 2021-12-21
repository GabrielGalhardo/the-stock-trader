<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
    <v-sheet :elevation="6" class="pa-2" color="primary">
      <v-icon class="white--text mr-3"> mdi-information-outline </v-icon>
      <span class="headline white--text font-weight-light">Você pode salvar & Carregar os dados</span>
    </v-sheet>
    <v-sheet :elevation="6" class="pa-2 mt-3 success darken-1" >
      <v-icon class="white--text mr-3"> mdi-information-outline </v-icon>
      <span class="headline white--text font-weight-light">Clique em 'Finalizar Dia' para iniciar um novo dia!</span>
    </v-sheet>
    <v-divider class="my-4"/>
    <p class="display-1 font-weight-light"><strong>Seu saldo: {{funds}}</strong></p>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
      ...mapGetters({
          funds: 'funds'
      })
  }
};
</script>

