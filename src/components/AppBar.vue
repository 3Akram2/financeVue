<template >
  <div>
<v-system-bar  height="60" color="rgb(16, 61, 103)" app >
       <div class="header">
    
        <router-link to="/"><button @click="isSearch=true">
          <img class="mr-12" :src='logo'  /></button></router-link>
     <ul>
      <li style="font-weight:bolder; font-size:16px; line-height: normal;">{{ name }}</li>
      <li style="font-weight:bolder; font-size:12; line-height: normal; ">{{ sec }}</li>
      <li style="font-weight:bolder; font-size:16px; line-height: normal;">{{ abr }} </li>
     </ul>
     <router-link to="/"><img class="ml-12" :src='logo'/></router-link>
     </div>
    
     
   
      
   
      
     </v-system-bar >

     <v-app-bar  height="38" color="#F8F8F8" app>

<div >
<router-link to="/login" ><v-btn elevation="0" color="#F8F8F8"  ><v-icon   style="color:#144673; " size="x-large">mdi-account-circle</v-icon><h4 class="Title"> &nbsp;  تسجيل الدخول  </h4></v-btn></router-link>
</div>
<v-spacer></v-spacer>

<NavBar :items="items" />
<v-spacer></v-spacer>
   
        <button style="border:0px" @click.stop="drawer = !drawer" class=" nav-bar hidden-md-and-up" ><v-icon color="#144673" style="font-size:30px;">mdi-menu</v-icon></button>
<button @click.stop="isSearch=!isSearch">   <v-icon color="#144673">mdi-magnify</v-icon></button>  
</v-app-bar >
     <v-card class="card hidden-md-and-up" style="z-index:20001;">
       
      <v-navigation-drawer
     
      
    app
         v-model="drawer"
         temporary
       >
       
       <v-list dense>
        <v-list-item 
        v-for="item in items "
        :key="item.id" 
        link
        >
        <v-list-item-content>
            <router-link :to="item.link"><v-list-item-title style="color:#144673;">{{ item.name }}</v-list-item-title></router-link>
          </v-list-item-content>

        </v-list-item>

       </v-list>
         
         
          
           
           
         
       </v-navigation-drawer>
     
     </v-card>
    
     <div :hidden="isSearch" class="toast-wrapper">
      <div class="toast">
        <v-row>
          <v-col cols="1">
            <button @click="isSearch=!isSearch" ><v-icon  color="#144673">mdi-close</v-icon></button>
          </v-col>
          <v-col cols="9">
            <input type="text" class="text-right" placeholder="search" v-model="keyword" style="width:100%;" v-on:keyup.enter="send(); " />
          </v-col>
          <v-col cols="2">
            <button @click="send();" ><v-icon    color="#144673">mdi-magnify</v-icon></button>
          </v-col>
        </v-row>
      </div>
    </div>
     <!-- <v-card  style="z-index:20001;">
      
      <v-navigation-drawer
         
    
         v-model="isSearch"
         temporary
       >
       <input type="text" placeholder="search" v-model="keyword" />
      </v-navigation-drawer>
      </v-card> -->
    </div>
</template>
<script>
import NavBar from './NavBar.vue'


export default{
    data() {
        return {
            drawer: null,
            keyword: "",
            isSearch: true
        };
    },
    props: {
        name: String,
        sec: String,
        abr: String,
        logo: String,
        items: Array
    },
    computed: {
        currentRouteName() {
            if (this.$route.name.includes("search")) {
                console.log();
                this.isSearch = false;
            }
            else {
                this.isSearch = true;
            }
        },
    },
    methods: {
        send() {
            this.$router.push({
                name: "search",
                params: { word: this.keyword }
            });
        }
    },
    emits: [],
    components: { NavBar }
}
</script>
<style scoped>
a{
  text-decoration: none;
}
.card{

text-align: right;

}
.Title{
    color: #144673;
}
.header{
    justify-content: center;
    text-align: center;
    
   
    color: #fff;
    width: 100%;
    display: flex;
    


    
}
img{
 
width:60px;
}
.header h1{
 

  margin: 0 2rem auto;

}
.v-system-bar .v-icon {
    opacity: var(--v-low-emphasis-opacity)!important;
}
ul{
  padding-left: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
  color:  #144673;
}
.toast-wrapper {
      position: fixed;
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


<!-- <input type="text" placeholder="search" v-model="keyword" /> -->