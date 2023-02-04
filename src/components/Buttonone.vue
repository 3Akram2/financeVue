<template>
   
    <router-link  style="color:#fff ;text-decoration: none;" :to="link">  <v-btn 
      
      class="btn"
     :rounded="false"
    :color='color'
    elevation="11"
    large
    
    
    
  > 
  
  
  
  <span class="txt-color text-h6 pr-3">{{text}}  </span>
  
  
    
  
  </v-btn></router-link>
  </template>
  <script>
  export default{
      name:'Buttonone',
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
  