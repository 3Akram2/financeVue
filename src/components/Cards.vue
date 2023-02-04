<template>
  <v-container>
    <v-row mb-6 justify="center">
      <v-col cols="1"></v-col>
      <v-col cols="10">
        <v-row>
      <v-col  sm="4" cols="12" v-for="cardData in cardsData" :key="cardData.id">
    <Card :cardData="cardData" />
  </v-col>
</v-row>
      </v-col>
    
<v-col cols="1"></v-col>
</v-row>
  </v-container>
</template>

<script>
import Card from './Card.vue';
export default{
  components:{
    Card,
  },
  props:{
    cardsData:Array,
  },
  data(){
    return{}
  }
}
</script>