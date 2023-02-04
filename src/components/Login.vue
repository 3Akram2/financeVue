<template>
<v-container>
<v-row >
    <v-col sm="4" cols="2"></v-col>
    <v-col sm="4" cols="8" class="text-center"> 
   <Form />
    </v-col>
    <v-col sm="4" cols="2"></v-col>
</v-row>
</v-container>

</template>
<script>
import Form from './Form.vue';
 export default{
  components:{
    Form 
  },
data(){
    return{


    }
}
}
</script>