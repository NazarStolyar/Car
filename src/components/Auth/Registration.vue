<template>
    <v-container fluid fill-height>
        <v-layout align-center justify-center>
            <v-flex xs12 sm8 md6>
                <v-card class="elevation-12">
                    <v-toolbar dark color="primary">
                        <v-toolbar-title>Registration</v-toolbar-title>

                    </v-toolbar>
                    <v-card-text>
                        <v-form v-model="valid" ref="form" lazy-validation>
                            <v-text-field
                                    prepend-icon="email"
                                    name="email"
                                    label="Email"
                                    type="email"
                                    :rules="emailRules"
                                    v-model="email"
                            ></v-text-field>
                            <v-text-field
                                    prepend-icon="lock"
                                    name="password"
                                    label="Password"
                                    type="password"
                                    v-model="password"
                                    :counter="6"
                                    :rules="passRules"
                            ></v-text-field>
                            <v-text-field
                                    prepend-icon="lock"
                                    name="confirm-password"
                                    label="Confirm Password"
                                    type="password"
                                    v-model="confirmPassword"
                                    :counter="6"
                                    :rules="ConfirmPassRules"
                            ></v-text-field>
                        </v-form>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn @click="onSubmit" :loading="loading" :disabled="!valid || loading" color="primary">Create Accounte</v-btn>
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
                email: '',
                password: '',
                confirmPassword: '',
                valid: false,
                emailRules: [
                    v => !!v || 'E-mail is required',
                    v => /.+@.+/.test(v) || 'E-mail must be valid'
                ],
                passRules: [
                    v => !!v || 'Pass is required',
                    v => v.length >= 6 || 'Pass must be less than 6 characters'
                ],
                ConfirmPassRules: [
                    v => !!v || 'Pass is required',
                    v => v === this.password || "Password sould match"
                ]
            }
        },
        methods: {
            onSubmit() {
                if (this.$refs.form.validate()) {
                    const user = {
                        email: this.email,
                        password: this.password
                    };

                    this.$store.dispatch('registerUser', user)
                        .then(() => {
                            this.$router.push('/')
                        })
                        .catch(err => console.log(err))

                }
            }
        },
        computed: {
            loading () {
                return this.$store.getters.loading
            }
        }
    }


</script>

<style>


</style>