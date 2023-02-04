<template>
    <v-row>
        <v-col cols="12"  :key="sound.id" v-for="sound in sounds">
           <Sound :sound="sound" />
    </v-col>

    </v-row>
</template>
<script>
import Sound from './Sound.vue';
export default{
    name:'Sounds',
    components:{
        Sound,

    },
    props:{
        sounds:Array,
    }
}

</script>