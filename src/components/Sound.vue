<template>
  <div class="vl-parent">
   
  <v-container>
      
  
  <br>
  
  <v-card  style="border-radius: 15px; padding: 10px ;border:1px solid">
  <v-row >
      
   
      
  <v-col class="text-right pt-2"  cols="6">
    <transition 
    appear 
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter"
    >
    
      
  <h2 style="color:darkblue">{{sound.first}}</h2>
  </transition>
  <transition 
      appear 
      name="fade"
      @before-enter="beforeEnter"
      @enter="enter" 
      >
  <h3>{{sound.second}}</h3>
  </transition>
  

  
  </v-col>
  <v-col cols="6">
    <transition 
      appear 
      name="fade"
      @before-enter="beforeEnterImage"
      @enter="ImageEnter"
           >
      <v-card  width="100%" height="80%" style="padding: 15px;margin-top: 10px  ; border:1px solid ">
      
      <v-row >
        
          <v-col sm="8"  class="pt-6" cols="12">
              <div id="hello" ref="waveDom"  > 
              </div>
              </v-col>
                  <v-col sm="4" cols="12" class="pt-9">
              <audio ref="videoDom" :src=sound.file></audio>
          <button style="font-size:15px" @click="Slow"> <v-icon style="color:#0d3a64" >mdi-skip-backward</v-icon></button>
          <button style="font-size:15px" @click="playMusic"> <v-icon style="color:#0d3a64"  >mdi-play-circle-outline</v-icon></button>
          <button style="font-size:15px" @click="pauseMusic"> <v-icon style="color:#0d3a64" >mdi-pause-circle-outline</v-icon></button>
          <button style="font-size:15px" @click="killMusic"> <v-icon style="color:#0d3a64" >mdi-stop-circle-outline</v-icon></button>
          <button style="font-size:15px" @click="Skip"> <v-icon style="color:#0d3a64"  >mdi-debug-step-over</v-icon></button>
          <button style="font-size:15px" @click="Speed"> <v-icon style="color:#0d3a64"  >mdi-skip-forward</v-icon></button>
          
                  
      </v-col>
              
              
      
             
                  
              
  
  
  
  <v-col class="" cols="4" >
          
      </v-col>
  
  </v-row>
  <v-row>
    
  </v-row>
      
  
  </v-card>
  </transition>
  </v-col>
  
  
  
  </v-row>   
  </v-card> 
  </v-container>
  </div>
  </template>
  
  
  <script>
  import gsap from 'gsap'
  import { ref, onMounted, nextTick } from "vue";
  import WaveSurfer from "wavesurfer.js";
  import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min.js";
  import CursorPlugin from "wavesurfer.js/src/plugin/cursor";
  
  export default {
    components: {
      
        },
      props:{
      
      sound:Object,
      
      
    },
    data () {
      return {
        
              }
              
              },
    
    
      setup() {
        const beforeEnter=(el) => {
          el.style.transform = 'translateX(-200px)'
  el.style.opacity = 0
  
  }
      const enter=(el) => {
        gsap.to(el,{
duration:3,   
x:0,
opacity:1,
ease:'bounce.out'

})
      
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
    
      // wave data 
      const waveDom = ref();
      const wavesurfer = ref();
      const playing = ref(false);
      const videoDom = ref();
      const regions = RegionsPlugin.create({
        regionsMinLength: 0.1,
        regions: [
          {
            start: 0.1,
            end: 0.2,
            loop: false,
            color: "hsla(400, 100%, 30%, 0.5)",
          },
          {
            start: 0.5,
            end: 0.7,
            loop: false,
            color: "hsla(200, 50%, 70%, 0.4)",
            minLength: 1,
            maxLength: 5,
          },
        ],
        dragSelection: {
          slop: 5,
        },
        
      });
  
      onMounted(async () => {
       
        await nextTick();
        wavesurfer.value = WaveSurfer.create({
          
          barWidth: 5,
          cursorWidth: 1,
          container: waveDom.value ,
          
          backend: "MediaElement",
          height:50,
          progressColor: "#2D5BFF",
          responsive: true,
          waveColor: "#EFEFEF",
          plugins: [
           
            CursorPlugin.create({
              showTime: true,
              opacity: 3,
              customShowTimeStyle: {
                "background-color": "#000",
                color: "#fff",
                padding: "2px",
                "font-size": "10px",
              },
            }),
         
          ],
          
        });
        
        
        wavesurfer.value.load(videoDom.value); 
        
          
       
      });
      return { waveDom, wavesurfer, playing, videoDom,beforeEnter,enter,beforeEnterImage,ImageEnter };
    },
    
    methods: {
      
      playMusic() {
       
          this.wavesurfer.play();
          
          
      },
      pauseMusic() {
        
          this.wavesurfer.pause();
      },
      killMusic(){
          this.wavesurfer.stop();
              },
      Speed(){
          this.wavesurfer.setPlaybackRate(1.7)
      },
      Slow(){
          this.wavesurfer.setPlaybackRate(1)
      },
      Skip(){
          this.wavesurfer.skip(5)
      },
      doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                }, 1000)
            },
            onCancel() {
                console.log('User cancelled the loader.')
            }
     
  
    },
    beforeMount(){
          this.doAjax()
 },
  
    
  };
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
  
  </style>