<template>
<v-btn  color="#0d3a64"
elevation="11"
  large
  
  >
  <v-icon style="padding-top:2px" left color="white">
    mdi-arrow-left-bold
      </v-icon>
  
  <span style="text-decoration: none; color:white; " class="text-h6 pl-3">{{text}}</span>
  
  
  
  </v-btn>    
</template>

<script>
export default{
    name:'Button',
    props:{
     text: String,
    }
}
</script>
<style>

</style>