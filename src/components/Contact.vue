<template>
  <div >
  <v-card class="card" >
<v-row>
  
    <v-col  cols="12" sm="6" class="pa-6">
     
    <div class="text-center">
      <transition 
      appear 
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      >
      <h1 class="sixteen ">{{num}}</h1>
    </transition>
      <transition 
      appear 
      name="fade"
     
      @enter="enter"
      @after-enter="aEnter"
      >
      <p class="mid-title bo">{{ subtitle }}</p>
    </transition>
      <transition 
      appear 
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
      @after-enter="afterEnter"
      >
      <h4 class="headers">{{ title }}</h4></transition>
      <transition 
      visable 
      name="fade"
     
      @enter="enter"
      @after-enter="aEnter"
      >
      <p class="text-right bo" >{{ body }}</p>
    </transition>
    </div>
     
  </v-col>
  <v-col cols="12" sm="6">
    <transition 
     
     v-motion 
    :initial="{
      opacity:0,x: +200,
    }"
    :visible="{
      opacity:1,x: 0

}"
      appear 
      @before-enter="beforeEnterImage"
      @enter="ImageEnter"
     
      >
      <img class="image" :src="ima"/>
  </transition>
  </v-col>
</v-row>
</v-card>
<br>

<br>
<v-divider class="test text-center"></v-divider>
<v-row mb-6 >
  
<v-col >

<h2 class="headers mt-2" >  تواصل معنا </h2>

</v-col>

</v-row>
<v-row>
  <v-col sm="2" cols="0"></v-col>
  <v-col sm="8" cols="12">
    <SwiperArrows :SwiperItems="socials" />
  </v-col>
  <v-col sm="2" cols="0"></v-col>
</v-row>

<v-row >
<v-col>
<h2 class="headers" style="margin-bottom: 0.5rem">  ضع صورتك المالية  </h2>
<h2 class="headers " style=" ;font-size: 16px;">  في سياقها الصحيح  </h2>
</v-col>
</v-row>


<br>
<v-divider class="test"></v-divider>




</div>
</template>
<script>
import gsap from 'gsap'

import SwiperArrows from './swipers/SwiperArrows.vue';
export default{

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

const beforeEnterImage=(el) => {
  el.style.transform = 'translateX(+200px)'
  el.style.opacity = 0
}

const ImageEnter=(el) => {
gsap.to(el,{
duration:3,   
x:0,
opacity:1,
ease:'bounce.out'

})
}

return{beforeEnter,enter,afterEnter,aEnter,beforeEnterImage,ImageEnter}
},
data(){
return{
//
}
},
components:{
  SwiperArrows

},
props:{

title:String,
num:String,
subtitle:String,
body:String,
ima:String,
socials:Array,
}


}
</script>
<style scoped>
.test{

width: 100%;
   
}
.card{
background-color:#f5f5f5;

}
.image-container{
width: 100%;

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
text-align: center;
line-height: normal;



}
.sixteen
{
color: #F2780C;
text-align: center;
font-weight: bolder;
font-size: 70px;
line-height: normal;
}
h1{
font-size: 450%;
font-weight: bolder;
line-height: normal;
}
.container{
background-color: #F0F0F0;
}
.mid-title{

line-height: normal;
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
.bo{
color:#144673;
margin-bottom: 0.5rem;
}
</style>