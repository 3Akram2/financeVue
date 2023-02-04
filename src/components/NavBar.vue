<template >
   

    <v-row class="nav-bar hidden-sm-and-down " justify="center">
       
       
      
        <v-col style="max-width:11.111111111%" cols="1" :key="item.id" v-for="item in items " >
        <router-link :to="item.link" style=" white-space:nowrap;">{{item.name}}</router-link>
  
        </v-col>
       
        
        
    </v-row>


</template>
<script>
export default{
   props:{
items:Array
   },
    
    data(){
        return{
          

        }
    },
    watch: {
      group () {
        this.drawer = false
      },
      
},

}
</script>
<style scoped>

.nav-bar{
    width:100%;
    font-size:18px;
    text-align: center;
    
    
    
    
}
.nav-bar ul{
    list-style-type: none;
    margin: 0;
    display: flex;
    
    

    
    
}

.nav-bar a{
    color: #0d3a64;
    float: right;
    padding: 0 0 0 0;
    text-decoration: none;
    width:100%;
    text-align: center;
    font-size: 70%;
    font-weight: bold;


}
</style>

<!-- <div :key="item.id" v-for="item in items " class="navItem"> -->
    <!-- <div class="nav-bar">
        <ul>
            <div :key="item.id" v-for="item in items " >
            <li><a href="#">{{item.name}} </a> </li>
            </div>
        </ul>
    
       </div> -->



       <!-- :key="item.id" v-for="item in items "><a href="">{{item.name}}</a> -->