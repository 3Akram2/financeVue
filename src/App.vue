<template>
  <v-app>
    
      
        <AppBar :name="name" :sec="sec" :abr="abr" :logo = "logo" :items="items" />
    
        <v-main>
      <router-view />
    </v-main>
    
   <Footer :name="name" :sec="sec" :abr="abr" :logo = "logo" :items="items" :finances="finances" :companydetails=" companydetails" fImage="https://i.pinimg.com/736x/f7/63/03/f7630358b6c2e058381a34be8d2736d8.jpg" />
   
    
  </v-app>
</template>

<script>
import AppBar from './components/AppBar.vue';
import Footer from './components/Footer.vue';
export default {
  name: 'App',
  components:{
    AppBar,
    Footer,
  },
  methods:{
searching(keyword){
  console.log("app.vue =====>",keyword)
}
  },

  data: () => ({
    name:"اسم الشركه ",
    sec:'المجال',
    abr:'B.E.S',
    logo : "https://cdn.pixabay.com/photo/2016/12/27/13/10/logo-1933884__340.png",
    
    items:[
                {
                    id:1,
                    name:'الرئيسيه',
                    link:'/#sec1'
                },
                {
                    id:2,
                    name:'اداره الاعمال',
                    link:'/#par'
                },
                {
                    id:3,
                    name:'تخطيط استراتيجي',
                    link:'/#tb'
                },
                {
                    id:4,
                    name:'الباقه الماليه',
                    link:'/#tbtwo'
                },
                {
                    id:5,
                    name:'اداره النقود',
                    link:'/#crd'
                },
                {
                    id:6,
                    name:'الانظمه و العمليات',
                    link:'/#crd'
                },
                {
                    id:7,
                    name:'الضرائب',
                    link:'/#home'
                },
                {
                    id:8,
                    name:'وسائل التواصل',
                    link:'/#home'
                },
                {
                    id:9,
                    name:'الفواتير الالكترونيه',
                    link:'/#home'
                },
            ],
            finances:[
            {
                    id:1,
                    name:'فواتير',
                    link:'#home'
                },
                {
                    id:2,
                    name:'فاتورة الكترونية ',
                    link:'#par'
                },
                {
                    id:3,
                    name:' الفواتير الالكترونية',
                    link:'#tb'
                },
                {
                    id:5,
                    name:' هامش الربح',
                    link:'#crd'
                },
                {
                    id:6,
                    name:' الخصومات الحقيقية ',
                    link:'#home'
                },
                {
                    id:7,
                    name:'التعاقدات',
                    link:'#home'
                },
                {
                    id:8,
                    name:' الضمانات',
                    link:'#home'
                },
               
            ],
            companydetails:[
                {
                    id:1,
                    name:'معلومات عنا',
                    link:'/about'
                },
                {
                    id:2,
                    name:' انضم الينا',
                    link:'/about'
                },
                {
                    id:3,
                    name:' رسائل التواصل ',
                    link:'/about'
                },
                {
                    id:4,
                    name:'اتصل بنا',
                    link:'/about'
                },
                

            ]
        
  }),
}
</script>
<style>
.con{
  
  width:100%;
  margin-top: 6rem;
}
.bm{
  margin-top: 2%;
}
#app html,body{
    overflow-x: hidden;
}

</style>