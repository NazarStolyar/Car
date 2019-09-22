<template>
    <v-container>
        <v-layout row>
            <v-flex xs12>
               <v-card>
                   <v-card-media
                        src='https://m.atcdn.co.uk/vms/media/03ff2aefd95f451eac48c76544dd6c4a.jpg' >
                   </v-card-media>
                   <v-card-text>
                        <h1 class="text--primary"> Cars </h1>
                       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium asperiores consectetur, ducimus magni perferendis similique. Consectetur cum doloremque obcaecati. Officia?</p>
                   </v-card-text>
                   <v-card-actions>
                       <v-spacer></v-spacer>
                       <v-btn class="warning" flat>Edit</v-btn>
                       <v-btn class="success">Buy</v-btn>
                   </v-card-actions>
               </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {

            }
        }
    }


</script>

<style>


</style>