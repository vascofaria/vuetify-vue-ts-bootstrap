<template>
  <v-app id="inspire">
    <v-navigation-drawer
      :v-model='true'
      app
      clipped
    >
      <v-list dense>

        <v-list-item v-for='page in pages' :key='page.title' @click="switchPage(page.path)">
          <v-list-item-action>
            <v-icon>{{page.icon}}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>{{page.title}}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      clipped-left
    >
      <v-toolbar-title>VUETIFY BOOTSTRAP</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <router-view></router-view>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang='ts'>
  import { Vue, Component, Prop } from 'vue-property-decorator';
  import { constantRouterMap } from '@/config/router.config';

  @Component({})
  export default class BoardLayout extends Vue {

    public drawer: boolean = false;
    public pages: any[];

    public created() {
      this.getPages();
      this.$vuetify.theme.dark = true;
    }

    public getPages() {
      this.pages = [];
      constantRouterMap[0].children.forEach((route) => {
        this.pages.push({ title: route.meta.title, icon: route.meta.icon, path: route.meta.fullpath, });
      });
    }

    public switchPage(path: string) {
      this.$router.push(path);
    }
  }
</script>