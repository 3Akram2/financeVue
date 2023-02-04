<template>
  
  <div v-animate-onscroll="'animated swing'"    >
    
    
    <v-card 
    class="mx auto btt"
    max-width="100%"
    height="100%"
    
  >
    <v-card-text>
      <div style="">
        <div class="text-overline mb-1">
          <v-icon style="color:black; font-size:30px" >{{ cardData.icon }}</v-icon>
          
        </div>
        
        
        <div  style="color:black" class ="text-h5 mb-1">
          {{cardData.head}}
          
        </div>
        <div  class="text-h5 mb-1" >
          
  <p  style="color:black; font-size:20px"> {{cardData.body1  }}</p>
          <p  style="color:black; font-size:20px"> {{cardData.body2 }}</p>
          <p  style="color:black;  font-size:20px"> {{cardData.body3 }}</p>
          <p  style="color:black;  font-size:20px"> {{cardData.body4 }}</p>
          <p  style="color:black;  font-size:20px"> {{cardData.body5 }}</p>
          <p  style="color:black;  font-size:20px"> {{cardData.body6 }}</p>
          <p  style="color:black;  font-size:20px"> {{cardData.body7 }}</p> 
 
          
            
          
        
      </div>
      
        
      <div  class="text-center" >
      <Cardbtn  text="استكشف الان"/>
      
    </div>
      </div>

      
    </v-card-text>

    
      
     
    
  </v-card>
  
</div>

</template>  
<script>
import Cardbtn from './Cardbtn.vue';

export default{
  
  props:{
    cardData:Object
  },
  components:{
    Cardbtn
  },
  data(){
    return{
      

    }
  }
}

// main app

</script>
<style scoped >
.box {
  transition: 1.5s all cubic-bezier(0.39, 0.575, 0.565, 1);
}
.btt{
  border-top:2px solid
}
  
</style>