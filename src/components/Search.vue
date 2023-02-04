<template>
    <div>
 <v-container fluid>
    <v-row>
        <v-col cols="2"></v-col>
        <v-col cols="8">
            
        <input :hidden="true" type="text" placeholder="search" v-model="keyword" style="width:90%;"  />
       
            </v-col>
 <v-col cols="2"></v-col>
</v-row>
</v-container>
    <v-container>
        <v-row>
            <v-col cols="1" ></v-col>
            <v-col>
                <v-container>

                    <v-row>
 
                      <v-col cols="12" sm="4" :key="search" v-for="search in filterdArticles">
                        <SearchCard :word="keyword" :search="search" />   
                      </v-col>
 
                    </v-row>
                </v-container>
                 
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
    </v-container>
</div>
</template>

<script>
import SearchCard from './SearchCard.vue'

export default{
    data(){
        return{
           
            
        backs:[]
        }
    },
    components:{
        SearchCard,

    },
    props:{
        searchs :Array,
        word:String
 
    },
    computed:{
        
        keyword:{
            get()
        
            {
                return this.word;
            },
            set(word){
                this.$emit("input",word);
            }
            }
            
            ,
        filterdArticles(){
            
            
          
            console.log("====> search word",this.word)
            
            return this.searchs.filter((search => search.body.includes(this.keyword)||search.title.includes(this.keyword)))
            
        }
       
    },
    methods:{
        
        

        
    },
    

}
</script>
<style scoped>
.toast-wrapper {
     
      width: 100%;
      top: 100px;
      z-index: 2500;
    }
    .toast {
      padding: 5px;
      color: white;
      background: gainsboro;
      border-radius: 10px;
      box-shadow: 1px 3px 5px rgba(0,0,0,0.2);
      max-width: 400px;
      margin: 0 auto;
      height: 40px;
    }
</style>