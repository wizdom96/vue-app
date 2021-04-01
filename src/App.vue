<template>
  <the-header></the-header>

  <div class="app">
  <router-view></router-view>
</div>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';

export default {
  components: {
    TheHeader
  },
  provide() {
    return {
      isLoggedIn: this.isLoggedIn,
      products: this.products,
      cart: this.cart,
      addProductToCart: this.addProductToCart,
      removeProductFromCart: this.removeProductFromCart,
      login: this.login,
      logout: this.logout,
    };
  },
  methods: {
    
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
  padding: 80px;
}
</style>