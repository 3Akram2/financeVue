<template>
    <v-row>
    <v-card width="100%" style="border:1px solid black">
        
        
        
        <v-col  class="" cols="12">
            <v-form
      ref="form"
      v-model="valid"
      lazy-validation>
      <v-btn
        color="#3b5998"
        class="mb-4"
        
        block

      >
        <span style="color:white; ">Login with facebook<v-icon class="pl-2" style="font-size:30px">mdi-facebook</v-icon></span>
      </v-btn>
      <v-btn
        color="red"
        class="mb-4"
        
        block

      >
        <span style="color:#fff"> Login with google<v-icon class="pl-2" style="font-size:27px">mdi-google</v-icon></span>
      </v-btn>
      <p class="d-block text-h5">OR</p>
      
      <v-text-field
        
        v-model="email"
        :rules="emailRules"
        label="البريد الالكتروني"
        required
      ></v-text-field>
    
      

        <v-text-field
        
        v-model="password"
        append-icon="mdi-eye"
        @click:append="toggleShowPass"
        :type="showPass? 'text':'password'"
        label="كلمه المرور"
        required
      >
     </v-text-field>
      
     
     
      <v-checkbox
        v-model="checkbox"
        label="تذكرني ؟" 
        
      ></v-checkbox>
     
      <v-btn
        color="black"
        class=""
        @click="validate"
        rounded="pill"
        block
      >
        <span style="color:#fff">تسجيل الدخول</span>
      </v-btn>
    </v-form>
        </v-col>
        
    
    
</v-card>
</v-row>
  </template>
  <script>
  export default {
    name:'Form',
    data: () => ({
      valid: true,
      showPass:false,
     
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
       password:'',
      checkbox: false,
    }),

    methods: {
      async validate () {
        console.log(this.email)
        console.log(this.password)
        console.log(this.checkbox)
        const { valid } = await this.$refs.form.validate()

       
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
      toggleShowPass(){
        console.log("========>",this.showPass)
        this.showPass=!this.showPass

      }
    },
  }
</script>