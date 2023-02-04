<template>
    

<header data-aos="fade-left" >
    <transition 
          appear 
          name="fade"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          >
    <h1 class="txt1" transition="slide-x-reverse-transition">{{title1}}</h1>
</transition>
<transition 
          appear 
          name="fade"
         
          @enter="enter"
          @after-enter="aEnter"
          >
    <h5 class="txt3" transition="slide-x-reverse-transition">{{text1}}</h5>
</transition>
     
</header>
    
</template>

<script>
export default {
    name:'Header2',
    props:{
        title1 : String,
        
        text1 : String,
    },
    setup(){
    const beforeEnter=(el) => {
        
    }
    const enter=(el) => {
      el.style.color="black"
    }
    const afterEnter=(el) => {
     
      el.style.color="#F2780C"
    }
    const aEnter=(el) => {
     el.style.color="#144673"
      
    }
    
   


    return{beforeEnter,enter,afterEnter,aEnter,}
  },
}

</script>
<style >
.txt1{
    white-space: nowrap;
    
    text-align: center;
    color: orange;
    font-size: 25px;
    font-weight: bolder;
    
    
    
}
.txt3{
    color:#144673;
    text-align: right;
    font-size: 17px;
    
}

</style>