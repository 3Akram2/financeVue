<template>
   
  <router-link style="color:#fff;text-decoration: none;"  :to="link">  <v-btn 
    
    class="btn"
   
  :color='color'
  elevation="11"
  large
  
  
  
> 



<span class="txt-color text-h6 pr-3">{{text}}  </span>
<v-icon style="padding-top:2px" right color="white">
    mdi-arrow-right-bold
</v-icon>

  

</v-btn></router-link>
</template>
<script>
export default{
    name:'ButtonTwo',
    data(){
        return{ 
        };
    
    },
    props:{
        text:String,
        color:String,
        link:String,
        iconp:String,
       
        
    },
   
    }


</script>
<style scoped>
.btn{
    margin: 5px;
}
.txt-color{
    color: #fff;
}
</style>
