<template>
<v-container class="mt-10">
    <Search :searchs="searchs" :word="word"/>
</v-container>
   </template>
   
   <script>
   import { defineComponent } from 'vue';
   
   // Components
   import Search from '@/components/Search.vue';
   
   export default defineComponent({
     name: 'SearchView',
   
     components: {
       Search,
     },
    props:{
        word:String
    },
    
    
     data(){
       return{
         //word:this.$route.params.word,
         searchs:[
         {
          image:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title:'معيط وزير المالية يصرح لنييورك تايمز',
          body:'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...'  
         },
         {
          image:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title:'السيسي و مشروعات ماليه',
          body:'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...'  
         },
         {
          image:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title:'الاسواق و علاقتها بالستثمار العقاري',
          body:'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل السيسي ... او نماذج مواقع انترنت ...'  
         },
         {
          image:'https://cdn.vuetifyjs.com/images/cards/docks.jpg',
          title:'نماذج مواقع انترن',
          body:'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...'  
         },
   
   
         ],
         
       }
       
     }
   });
   </script>
   