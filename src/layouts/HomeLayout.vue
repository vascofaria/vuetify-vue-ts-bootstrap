<template>
  <div>
    <img alt="Vue logo" src="@/assets/logo.png">
    <hello-world msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script lang='ts'>
  import { Vue, Component } from 'vue-property-decorator';
  import HelloWorld from '@/components/HelloWorld.vue';

  @Component({ components: { 'hello-world': HelloWorld, }, })
  export default class HomeLayout extends Vue {

  }
</script>