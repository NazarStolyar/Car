<template>
    <div>
    <v-container fluid>
        <v-layout row>
            <v-flex sx12>
                <v-carousel>
                    <v-carousel-item
                            v-for="(item, index) in homeCars"
                            :key="index"
                            :src="item.src"
                            reverse-transition="fade-transition"
                            transition="fade-transition"
                    >
                        <div class="link-btn">
                            <v-btn class="error" :to="'/ad/' + item.id">{{ item.title }}</v-btn>
                        </div>
                    </v-carousel-item>
                </v-carousel>
                </v-flex>
        </v-layout>
    </v-container>
    <v-container grid-list-lg>
        <v-layout row wrap>
                <v-flex xs12 sm6 md4 v-for="(item, index) in homeCars" :key="index">
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
                            <v-btn flat :to="'/ad/' + item.id">Open</v-btn>
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
                {
                    src: 'https://i.infocar.ua/i/12/1212/1400x936.jpg',
                    id: 0,
                    promo: false,
                    title: 'Tiguan',
                    description: 'Tiguan is the bast car in the world'
                },
                {
                    src: 'https://cdn.volkswagen.ua/media/Theme_Teaser_BreakerMedia_Image_Component/8790-19199-image/dh-3840-05dd08/f9d66299/1472124360/tn0880.jpg',
                    id: 1,
                    promo: true,
                    title: 'Tiguan',
                    description: 'Tiguan is the bast car in the world'
                },
                {
                    src: 'https://static.volkswagen.ru/content/dam/vw-ngw/vw_pkw/importers/ru/models/tiguan/press/2017-09-05_Tiguan_vs_Mazda_vs_Honda_vs_Kia_in_Autoreview.jpg/_jcr_content/renditions/original.transform/max/img.jpg',
                    id: 2,
                    promo: false,
                    title: 'Tiguan',
                    description: 'Tiguan is the bast car in the world'
                },
                {
                    src: 'https://m.atcdn.co.uk/vms/media/03ff2aefd95f451eac48c76544dd6c4a.jpg',
                    id: 3,
                    promo: true,
                    title: 'Tiguan',
                    description: 'Tiguan is the bast car in the world'
                },
            ],
        }
    },
    methods: {

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