<template>
  <v-app>
    <v-navigation-drawer
            app
            temporary
            v-model="drawer"
    >
      <v-list>
        <v-list-tile
                v-for="link of links"
                :key="link.title"
                :to="link.url"
        >
          <v-list-tile-action>
            <v-icon>{{link.icon}}</v-icon>
          </v-list-tile-action>

          <v-list-tile-content>
            <v-list-tile-title v-text="link.titel"></v-list-tile-title>
          </v-list-tile-content>

        </v-list-tile>
      </v-list>

    </v-navigation-drawer>
    <v-toolbar dark color="primary" app>
          <v-toolbar-side-icon
                  @click="drawer = true"
                  class="hidden-md-and-up"
          >
          </v-toolbar-side-icon>
          <v-toolbar-title>
              <router-link to="/" tag="span" class="pointer">Car Application</router-link>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items class="hidden-sm-and-down">
            <v-btn
                flat
                v-for="link in links"
                :key="link.titel"
                :to="link.url"
            >
              <v-icon left>{{link.icon}}</v-icon>
              {{link.titel}}
            </v-btn>
          </v-toolbar-items>
    </v-toolbar>
    <v-content>
        <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
 data () {
     return {
         drawer: false,
         links: [
             {
                 titel: 'Login',
                 icon: 'lock',
                 url: '/login'

             },
             {
                 titel: 'Registration',
                 icon: 'account_circle',
                 url: '/registeration'
             },
             {
                 titel: 'Order',
                 icon: 'bookmark_border',
                 url: '/orders'
             },
             {
                 titel: 'Add car',
                 icon: 'note_add',
                 url: '/add_cars'
             },
             {
                 titel: 'My cars',
                 icon: 'list',
                 url: '/my_cars'
             }
         ]
     }
 }
}
</script>

<style scoped>
 .pointer {
     cursor: pointer;
 }

</style>