<template>
    <div >
      <v-card class="card">
    <v-row mb-6>
      
        <v-col cols="12" sm="5">
          <v-img data-aos="fade-right"  class ="image" :src="im"/>
      </v-col>

      <v-col cols="12" sm="7">
        
        <div class="tx"  data-aos="fade-left" >
          <h1  class="headers">{{ headTitle }}</h1>
          
          <h5  class="mid-title"> {{ sTitle }}</h5>
          <ul >
            <li  :key="point" v-for="point in points">
              <h3  class="headers">- {{ point }}</h3>
            </li>
          </ul>
          

          <RoundedButton text="جدول مواعيدك معنا الان" color="#fff"  />
        </div>
  
      </v-col>
    </v-row>
  </v-card>
  <br>
    <v-row mt-8>
   <v-col>
  <h2 class="headers tx">قصص نجاح العملاء  </h2>
   </v-col>
    </v-row>
    <br/>
    
    <br/>
    <v-row >
      <v-col sm="2" cols="0"></v-col>
      <v-col sm="8" cols="12">
  <SwiperArrows :SwiperItems="partners" />
   </v-col>
   <v-col sm="2" cols="0"></v-col>
    </v-row>
    
  </div>
  
  
  
</template>
<script>
import gsap from 'gsap'
import RoundedButton from './RoundedButton.vue';
import SwiperArrows from './swipers/SwiperArrows.vue';
export default{
  components:{
    RoundedButton,
    SwiperArrows,

    
  },
  props:{
    partners : Array,
    headTitle: String,
    sTitle: String,
    points: Array,
    im:String
  },
  data(){
    return{
      
    }
  },
  setup(){
    const beforeEnter=(el) => {
      el.style.transform = 'translateX(+200px)'
      el.style.opacity = 0
      
    }
    const enter=(el) => {
      gsap.to(el,{
    duration:6,   
    x:0,
    opacity:1,
    ease:'bounce.out'
   
  })
    }
    const afterEnter=(el) => {
     
      
    }
    
     
      
    
    const beforeEnterImage=(el) => {
      el.style.transform = 'translateX(-200px)'
      el.style.opacity = 0
    }
    
const ImageEnter=(el) => {
  gsap.to(el,{
    duration:6,   
    x:0,
    opacity:1,
    ease:'bounce.out'
   
  })
}

    return{beforeEnter,enter,afterEnter,beforeEnterImage,ImageEnter}
  },
  

}
</script>
<style scoped>
.card{
  background-color: #f5f5f5;
  border: none;
}

/* enter clases */
/*.fade-enter-from{ 
  opacity: 0;
 
}
.fade-enter-to{
  opacity: 1;
  transform: translateX(0);
} */
.fade-enter-active{
 animation: slidein 0.5s ease ;
}
.image-container{
  width: 100%;
  max-height: 100%;
}
.image{
  width: 100%;
  height: 300px;
}
.tx{
  text-align: center;
  
  
}
.headers{
  color: #F2780C;
  

  
}
h1{
  font-size: 250%;
  font-weight: bolder;
}
.container{
  background-color: #F0F0F0;
}
.mid-title{
  font-size: 20px;
  
  color:#144673
}
li{
  text-align: left;
  list-style: none;
}
/* @keyframes slidein{
 
  0% { transform: translateX(-200px); opacity: 0;}  
  50% {  transform: translateX(0px);opacity: 1; }
  60%{ transform: translateY(8px);}
  70%{ transform: translateY(-8px);}
  80%{ transform: translateY(4px);}
  90%{ transform: translateY(-4px);}
  1000%{ transform: translateY(0px);}
} */

</style>