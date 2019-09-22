<template>
    <div>
    <v-container fluid>
        <v-layout row>
            <v-flex sx12>
                <v-carousel>
                    <v-carousel-item
                            v-for="(item, index) in promo"
                            :key="index"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    >
                        <div class="link-btn">
                            <v-btn class="error" :to="'/car/' + item.id">{{ item.title }}</v-btn>
                        </div>
                    </v-carousel-item>
                </v-carousel>
                </v-flex>
        </v-layout>
    </v-container>
    <v-container grid-list-lg>
        <v-layout row wrap>
                <v-flex xs12 sm6 md4 v-for="(item, index) in cars" :key="index">
                    <v-card>
                        <v-card-media :src="item.src" height="200px">
                        </v-card-media>
                        <v-card-title primary-title>
                            <div>
                                <h3 class="headline mb-0">{{ item.title }}</h3>
                                <div>{{ item.description }}</div>
                            </div>
                        </v-card-title>
                        <v-card-actions>
                            <v-btn flat :to="'/car/' + item.id">Open</v-btn>
                            <v-btn raised class="primary">Buy</v-btn>
                        </v-card-actions>
                    </v-card>
                </v-flex>
        </v-layout>
    </v-container>
    </div>
</template>

<script>
export default {

    data() {
        return {
            homeCars: [

            ],
        }
    },
    methods: {

    },
    computed: {
        promo() {
            return this.$store.getters.promo;
        },
        cars() {
            return this.$store.getters.cars;
        }
    }

}



</script>

<style scoped>
    .link-btn {
        position: absolute;
        bottom: 50px;
        left: 50%;
        background: rgba(0,0,0,0.5);
        padding: 10px 20px;
        border-radius: 5px 5px 0px 0px;
        transform: translate(-50%, 0);
    }

</style>