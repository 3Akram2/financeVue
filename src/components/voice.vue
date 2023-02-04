<template>
  <div>
  <h2 style="color:#144673">استمع الي محادثاتنا</h2>
  <br>
  <v-card 
  class="card pa-6"
 
  width="100%"
  @click="playMusic"
  >
 
  <div  class="  wave" id="hello" ref="waveDom"></div>
</v-card>
<br/>

<ButtonTwo text="استمع للمزيد "  color="#0d3a64"  link="/sounds" />
</div>
</template>

<script>
import { ref, onMounted, nextTick } from "vue";
import ButtonTwo from "./ButtonTwo.vue";
import WaveSurfer from "wavesurfer.js";
import RegionsPlugin from "wavesurfer.js/dist/plugin/wavesurfer.regions.min.js";
import CursorPlugin from "wavesurfer.js/src/plugin/cursor";

export default {
  components:{ButtonTwo},
  setup() {
    const waveDom = ref();
    const wavesurfer = ref();
    const playing = ref(false);
    const videoDom = ref();
    const regions = RegionsPlugin.create({
      
      
      dragSelection: {
        slop: 5,
      },
    });

    onMounted(async () => {
      await nextTick();
      wavesurfer.value = WaveSurfer.create({
        barWidth: 5,
        cursorWidth: 1,
        container: waveDom.value,
        backend: "MediaElement",
        height: 60,
        progressColor: "#2D5BFF",
        responsive: true,
        waveColor: "#EFEFEF",
        plugins: [
         
          CursorPlugin.create({
            showTime: true ,
            opacity: 3,
            customShowTimeStyle: {
              "background-color": "#000",
              color: "#fff",
              
              
            },
          }),
        ],
      });
       wavesurfer.value.load(
         "https://reelcrafter-east.s3.amazonaws.com/aux/test.m4a"
      );
      /* wavesurfer.value.load(videoDom.value); */
    });
    return { waveDom, wavesurfer, playing, videoDom };
  },
  methods: {
    playMusic() {
      if (this.playing) {
        this.wavesurfer.pause();
      } else {
        this.wavesurfer.play();
      }
      this.playing = !this.playing;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card{
  border-radius: 20px;
}
</style>