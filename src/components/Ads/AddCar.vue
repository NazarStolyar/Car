<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary md-3">Create new car</h1>
                <v-form v-model="valid" ref="form" lazy-validation>
                    <v-text-field
                            name="title"
                            label="Title"
                            type="text"
                            required
                            :rules="[v => !!v || 'Title is required']"
                            v-model="titel"
                    ></v-text-field>
                    <v-text-field
                            name="description"
                            label="Description"
                            type="text"
                            v-model="description"
                            multi-line
                            :rules="[v => !!v || 'Description is required']"
                    ></v-text-field>
                </v-form>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <v-btn class="warning">
                            Upload
                            <v-icon right dark>cloud_upload</v-icon>
                        </v-btn>
                    </v-flex>
                </v-layout>
                <v-layout row class="mb-3">
                    <v-flex xs12>
                        <img src="" height="150">
                    </v-flex>
                </v-layout>
                <v-layout row class="mb-3">
                    <v-switch
                            v-model="isPromo"
                            :label="`Show on home page: ${isPromo.toString()}`"
                    ></v-switch>
                </v-layout>
                <v-layout row class="mb-3">
                   <v-spacer>

                   </v-spacer>
                    <v-btn class="success" :disabled="!valid" @click="create()">
                        Create
                    </v-btn>
                </v-layout>
            </v-flex>

        </v-layout>
    </v-container>
</template>

<script>

    export default {
        data() {
            return {
                isPromo: false,
                titel: '',
                description: '',
                valid: false,
            };
        },
        methods: {
            create() {
                if(this.$refs.form.validate()) {
                    //this will be logic
                    const add = {
                        isPromo: this.isPromo,
                        title: this.titel,
                        description: this.description
                    };
                }
            }
        }

    }


</script>

<style>


</style>