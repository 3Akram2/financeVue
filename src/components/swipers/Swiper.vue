<template>
  <div @mouseenter="stop" @mouseleave="resume" >
    <swiper  :options="swiperOption"  ref="mySwiper" style="position:relative;"  >
            <!-- slides -->
            <swiper-slide v-for="cover in covers" :key="cover.id" >
              <transition

    appear 
      name="fade"
      @enter="enter"
      @before-enter="beforeEnter"
    >
      <div class="abs" 
     
      
      >
  <ul>
    
  <li class="title">
    {{cover.headText}}
  </li>
  <li class="title">
    {{ cover.sub }}
  </li>
  
  
 <li class="body">
    {{cover.text}}
 </li>

</ul>

</div>
</transition>
             <img  :src="cover.src" style="width:100%; height:400px;" />
            </swiper-slide>

            <!-- Optional controls -->
            
            
          </swiper>
        </div>
  </template>
  
  <script>
  import gsap from 'gsap'
    import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
    import 'swiper/css/swiper.css'
    
  
    export default {
      name: 'swiper-example-default',
      title: 'Default',
      components: {
        Swiper,
        SwiperSlide
      },
      props:{
        covers:Array
      },
      mounted(){
        // this.swiper.slideTo(3, 1000, false);
      },
      setup(){

        const beforeEnter=(el) => {
      
  el.style.transform = 'translateY(-200px)'
  el.style.opacity = 0
}

const enter=(el) => {
gsap.to(el,{
duration:3,   
y:0,
opacity:1,
ease:'bounce.out'

})
}  
 return {
        beforeEnter,
        enter
      };
    },
    

      

      data(){
        return{
          swiperOption: {
            autoplay: {
             delay: 5000,
              disableOnInteraction: true,
                pauseOnMouseEnter: true,  
},
            initialSlide: 0,
            slidesPerView: 1,
            spaceBetween: 20,
             // centeredSlides: true,
           
            watchOverflow: true,
            // breakpoints: {
            //   1904: {
            //     slidesPerView: 1,
            //     spaceBetween: 20
            //   },
            //   1264: {
            //     slidesPerView: 1,
            //     spaceBetween: 20
            //   },
            //   960: {
            //     slidesPerView: 1,
            //     spaceBetween: 50
            //   },
            //   600: {
            //     slidesPerView: 1,
            //     spaceBetween: 150
            //   },
            //   400: {
            //     slidesPerView: 1,
            //     spaceBetween: 150
            //   },
            //   300: {
            //     slidesPerView: 1,
            //     spaceBetween: 150
            //   },
            //   200: {
            //     slidesPerView: 1,
            //     spaceBetween: 150
            //   }
            // },
            pagination: {
              el: ".swiper-pagination",
              clickable: true
            },
            navigation: {
              enabled: true,
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
    stop(){
   console.log("mouse on")
   this.$refs.mySwiper.$swiper.autoplay.stop();
    },
    resume(){
      console.log("mouse out")
      this.$refs.mySwiper.$swiper.autoplay.start();

    },
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
    .slide{
    position: relative;
  } 
    

img{
    width: 100%;
    height: 300px;
}

.abs{
  position: absolute;
width: 50%;
  color: #fff;
  left: 20%;
  top:30%;
}
li{
  list-style: none;
  
  
}
.title{
  font-size: 30px;
  font-weight: bolder;
}
.body{
  font-size: 35px;
  font-weight: bolder;
 
}

  </style>