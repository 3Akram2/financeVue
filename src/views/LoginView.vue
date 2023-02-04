<template>
    <v-container>
    <Login />
  </v-container>
  </template>
  
  <script>
  import { defineComponent } from 'vue';
  
  // Components
  
  import Login from '@/components/Login.vue';
  
 
  
  export default defineComponent({
    name: 'LoginView',
  
    components: {
    
      Login,
    },
    data(){
      return{
        items: [
          {
            title: 'رئيسيه',
            disabled: false,
            href: 'https://github.com/',
          },
          {
            title: 'Link 1',
            disabled: false,
            href: 'breadcrumbs_link_1',
          },
          {
            title: 'Link 2',
            disabled: true,
            href: 'breadcrumbs_link_2',
          },
        ],
      }
    }
  });
  </script>
  
  
  
  <!-- <BreadCrumbs :items="items" />
    <ProcessSuccess deliveryTime='divery time estimated ' msg="ستصل الشحنه خلال 5 ايام عمل  من تاريخ تسيجل بوليصه الشحن" text="تمت العمليه بنجاح" :done="true"/> -->
    <!-- import BreadCrumbs from '@/components/BreadCrumbs.vue';
  import ProcessSuccess from '@/components/ProcessSuccess.vue'; -->