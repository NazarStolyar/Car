export default {
    state: {
        cars: [
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
        ]
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        cars(state) {
            return state.cars;
        },
        promo(state) {
            return state.cars.filter(car => {
                return car.promo === true;
            })
        },
        myCars(state) {
            return state.cars;
        },
        byIsCar(state) {
            return adId => {
                return state.cars.find( car => car.id == adId )
            }
        }
    }
}