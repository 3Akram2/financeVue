<template>
    <v-row>
        <v-col cols="2">

        </v-col>
        <v-col cols="8">
        <v-row>
            
         <v-col  class="text-center" >
            <h1 style="color:#0d3a64"> {{ title }}</h1>
         </v-col>
         <v-row>
            <v-col>
                <v-card class="text-right" style="background-color:#C8D3DB">
                    <h2 style="padding:20px;color:#0d3a64">{{ body }}</h2>
                </v-card>
            </v-col>
         </v-row>

        </v-row>
        </v-col>
        <v-col cols="2">

        </v-col>
    </v-row>
</template>

<script>
export default{
    name:'About',
    props:{
        title:String,
        body:String,
    }
}

</script>