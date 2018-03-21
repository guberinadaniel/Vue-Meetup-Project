<template>
  <v-app>
    <v-toolbar dark class="green darken-1">
      <v-toolbar-title>
        <router-link
          to="/"
          tag="span"
          style="cursor: pointer"
        >
          DevMeetup
        </router-link>
      </v-toolbar-title>
      <v-toolbar-side-icon
        @click.stop="sideNav = !sideNav"
        class="hidden-sm-and-up">
      </v-toolbar-side-icon>
      <v-spacer>
      </v-spacer>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn
          flat v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-navigation-drawer temporary v-model="sideNav" style="position: absolute">
      <v-list>
        <v-list-tile
          v-for="item in menuItems"
          :key="item.title"
          :to="item.link"
        >
          <v-btn flat>
          <v-list-tile-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-btn>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <main>
      <router-view>
      </router-view>
    </main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      sideNav: false
    }
  },
  computed: {
    menuItems(){
      let menuItems = [
        { icon: 'face', title: 'Sign up',link: '/signup'},
        { icon: 'lock_open', title: 'Sign in',link: '/signin'},
      ];
      if (this.userIsAuthenticated) {
        menuItems = [
          { icon: 'supervisor_account', title: 'View Meetups',link: '/meetups'},
          { icon: 'room', title: 'Organize Meetup',link: '/meetup/new'},
          { icon: 'person', title: 'Profile',link: '/profile'},
        ]
      }
      return menuItems;
    },
    userIsAuthenticated() {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined;
    }
  }
}
</script>
