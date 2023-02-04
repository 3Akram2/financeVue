<template>
  <div class="my-1">
           <button
            
           elevation="2"
         
           class=" rainbow rainbow-1">
             <h3 style="color:white">{{text}}</h3>
  </button>
         </div>  
   </template>
   <script>
   export default{
       name:'Cardbtn',
       props:{
           text:String
       }
   }
</script>
<style scoped>
.btn{
 
padding: 10px;
background-color: #F2780C;

text-align: center;










text-decoration: none;
cursor: pointer;
}
.rainbow{
  background-color:  #F2780C;
  border-radius: 4px;  
  color: #fff;
  cursor: pointer;
  padding: 8px 16px;
  
}
.rainbow-1:hover{
   background-image: linear-gradient(90deg, #0d3a64 60%,  #00C0FF 100%);
   animation:slidebg 2s linear infinite;
}



</style>