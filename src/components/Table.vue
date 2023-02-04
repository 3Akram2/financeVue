<template>
        <div  >    
        <v-container fluid >
          <v-card class="card">
            
            <v-row>
                
                <v-col sm="8" cols="12">
                    
                        
                    
                    <Header  class="tit1" :title="htitle" :texts= "texts"/>
                
                </v-col>
                <v-col sm="4" cols="12">
        
                    <v-img data-aos="fade-left"  class="im" :src= "himage"></v-img>
                
                    
                </v-col>
            </v-row>
          </v-card>
        </v-container>


    <br>
    <v-divider class="hr1"></v-divider>
  </div>
</template>
<script>
import gsap from 'gsap'
import Header from './Header.vue'

export default {
name: 'Table',

components:{
    Header,

},
props:{
    himage:String,
    htitle:String,
    texts:Array,
},
data(){
    return{
        //
    }
},
setup(){
    const beforeEnter=(el) => {
        el.style.transform = 'translateX(-200px)'
      el.style.opacity = 0
      
    }
    const enter=(el) => {
        gsap.to(el,{
    duration:5,   
    x:0,
    opacity:1,
    ease:'bounce.out'
    })
    }
    const afterEnter=(el) => {
     
     
    }
    const aEnter=(el) => {
    
      
    }
    const bEnter=(el) => {
     
      
    }
    const beforeEnterImage=(el) => {
      el.style.transform = 'translateX(+200px)'
      el.style.opacity = 0
    }
    const afterEnterImage=(el) => {

      
}
const ImageEnter=(el) => {
  gsap.to(el,{
    duration:5,   
    x:0,
    opacity:1,
    ease:'bounce.out'
   
  })
}

    return{beforeEnter,enter,afterEnter,aEnter,afterEnterImage,beforeEnterImage,ImageEnter}
  },
}
</script>
<style scoped>
.card{
  background-color:#f5f5f5;
}
table{
   
    display: block;
    
}

   

.im{
    
   width: 100%;
    height: 350px;
    
}

hr {
    width:50%;
    margin:0 auto;
}
.test1{
   
   white-space: nowrap;
   margin-left: 200px;
   margin-bottom: 20px;
   
   color: orange;
  
   
   
}
.fade-enter-from{
   opacity: 0;
}
.fade-enter-to{
opacity: 1;
}
.fade-enter-active{
  transition: all 2s ease;
}
</style>