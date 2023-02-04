<template>
 <div class="vl-parent">
                 
  <v-container>
   
    
        <v-row> 
          
          

          
          <v-row>
           <v-col>
            
           </v-col>
          </v-row>
          
          <v-col cols="12">
          
            <v-row >
    <v-col >
   <v-breadcrumbs style="color:darkblue;font-weight:bold"  class="float-right text-h6 " :items="['الثالثة', 'الثانية', 'الرئيسية']"></v-breadcrumbs>
</v-col>
</v-row>
          <v-card style="border:2px solid ;border-color:#D4E9F9;border-width:6px">
            <v-row  class="pa-8 " >
                <v-col  >
                    <v-row  class="float-right">
                   <h2 style="color:darkblue">{{ task.title }}</h2>
                     </v-row>
                   <v-row>
                     <v-col style="text-align:center" >
                    <img  :src="task.image" alt="">
                     </v-col>
                     </v-row>
                     <v-row>
                        <h3>{{ task.text }}</h3>
                        <br>
                        <h3>{{ task.text }}</h3>
                        <br>
                        <h3>{{ task.text }}</h3>
                     </v-row>
                     <br>
                     <br>
                     <v-row class="pa-6" >
                        <v-col cols="12" class="text-right">
                        <table style="width:100%" >
                        <thead style="">
     
        
        <th >
          الكمية
        </th>
        <th>
        فصل
        </th>
        <th>
            المعدل
        </th>
        <th >
          العنوان
        </th>
      
    </thead>
    <tbody>
      <tr
        v-for="item in table"
        :key="item.name"
      >
      
        <td>{{ item.number }}</td>
        <td style="background-color:gainsboro">{{ item.number2 }}</td>
        <td >{{ item.number3 }}</td>
        <td style="font-size:larger">{{ item.name }}</td>
      </tr>
    </tbody>
  </table>
</v-col>
                     </v-row>
                     <v-row>
                        <h3>{{ task.text }}</h3>
                        <br>
                        <h3>{{ task.stext }}</h3>
                        <br>
                        <h3>{{ task.text }}</h3>
                        <h3>{{ task.text }}</h3>
                        <br>
                        <h3>{{ task.text }}</h3>
                        <br>
                        <h3>{{ task.text }}</h3>
                        <br>
                        <h3>{{ task.text }}</h3>
                     </v-row>
                    
                     
            </v-col>
            </v-row>
          </v-card>
          </v-col>
          
        
          </v-row>
          
          </v-container>
        </div>
     
</template>
<script>
  
  
export default{
  components: {
            
        },
    name:'Content',
    props:{
        title:String,
        text:String,
        task:Object,
    },
    data () {
      return {
        isLoading: true,
                fullPage: true,
        table: [
          {
            name: 'الاصول',
            number: 159,
            number2:200,
            number3:300,
          },
          {
            name: 'اجمالي حقوق ',
            number: 237,
            number2:200,
            number3:300,
          },
          {
            name: 'اجمالي الاجراءات',
            number: 262,
            number2:200,
            number3:300,
          },
          {
            name: 'حساب الربح',
            number: 305,
            number2:200,
            number3:300,
          },
          {
            name: 'تةزيعات المساهمين',
            number: 356,
            number2:200,
            number3:300,
          },
         
          
        ],
      }
    },
    methods: {
            doAjax() {
                this.isLoading = true;
                // simulate AJAX
                setTimeout(() => {
                    this.isLoading = false
                }, 3000)
            },
            onCancel() {
                console.log('User cancelled the loader.')
            }
        },
        beforeMount(){
          this.doAjax()
 },
    
}
</script>

<style>
table{
  border: 1px solid;
}
  td {
    border: 1px solid ;
    
} 
th{
    padding-right: 6px;
   font-size: 1.5rem;
   font-weight: bolder;
   
    background-color:  gainsboro;
}
img{
    width: 60%;
}

</style>