<template>
  <Aboutp :title="title" :body="body" />
</template>
<script>
import Aboutp from '@/components/Aboutp.vue';
export default{
  components:{
    Aboutp,
  },
  data(){
    return{
      title:'معلومات عنا',
      body:'لوريم ايبسوم هو نموذج افتراضي يوضع في التصاميم لتعرض على العميل ليتصور طريقه وضع النصوص بالتصاميم سواء كانت تصاميم مطبوعه ... بروشور او فلاير على سبيل المثال ... او نماذج مواقع انترنت ...'  
    }
  }

}
</script>
