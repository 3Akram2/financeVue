<template>
    <div>
<header data-aos="fade-right" class="pa-5" >
    
    <h1 class="test1" >{{title}}</h1>
    <h2 class="test">
        
            <div class="text-right" :key="text.id " v-for="text in texts"> 
            <p > {{ text.id }}{{text.title }}  </p>
            <p >  {{ text.body }}</p>
        </div>
        
    </h2>
    
     
</header>

</div>
</template>

<script>
export default {
    name:'Header',
    props:{
        title : String,
        texts : Array,
    }
}

</script>
<style  >

.test{
    
    color: #144673;
    font-size: 20px;
    
   
}
.test1{
color:#F2780C;
text-align: center;
margin-bottom: 5px;
font-weight: bolder;
font-size: 35px;
}
</style>