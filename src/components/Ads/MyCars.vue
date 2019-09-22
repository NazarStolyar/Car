<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <h1 class="text--secondary mb-3">My cars</h1>
                <v-card class="elevation-10 mb-3" v-for="item in homeCars" :key="item.id">
                    <v-layout row>
                        <v-flex xs4>
                            <v-card-media
                            :src="item.src"
                            height="175px"
                            >
                            </v-card-media>
                        </v-flex>
                        <v-flex xs8>
                            <v-card-text>
                                <h2 class="text--primary">{{ item.title }}</h2>
                                <p>{{ item.description }}</p>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn :to="'/ad/' + item.id" class="info">
                                    Open
                                </v-btn>
                            </v-card-actions>
                        </v-flex>
                    </v-layout>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
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
        }
    }


</script>

<style>


</style>