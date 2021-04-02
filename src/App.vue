<template>
  <the-header></the-header> 
  <div class="app">
  <router-view></router-view>
  </div>
  <the-footer></the-footer>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';
import TheFooter from './components/footer/TheFooter.vue'
export default {
  components: {
    TheHeader,
    TheFooter
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
.app{  
    min-height: calc(100vh - 300px);
    padding: 100px;
}

</style>