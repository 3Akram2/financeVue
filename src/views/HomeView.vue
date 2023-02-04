<template>
  <div>
  <div  id="home">
  </div> 
       
        
        <Swiper :covers="covers" />
        
          
          <div style="text-align:center;  ">
          <Buttonone :text="text" :color="color" link="#" iconp="" />
        </div>
        <br/>
        <v-divider class="hr1"></v-divider>
        
        
        <div id="sec1">
        <Contact :socials="socials" :ima="ima" :body="body" :num="num" :subtitle="subtitle" :title="title" />
      </div>
      <div id="tbtwo"></div>
        <Table2/>
        
        <h2 style="text-align:center;color:#F2780C; font-size:30px;">الانظمة و العمليات</h2>
        <div id="crd">  </div>
          
        <Cards :cardsData="cardsData"/>
    
        
        
        
        <div id="tb">
        <Table :htitle="htitle" :himage="himage" :texts="texts"/>
      </div>
      <v-container class="text-center">
          <v-row>
            <v-col sm="3" ></v-col>
            <v-col sm="6" cols="12"><voice/></v-col>
            <v-col sm="3" ></v-col>
          </v-row>
          
        </v-container>
        <div id="par">
        </div>
        <br/>
        
        <Success :partners="partners" :headTitle="headTitle" :sTitle="sTitle" :points="points"  :im="im"/>
       
        <br/>
      </div> 
      </template>
  

<script>
import Buttonone from '@/components/Buttonone.vue';
import voice from '../components/voice.vue'
import Swiper from '@/components/swipers/Swiper.vue';
import NavBar from '../components/NavBar.vue';
import ButtonTwo from '../components/ButtonTwo.vue';
import Success from '../components/Success.vue';
import Contact from '../components/Contact.vue';
import Table from '../components/Table.vue';
import Table2 from '../components/Table2.vue';
import Cards from '../components/Cards.vue'

import { defineComponent } from 'vue';

// Components


export default defineComponent({
  name: 'HomeView',

  components: {
    Swiper,
    Buttonone,
    voice,
        NavBar,
        ButtonTwo,
        Success,
        Contact,
        Table,
        Table2,
        Cards,
        Buttonone
        
   
  },
  data()  {
   
   return{
     text:"استكشف الان",
     color:"#0d3a64",
     // experiance section props
     ima:'https://thumbs.dreamstime.com/b/men-suits-working-computer-office-business-161449820.jpg',
     body:'نستثمر فيك مع مدير مالي متمرس و ذو خبرة مرتبط بشبكة مع العشرات من شركائنا , ووضع مجموعة واسعة من المواهب للعمل من اجلك فقط . استثمارك معنا هو جزء بسيط مما ستدفعة لمدير مالي بدوام كامل. يمكمما بسهولة قيادة فرقك و عملياتك الحالية او دعمها او الاندماج فيها لتحقيق تأثير فوري',
     num:'+16',
     subtitle:'سنوات من الخبرة في منصب المدير المالي',
     title:'مدير مالي بدوام جزئي مع الالتزام طوال الوقت',
      // partner section props
        headTitle:'نحن شركاء معك',
        sTitle:'يمكن لشركائك المساعدة',
        im:'https://t3.ftcdn.net/jpg/03/41/00/18/360_F_341001801_VJ33Cip24cS8z0BzGeiIo7QJQsQUDPsY.jpg',
        points:['تواصل معنا ',"حدد موعدا" ,"استكشف معنا كل ما تريد ","لاضغط. لامتابع. فقط سنساعدك"],
        //how it works props
        himage:'https://t3.ftcdn.net/jpg/03/64/84/36/360_F_364843654_9GloamwHkeZDTqCPK1MAOf6JaPmpkFZk.jpg',
        htitle:"كيف تعمل ..؟",
        texts:[
          {
          id:'1',
          title:' الى اين تريد الذهاب ؟ ',
          body:'نحن لا نبدأ بالتقارير و البيانات . نبدأ معك محادثات ثقافية لفهم قيمتك و رؤيتك '
        },
        {
          id:'2',
          title:'كيف يمكنك الوصول الى هناك ؟ ',
          body:'يكشف تحليل الخبراء عما تحتاجه للبدء و التوقف عن القيام به للتغلب على مشكلات و تحقيق اهداف  جديده لتعلم كيفيه تحديد المصدر و حل الاعراض لضعف الاداء '
        },
        {
          id:'3',
          title:'ما يلزم لتحسين الاداء ؟ ',
          body:'يتحد تركيزنا على العلاقات مع نهجنا المبتكر لتجاوز حل المشكلات و تقديم نتائج مستدامة و قابلة للتكرار'
        },
      ],
        // main swiper 
      covers: [
          {
            id:1,
            src: 'https://previews.123rf.com/images/rafafrancis/rafafrancis0904/rafafrancis090400073/4712312-picture-of-the-office-buildings-in-new-york-city-manhattan.jpg',
            headText:'لن تحتاج لمزيد ',
            sub:' من الادوات',
            text:'بعد الان'
          },
          {
            id:2,
            src: 'https://newyorkyimby.com/wp-content/uploads/2019/11/270-Park-Avenue-November-2019-777x648.jpg',
            headText:'لن تحتاج لمزيد',
            sub:' من الادوات',
            text:'بعد الان'
          },
          {
            id:3,
            src: 'https://static.dezeen.com/uploads/2022/04/Foster-Partners-JPMorgan-Chase-Manhattan-renders_dezeen_2364_hero-852x479.jpg',
            headText:'لن تحتاج لمزيد  ... ',
            sub:' من الادوات',
            text:'بعد الان'
          },
          
        ],
        // clints success stories swiper
        partners : [
        {
          id:1,
          src: 'https://1000logos.net/wp-content/uploads/2016/10/Amazon-logo-meaning.jpg',
          link:''
        },
        {
          id:2,
          src: "https://mir-s3-cdn-cf.behance.net/projects/404/562cdf143674427.Y3JvcCw5OTksNzgyLDAsMTA4.png",
          link:''
        },
        {
          id:3,
          src: 'https://static.vecteezy.com/system/resources/previews/006/240/761/original/initial-letter-b-tech-logo-design-template-element-eps10-vector.jpg',
          link:''
        },
        {
          id:4,
          src: 'https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/c4fc6e90321989.5e14970276763.png',
          link:''
        },
        {
          id:5,
          src: 'https://thumbs.dreamstime.com/b/apple-logo-19106337.jpg',
          link:''
        },
        {
          id:6,
          src: 'https://www.pngitem.com/pimgs/m/38-388714_skechers-shoes-logo-hd-png-download.png',
          link:''
        },
        {
          id:7,
          src: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
          link:''
        },
        {
          id:8,
          src: 'https://i.pinimg.com/originals/77/43/c5/7743c5e126d87411fe84a5e7ab56088f.jpg',
          link:''
        },
        
        
        
      ],
           // contact us swiper
      socials : [
          {
            id:1,
            src: 'https://img.icons8.com/color/240/null/facebook.png',
            
          },
          {
            id:2,
            src: "https://img.icons8.com/color/240/null/whatsapp--v1.png",
            
          },
          {
            id:3,
            src: 'https://img.icons8.com/color/240/null/instagram-new--v1.png',
            
          },
          {
            id:4,
            src: 'https://img.icons8.com/color/240/null/telegram-app--v1.png',
            
          },
          {
            id:5,
            src: 'https://img.icons8.com/color/240/null/twitter--v1.png',
            
          },
          {
            id:6,
            src: 'https://cdn.worldvectorlogo.com/logos/whatsapp-business-bg.svg',
            
          },
          {
            id:7,
            src: 'https://cdn-icons-png.flaticon.com/512/174/174857.png',
            
          },
          {
            id:8,
            src: "https://img.icons8.com/color/240/null/whatsapp--v1.png",
            
          },
          
          
        ],
         
        items:[
                {
                    id:1,
                    name:'الرئيسيه',
                    link:'#home'
                },
                {
                    id:2,
                    name:'اداره الاعمال',
                    link:'#par'
                },
                {
                    id:3,
                    name:'تخطيط استراتيجي',
                    link:'#tb'
                },
                {
                    id:4,
                    name:'الباقه الماليه',
                    link:'#tbtwo'
                },
                {
                    id:5,
                    name:'اداره النقود',
                    link:'#crd'
                },
                {
                    id:6,
                    name:'الانظمه و العمليات',
                    link:'#home'
                },
                {
                    id:7,
                    name:'الضرائب',
                    link:'#home'
                },
                {
                    id:8,
                    name:'وسائل التواصل',
                    link:'#home'
                },
                {
                    id:9,
                    name:'الفواتير الالكترونيه',
                    link:'#home'
                },
               
            ],
            cardsData:[
    { id:1,
      icon:'mdi-emoticon-cool',
       body1:'السياسية ',
      
      head:'الانظمة و العمليات',
      body2:'الاستراتيجية',
      body3:'الاستراتيجية',
      body4:'الاستراتيجية',
      body5:'الاستراتيجية',
      body6:'الاستراتيجية',
      body7:'الاستراتيجية',
    },
    { id:2,
      icon:'mdi-emoticon-cool',
       body1:'السياسية ',
      
      head:'الانظمة و العمليات',
      body2:'الاستراتيجية',
      body3:'الاستراتيجية',
      body4:'الاستراتيجية',
      body5:'الاستراتيجية',
      body6:'الاستراتيجية',
      body7:'الاستراتيجية',
    },
    { id:3,
      icon:'mdi-emoticon-cool',
       body1:'السياسية ',
      
      head:'الانظمة و العمليات',
      body2:'الاستراتيجية',
      body3:'الاستراتيجية',
      body4:'الاستراتيجية',
      body5:'الاستراتيجية',
      body6:'الاستراتيجية',
      body7:'الاستراتيجية',
    },{ id:4,
      icon:'mdi-emoticon-cool',
       body1:'السياسية ',
      
      head:'الانظمة و العمليات',
      body2:'الاستراتيجية',
      body3:'الاستراتيجية',
      body4:'الاستراتيجية',
      body5:'الاستراتيجية',
      body6:'الاستراتيجية',
      body7:'الاستراتيجية',
    },
    { id:5,
      icon:'mdi-emoticon-cool',
       body1:'السياسية ',
      
      head:'الانظمة و العمليات',
      body2:'الاستراتيجية',
      body3:'الاستراتيجية',
      body4:'الاستراتيجية',
      body5:'الاستراتيجية',
      body6:'الاستراتيجية',
      body7:'الاستراتيجية',
    },{ id:6,
      icon:'mdi-emoticon-cool',
       body1:'السياسية ',
      
      head:'الانظمة و العمليات',
      body2:'الاستراتيجية',
      body3:'الاستراتيجية',
      body4:'الاستراتيجية',
      body5:'الاستراتيجية',
      body6:'الاستراتيجية',
      body7:'الاستراتيجية',
    },
  ]

              
            
  //           sounds: 
  //     {
  //   id:1,
  //   first:'  بيان هام من الحكومة بشان موافقةعلي الاقتراحات المبذولة في المؤتمر',
  //   second:'لتحالف الوطني يطلق قطار الخير لصعيد مصر.. إعادة إعمار منازل وتقديم أجهزة كهربائية لعدد منلتحالف الوطني يطلق قطار الخير لصعيد مصر.. إعادة إعمار منازل وتقديم أجهزة كهربائية لعدد من',
  //   file  : 'https://cdn.freesound.org/previews/399/399114_4659549-lq.mp3'
  // }  
  
            
      
    
    
   } 
  },

});
</script>
<style scoped>
.btn{
  text-align: center;
 
}
</style>