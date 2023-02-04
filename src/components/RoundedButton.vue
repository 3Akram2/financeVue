<template>
    <v-btn 
    
    class="btn"
   rounded
  :color='color'
  elevation="11"
  large
  outlined
  
  
> <span class="txt-color">{{text}}</span></v-btn>
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
       
        
    },
   
    }


</script>
<style scoped>
.btn{
    margin: 1.5rem;
    margin-bottom: 0;
    border:2px solid #144673
   
}
.txt-color{
    color: #144673;
;
}
</style>
