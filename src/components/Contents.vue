<template>
   
   <v-container >
    
    <v-row  >
        <v-col cols="12"  :key="task.id" v-for="task in tasks">

            
    <Content  :task="task" />
</v-col>
    </v-row>
    
    
    

    </v-container>


</template>
<script>
import Content from './Content.vue'
export default{
    name:'Contents',
    components:{
     Content,
    },
    
    props:{
    tasks:Array,
    },
    
}
</script>