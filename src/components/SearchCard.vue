<template>
     
           
 <v-card
   class=""
height="100%"
 >
    <v-img
     class="align-end text-white "
     style="margin:5px;"
     height="220"
     :src="search.image"
    
    >
    
    </v-img>
    <v-card-title style="">
      <div v-html="highlightTitle()"> </div></v-card-title>
   
    <v-card-text>
    <div v-html="highlightBody()" ></div>
    
    </v-card-text>
                <v-card-actions>
      
     <router-link style="text-decoration: none;" to="/article"><v-btn color="#0d3a64"><span style="color:white;">
        ...قراءة المزيد    
      </span></v-btn>
      </router-link>
    </v-card-actions>
 </v-card>
              
                                              
</template>
<script>
export default{
    data(){
   return{

   }
    },
    props:{
        search : Object,
        word:String,
    },
    methods:{
      highlightTitle(){
        console.log(this.word)
        return this.search.title.replace(new RegExp(this.word),
          '<span class="highlighted">'+this.word+' </span>'
        );
        
        
      },
      highlightBody(){
        console.log(this.word)
        return this.search.body.replace(new RegExp(this.word),
          '<span class="highlighted">'+this.word+' </span>'
        );
        
        
      }
    }
  
}
</script>
<style>
.highlighted{
  color: red;
}
</style>

