<template>
    <div>
        <v-card class="card">
            <v-row >
                <v-col cols="12" sm="4">
                  
                    <v-img data-aos="fade-right" class="im" src= "https://www.shutterstock.com/image-photo/business-man-hand-holding-on-600w-646623835.jpg"></v-img>
                
                </v-col>
               
                <v-col cols="12" sm="8"> 
                   
                 <Header2 class="pa-6 "  title1="بناء خطة مالية" text1 = "لى اين تريد الذهاب ؟

نحن لا نبدأ بالتقارير و البيانات . نبدأ معك محادثات ثقافية لفهم قيمتك و رؤيتك

2كيف يمكنك الوصول الى هناك ؟

يكشف تحليل الخبراء عما تحتاجه للبدء و التوقف عن القيام به للتغلب على مشكلات و تحقيق اهداف جديده لتعلم كيفيه تحديد المصدر و حل الاعراض لضعف الاداء
3م يلزم لتحسين الاداء ؟
يتحد تركيزنا على العلاقات مع نهجنا المبتكر لتجاوز حل المشكلات و تقديم نتائج مستدامة و قابلة للتكرار"/>

                 <div style="text-align:center" >
                  
                 <Button  class="btn2" text=" شاهد اكثر"  />
                 </div>
                 
                </v-col>
            
            </v-row>
          </v-card>
        
    
    <br>
    
    <br>
  </div>
</template>
<script>
import gsap from 'gsap'
import Header2 from './Header2.vue'
import Button from './Button'
export default {
    
    name:'Table2',
    components:{
        Header2,
        Button,
    },
    data(){
        return{
            //
        }
    },
    setup(){
    const beforeEnter=(el) => {
      el.style.transform = 'translateX(+200px)'
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
    
     
      
    
    const beforeEnterImage=(el) => {
      el.style.transform = 'translateX(-200px)'
      el.style.opacity = 0
    }
    
const ImageEnter=(el) => {
  gsap.to(el,{
    duration:5,   
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
  background-color:#f5f5f5;
}
.btn2{
    text-align: center;
    width: 150px;
    margin-top: 130px;
    
}
text{
    font-size: 20px;
}
.im{
    width: 100%;
    height: 100%;
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
