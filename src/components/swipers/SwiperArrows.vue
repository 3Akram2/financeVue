<template>
  
    
    <div class="social-media-slider">
      <v-row>
        <v-col cols="1" >
          <div  @click="prev()">
    <v-icon class="arrowl">mdi-triangle</v-icon>
      </div>
        </v-col>
        <v-col cols="10"><swiper  :options="swiperOption"  ref="mySwiper"  style="position:relative;" 
     >
      
      <swiper-slide style="position:relative;"  v-for="SwiperItem in SwiperItems" :key="SwiperItem.id" > 
        <v-card class="text-center my-2 d-flex flex-column elevation-0" max-height="auto" justify="end" align="end" >
        <a :href="SwiperItem.src">
       <img :src="SwiperItem.src" alt=".." class="">
        </a>
      </v-card>
      </swiper-slide>
     
      <!-- <div class="swiper-button-prev" slot="button-prev"></div>
      <button class="swiper-button-next" slot="button-next" @click="sWiper.slideNext()"></button> -->
      
      
      
    </swiper>
  </v-col>
        <v-col cols="1" >
          <div class="" slot="button-next" @click="next()">
        <v-icon class="arrowr">mdi-triangle</v-icon>
      </div>
        </v-col>


      </v-row>
      
      
    
      
  </div>
 

  </template>
  <script>
   
   
   import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
  
    // Import Swiper styles
    export default {
      components: {
        Swiper,
        SwiperSlide,
      },
      props:{
        SwiperItems:Array,
      },
      setup() {
       
        return {
            
        };
    

      },
      data(){
      return{
        swiperOption: {
            autoplay: {
delay: 2500,
disableOnInteraction: false,
    pauseOnMouseEnter: true,
},
            initialSlide: 0,
            slidesPerView: 7,
            spaceBetween: 20,
             // centeredSlides: true,
            freeMode: true,
            watchOverflow: true,
            breakpoints: {
              1904: {
                slidesPerView: 7,
                spaceBetween: 20
              },
              1264: {
                slidesPerView: 7,
                spaceBetween: 20
              },
              960: {
                slidesPerView: 7,
                spaceBetween: 10
              },
              600: {
                slidesPerView: 3,
                spaceBetween: 10
              },
              400: {
                slidesPerView: 4,
                spaceBetween: 10
              },
              300: {
                slidesPerView: 3,
                spaceBetween: 150
              },
              200: {
                slidesPerView: 2,
                spaceBetween: 150
              }
            },
            navigation: {
              enabled: true,
              nextEl: '.swiper-button-prev', prevEl: '.swiper-button-next'
            }
          },
        }
     
        },
        watch: {
   show: {
       handler: function(val, oldVal) {
           this.reRender(); // call it in the context of your component object
       },
       deep: true
    }
  },
  computed:{
    swiper() {

return this.$refs.mySwiper.$swiper;
}
  },
  methods:{
    reRender(){
    this.show = false
    this.$nextTick(() => {
      //re-render start
      this.show = true
      this.swiper.destroy();
      this.$nextTick(() => {
          //re-render end
          this.swiper.update();
      })
    })
  },
  prev() {
          			this.$refs.mySwiper.$swiper.slidePrev();
          		},
          		next() {
          			this.$refs.mySwiper.$swiper.slideNext();
          		},
  }

      
    
    }
  </script>
   <style scoped>   
   .social-media-slider {
     width: 100%;
     height: 100%;
     margin: 0 auto;
     position: relative;

   }
 
   .social-media-slider img {
     width: 65px;
     height: 70px;
   }
 



.arrowl {
  
  -webkit-transform: rotate(-90deg);
  -moz-transform: rotate(-90deg);
  -ms-transform: rotate(-90deg);
  -o-transform: rotate(-90deg);
  transform: rotate(-90deg);
  display: inline-block;
  color: #16437E;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 20px;
  cursor: pointer;
  
 
}
.arrowr {
  
  -webkit-transform: rotate(90deg);
  -moz-transform: rotate(90deg);
  -ms-transform: rotate(90deg);
  -o-transform: rotate(90deg);
  transform: rotate(90deg);
  display: inline-block;
  color: #16437E;
  font-size: 20px;
  position: absolute;
  top: 50%;
  right: 20px;
  cursor: pointer;
}
</style>
