<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">Orders</h1>
                <v-list
                        subheader
                        two-line
                        v-for="(item) in orders"
                        :key="item.id"
                >
                    <v-list-tile>
                        <v-list-tile-action>
                            <v-checkbox color="success" :input-value="item.done" @change="markDone(item)"></v-checkbox>
                        </v-list-tile-action>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.name }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.phone }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                        <v-list-tile-action>
                            <v-btn :to="'/ad/' + item.adId" class="primary">Open</v-btn>
                        </v-list-tile-action>
                    </v-list-tile>
                </v-list>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                orders: [
                    {
                        id: 0,
                        name: 'Nazar',
                        phone: '0680406408',
                        adId: '123',
                        done: false,
                    }
                ]
            }
        },
        methods: {
            markDone(item) {
                item.done = true
            },
        }
    }


</script>

<style>


</style>