<template>
    <footer class="foter">
<v-row  class="mb-0">
    <v-col class="mt-3" cols="12" sm="3">
       <img  class="pic1 pa-3" :src="fImage" />
       
       <ul>
      <li class="text-center " style="font-weight:bolder; font-size:20px; line-height: normal; color: #fff; ">{{ name }}</li>
      <li class="text-center" style="font-weight:bolder; font-size:16px; line-height: normal; color: #fff; ">{{ sec }}</li>
      <li class="text-center" style="font-weight:bolder; font-size:20px; line-height: normal; color: #fff;">{{ abr }} </li>
      
     </ul>
     
    </v-col >
   
    <v-col class="mt-3" cols="12" sm="6">
      
        <v-row class="mt-3">
          
          <v-divider horizontal class="horizontal hidden-md-and-up "></v-divider>
            <v-divider class="test hidden-sm-and-down "
  vertical
></v-divider>


        <v-col  cols="12" sm="4">
            
            <h2 style="color:white" class="text-center"> الاقسام</h2>
            <h3 class="text-center" v-for="item in items" :key="item.id"><router-link style="color:#fff" :to="item.link">{{ item.name }}</router-link></h3>
        </v-col>
        
  
        <v-divider style="color:white" class=" horizontal hidden-md-and-up "></v-divider>
        <v-divider class="test hidden-sm-and-down "
  vertical
></v-divider>


        <v-col  cols="12" sm="4">
            <h2 style="color:white" class="text-center">ماليات</h2>
            <h3 class="text-center" v-for="finance in finances" :key="finance.id"><router-link style="color:#fff;padding-top:4px;" :to="finance.link">{{ finance.name }}</router-link></h3>
        </v-col>
        <v-divider class="horizontal hidden-md-and-up "></v-divider>
        <v-divider class="test hidden-sm-and-down "
  vertical
></v-divider>

        <v-col cols="12" sm="4">
           
            <h2 style="color:white" class="text-center">الشركة</h2>
            <h3 class="text-center" v-for="detail in companydetails" :key="detail.id"><router-link style="color:#fff" :to="detail.link">{{ detail.name }}</router-link></h3>
</v-col>

</v-row>
    </v-col>
     
    <v-col class="mt-3" cols="12" sm="3">
      
        <form  action="" class="me" method="get"  >
          <h3 style="padding-top:5px;padding-bottom: 4px ;text-align: center;color:white; margin-bottom: 10px;">كيف يمكن ان نساعد</h3>
         
            <v-row>
              <v-col cols="9" class="pa-1" >
                <input type="name" class="inpu"   id="fname" name="fname" required>
                        </v-col>
              <v-col cols="3" class="text-right pa-1">
                <label class="lab"  for="name">الاسم</label></v-col>
            </v-row>
            
            <v-row>
              <v-col cols="9" class="pa-1" ><input type="email" class="inpu"   v-model="email"  :rules="emailRules"  label=""  required  ></v-col>
                <v-col cols="3" class="text-right pa-1" >
                  <label class="lab" for="email">البريد </label></v-col>
            </v-row>


            <v-row>
              <v-col cols="9" class="pa-1" ><input type="phone" class="inpu" required  >
                </v-col>
                <v-col cols="3" class="text-right pa-1" >
                <label class="lab" for="phone"> التليفون</label>
              </v-col>
            </v-row>
            

            <v-row>
              <v-col cols="9" class="pa-1" ><textarea class="inpu" ></textarea>
                </v-col>
                <v-col cols="3" class="text-right pa-1" >
                <label class="lab" for="msg">رسالة</label>
              </v-col>
            </v-row>
           <v-row>
            <v-col cols="3"></v-col>
            <v-col cols="6"><button  class="button-18" role="button">اضغط الان</button></v-col>
            <v-col cols="3"></v-col>
           </v-row>
                
            </form>
    </v-col>
</v-row>
</footer>
</template>
<script>

export default{
props:{
    name:String,
    abr:String,
    sec:String,
    items:Array,
    fImage:String,
    finances:Array,
    companydetails:Array,
},
data: () => ({
     
     email: '',
   emailRules: [
     v => !!v || 'E-mail is required',
     v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
   ],
 }),
    
}
</script>

<style scoped>
.button-18 {
    justify-content: center;
  align-items: center;
  
 background-color: #16437E;
  border: 2px  solid;
  border-radius:10px ;
  
  outline: white;
  box-sizing: border-box;
  color: #ffffff;
  cursor: pointer;
  display: inline-flex;
  font-family: -apple-system, system-ui, system-ui, "Segoe UI", Roboto, "Helvetica Neue", "Fira Sans", Ubuntu, Oxygen, "Oxygen Sans", Cantarell, "Droid Sans", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Lucida Grande", Helvetica, Arial, sans-serif;
  font-size: 15px;
  font-weight: 400;
  width: 100px;
  margin-top: 14px;
  
  min-height: 30px;
  min-width: 0px;
 
  
  
  text-align:center;
  
  user-select: none;
  -webkit-user-select: none;
  vertical-align: middle;
}

.button-18:hover,
.button-18:focus { 
  background-color: #16437E;
  color: #ffffff;
}


.button-18:active {
  background: #09223b;
  color: rgb(255, 255, 255, .7);
}

.button-18:disabled { 
  cursor: not-allowed;
  background: rgba(0, 0, 0, .08);
  color: rgba(0, 0, 0, .3);
}
.me{
  border: 3px solid white;
    border-radius: 40px;
    padding: 10px 25px;
    margin: 10px 10px;
}
li{
  list-style: none;
}
a{
    text-decoration: none;
    color:#fff;
}
.foter{
    background-color:rgb(16, 61, 103);
    height: fit-content;
   bottom: 0;
   

}
.vertical {
    border-left: 1px solid white;
    height: 156px;
    grid-area: line;
    margin-top: auto;
    margin-bottom: auto;

    
    
    }
    .pic1{
        display: block;
  margin-left: auto;
  margin-right: auto;
        width: 100%;
        height: 220px;
    }
    .test {
       height: 150px;
       border-color: white !important;
       margin-top:50px !important;
       
}
.horizontal{
        border: 1px solid white;
        
        
       
       margin: 0 200px;
       width: 50px;
    
    
    }
    .lab{
      color:white;  
      font-size:16px;
      text-align: right;
      margin-right: 5px;
    }
    .inpu{
      width: 100%;
      box-sizing: border-box;
       border: 1px solid lavenderblush ;
       border-radius: 4px;
       background-color: #0b356e; 
       color:aliceblue;
    }


</style>