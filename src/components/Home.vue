<template>
    <v-container>
        <v-layout row>
            <v-flex>
                <h1>Home</h1>
                <div>
                    <ul >
                        <li v-for="(cars, index) in car" :key="index" @keyup="myMethod()" :class="{'active': index === counter }">{{ cars.name }} - {{cars.lastname}} - {{ cars.age }}</li>
                    </ul>


                    <p style="font-size: 32px">{{ name }}</p>
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {

    data() {
        return {
            car:  [
                {name: 'Nazar', lastname: 'Stoluar', age: 22},
                {name: 'Lili', lastname: 'Stoluar', age: 25},
                {name: 'Max', lastname: 'Stoluar', age: 2},
                {name: 'Nazar', lastname: 'Stoluar', age: 22},
                {name: 'Lili', lastname: 'Stoluar', age: 25},
                {name: 'Max', lastname: 'Stoluar', age: 2}
        ],
            isVisible: false,
            selected: -1,
            isRuslan: false,
            counter: 0,
            name: 'aaaa',
        }
    },
    created: function() {
        document.addEventListener('keyup', this.myMethod);
    },
    methods: {
        myMethod(event) {
            if (event.keyCode === 40) {
                this.counter++;
            } else if (event.keyCode === 38) {
                this.counter--;
            } else if (event.keyCode === 13) {
                let active = document.querySelector('.active').innerText;
                this.name = active ;
            }
         }
    }

}



</script>

<style>
    .active {
        color: red;
    }

    .red {
     color: red;
    }
    .blure {
        color: blue;
    }
    .purple {
        color: purple;
    }
    .silver {
        color: silver;
    }

</style>