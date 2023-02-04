<template>
     <v-system-bar height="38" color="#F8F8F8">

<div >
<router-link to="/login" ><v-btn elevation="0" color="#F8F8F8"  ><v-icon  icon="mdi-account-circle" style="color:#144673; " size="x-large"></v-icon><h4 class="Title"> &nbsp;  تسجيل الدخول  </h4></v-btn></router-link>
</div>
<v-spacer></v-spacer>



<button v-on:click="send" ><v-icon icon="mdi-magnify"   color="#144673"></v-icon></button>
<!-- <input type="text" style="border: 1px solid black; width: 90%; " placeholder="search" v-model="keyword" /> -->
  
</v-system-bar>
</template>
<script>
export default{
    data(){
    return{
     
    }
  },
  methods:{
    send(){
      this.$router.push({
  name: 'search',
  
  params: { word: this.keyword },
  


  
    })
  }

}
}
</script>